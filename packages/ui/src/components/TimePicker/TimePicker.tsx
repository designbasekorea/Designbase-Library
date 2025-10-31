import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ClockIcon } from '@designbasekorea/icons';
import Modal, { ModalFooter } from '../Modal/Modal';
import Button from '../Button/Button';
import './TimePicker.scss';

export type TimePickerSize = 's' | 'm' | 'l';
export type TimePickerType = 'dropdown' | 'modal';
export type TimeFormat = '12h' | '24h' | '12h-with-seconds' | '24h-with-seconds';

export interface TimePickerProps {
    size?: TimePickerSize;
    type?: TimePickerType;
    value?: string;
    defaultValue?: string;
    format?: TimeFormat;
    minuteStep?: number;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (time24: string) => void;
    className?: string;
}

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 5;
const PADDING_COUNT = 2;

const TimePicker: React.FC<TimePickerProps> = ({
    size = 'm',
    type = 'dropdown',
    value,
    defaultValue = '12:00',
    format = '24h',
    minuteStep = 1,
    disabled = false,
    readonly = false,
    onChange,
    className,
}) => {
    const [selectedTime, setSelectedTime] = useState(value || defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || defaultValue);

    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

    // 모달용 임시 상태 (적용 전까지는 변경되지 않음)
    const [tempHours, setTempHours] = useState(12);
    const [tempMinutes, setTempMinutes] = useState(0);
    const [tempSeconds, setTempSeconds] = useState(0);
    const [tempPeriod, setTempPeriod] = useState<'AM' | 'PM'>('PM');

    const pickerRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 감지 (드롭다운만)
    useEffect(() => {
        if (!isOpen || type !== 'dropdown') return;

        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, type]);

    const is12h = format === '12h' || format === '12h-with-seconds';
    const showSeconds = format === '12h-with-seconds' || format === '24h-with-seconds';

    useEffect(() => {
        if (!value) return;
        setSelectedTime(value);
        setInputValue(value);
        parseTimeString(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // 모달이 열릴 때 현재 값을 임시 상태로 복사
    useEffect(() => {
        if (isOpen && type === 'modal') {
            setTempHours(hours);
            setTempMinutes(minutes);
            setTempSeconds(seconds);
            setTempPeriod(period);
        }
    }, [isOpen, type, hours, minutes, seconds, period]);

    const parseTimeString = (timeStr: string) => {
        const s = timeStr.trim();
        let h = 0, m = 0, sec = 0, p: 'AM' | 'PM' = 'AM';

        if (is12h) {
            const re = showSeconds
                ? /^(0?[1-9]|1[0-2]):([0-5]\d):([0-5]\d)\s*(AM|PM)$/i
                : /^(0?[1-9]|1[0-2]):([0-5]\d)\s*(AM|PM)$/i;
            const match = s.match(re);
            if (match) {
                h = parseInt(match[1], 10);
                m = parseInt(match[2], 10);
                sec = showSeconds ? parseInt(match[3], 10) : 0;
                p = (showSeconds ? match[4] : match[3]).toUpperCase() as 'AM' | 'PM';
                setPeriod(p); setHours(h); setMinutes(m); setSeconds(sec);
                return;
            }
        } else {
            const re = showSeconds
                ? /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
                : /^([01]?\d|2[0-3]):([0-5]\d)$/;
            const match = s.match(re);
            if (match) {
                h = parseInt(match[1], 10);
                m = parseInt(match[2], 10);
                sec = showSeconds ? parseInt(match[3], 10) : 0;
                setHours(h); setMinutes(m); setSeconds(sec);
                return;
            }
        }
    };

    const to24Hour = (h12: number, p: 'AM' | 'PM') => (p === 'AM' ? (h12 === 12 ? 0 : h12) : (h12 === 12 ? 12 : h12 + 12));

    const formatTimeString = (h: number, m: number, s: number, p?: 'AM' | 'PM') => {
        const HH = String(h).padStart(2, '0');
        const MM = String(m).padStart(2, '0');
        const SS = String(s).padStart(2, '0');
        if (is12h) return `${String(h).padStart(2, '0')}:${MM}${showSeconds ? `:${SS}` : ''} ${p || period}`;
        return `${HH}:${MM}${showSeconds ? `:${SS}` : ''}`;
    };

    const emitChange24 = (h: number, m: number, s: number, p?: 'AM' | 'PM') => {
        const h24 = is12h ? to24Hour(h, p || period) : h;
        onChange?.(`${String(h24).padStart(2, '0')}:${String(m).padStart(2, '0')}${showSeconds ? `:${String(s).padStart(2, '0')}` : ''}`);
    };

    const handleTimeChange = (h: number, m: number, s: number = seconds, p?: 'AM' | 'PM') => {
        setHours(h); setMinutes(m); setSeconds(s); if (p) setPeriod(p);
        const display = formatTimeString(h, m, s, p);
        setSelectedTime(display); setInputValue(display);
        emitChange24(h, m, s, p);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const handleInputBlur = () => {
        const s = inputValue.trim();
        let ok = false;
        if (is12h) {
            const re = showSeconds
                ? /^(0?[1-9]|1[0-2]):([0-5]\d):([0-5]\d)\s*(AM|PM)$/i
                : /^(0?[1-9]|1[0-2]):([0-5]\d)\s*(AM|PM)$/i;
            const m = s.match(re);
            if (m) {
                const h = parseInt(m[1], 10), mi = parseInt(m[2], 10);
                const sec = showSeconds ? parseInt(m[3], 10) : 0;
                const p = (showSeconds ? m[4] : m[3]).toUpperCase() as 'AM' | 'PM';
                handleTimeChange(h, mi, sec, p); ok = true;
            }
        } else {
            const re = showSeconds
                ? /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
                : /^([01]?\d|2[0-3]):([0-5]\d)$/;
            const m = s.match(re);
            if (m) {
                const h = parseInt(m[1], 10), mi = parseInt(m[2], 10);
                const sec = showSeconds ? parseInt(m[3], 10) : 0;
                handleTimeChange(h, mi, sec); ok = true;
            }
        }
        if (!ok) setInputValue(selectedTime);
    };

    const togglePicker = () => {
        if (disabled || readonly) return;
        setIsOpen((o) => !o);
    };

    // 모달용 핸들러들
    const handleModalTimeChange = (h: number, m: number, s: number = tempSeconds, p?: 'AM' | 'PM') => {
        setTempHours(h);
        setTempMinutes(m);
        setTempSeconds(s);
        if (p) setTempPeriod(p);
    };

    const handleModalApply = () => {
        // 임시 값을 실제 값으로 적용
        setHours(tempHours);
        setMinutes(tempMinutes);
        setSeconds(tempSeconds);
        setPeriod(tempPeriod);

        // 시간 변경 처리
        handleTimeChange(tempHours, tempMinutes, tempSeconds, tempPeriod);

        // 모달 닫기
        setIsOpen(false);
    };

    const handleModalCancel = () => {
        // 임시 값을 원래 값으로 복원
        setTempHours(hours);
        setTempMinutes(minutes);
        setTempSeconds(seconds);
        setTempPeriod(period);

        // 모달 닫기
        setIsOpen(false);
    };

    const pad2 = (n: number) => String(n).padStart(2, '0');

    /** ★ 변경 핵심: viewport(고정 레이어) ─ wheel(스크롤 영역) 분리 */
    const WheelPicker: React.FC<{
        label: string;
        items: (number | string)[];
        value: number | string;
        onChange: (value: number | string) => void;
        formatter?: (v: number | string) => string;
    }> = ({ label, items, value, onChange, formatter }) => {
        const wheelRef = useRef<HTMLDivElement>(null);
        const scrollTimeout = useRef<number | null>(null);
        const isProgrammatic = useRef(false);

        const indexOfValue = useCallback(
            (v: number | string) => items.findIndex((x) => x === v),
            [items]
        );

        const scrollToIndex = useCallback((idx: number, smooth = true) => {
            if (!wheelRef.current) return;
            const top = idx * ITEM_HEIGHT; // 상/하 패딩은 CSS로 처리
            isProgrammatic.current = true;
            wheelRef.current.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
            window.setTimeout(() => { isProgrammatic.current = false; }, 150);
        }, []);

        useEffect(() => {
            const i = indexOfValue(value);
            if (i >= 0) scrollToIndex(i, false);
        }, [value, indexOfValue, scrollToIndex]);

        useEffect(() => {
            const i = indexOfValue(value);
            if (i >= 0) scrollToIndex(i, false);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const handleScroll = () => {
            if (isProgrammatic.current) return;
            if (!wheelRef.current) return;

            if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
            scrollTimeout.current = window.setTimeout(() => {
                if (!wheelRef.current) return;
                const top = wheelRef.current.scrollTop;
                const idx = Math.round(top / ITEM_HEIGHT);
                const clamped = Math.max(0, Math.min(items.length - 1, idx));
                const v = items[clamped];
                scrollToIndex(clamped, true);
                if (v !== value) onChange(v);
            }, 120) as unknown as number;
        };

        const fmt = (v: number | string) => (formatter ? formatter(v) : (typeof v === 'number' ? pad2(v) : String(v)));

        return (
            <div className="designbase-time-picker__wheel-container">
                <div className="designbase-time-picker__wheel-label">{label}</div>

                {/* ★ 고정 레이어를 위한 뷰포트 컨테이너 */}
                <div className="designbase-time-picker__wheel-viewport">
                    {/* 스크롤 되는 영역 */}
                    <div
                        ref={wheelRef}
                        className="designbase-time-picker__wheel"
                        onScroll={handleScroll}
                        role="listbox"
                        aria-label={label}
                    >
                        {items.map((item, i) => (
                            <div
                                key={`${label}-${item}-${i}`}
                                className={clsx(
                                    'designbase-time-picker__wheel-item',
                                    item === value && 'designbase-time-picker__wheel-item--selected'
                                )}
                                role="option"
                                aria-selected={item === value}
                                onClick={() => {
                                    const idx = indexOfValue(item);
                                    scrollToIndex(idx, true);
                                    if (item !== value) onChange(item);
                                }}
                            >
                                {fmt(item)}
                            </div>
                        ))}
                    </div>

                    {/* ★ 스크롤과 독립된 고정 오버레이들 */}
                    <div aria-hidden className="designbase-time-picker__wheel-center-indicator" />
                    <div aria-hidden className="designbase-time-picker__wheel-fade wheel-fade--top" />
                    <div aria-hidden className="designbase-time-picker__wheel-fade wheel-fade--bottom" />
                </div>
            </div>
        );
    };

    const renderTimeSelector = (isModal = false) => {
        const hourItems = is12h ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
        const minuteItems = Array.from({ length: Math.floor(60 / minuteStep) }, (_, i) => i * minuteStep);
        const secondItems = Array.from({ length: 60 }, (_, i) => i);
        const periodItems: Array<'AM' | 'PM'> = ['AM', 'PM'];

        // 모달인 경우 임시 값 사용, 드롭다운인 경우 실제 값 사용
        const currentHours = isModal ? tempHours : hours;
        const currentMinutes = isModal ? tempMinutes : minutes;
        const currentSeconds = isModal ? tempSeconds : seconds;
        const currentPeriod = isModal ? tempPeriod : period;

        const handleChange = isModal ? handleModalTimeChange : handleTimeChange;

        return (
            <div className="designbase-time-picker__selector">
                <div className="designbase-time-picker__picker-wheels">
                    <WheelPicker
                        label="시간"
                        items={hourItems}
                        value={currentHours}
                        onChange={(v) => handleChange(v as number, currentMinutes, currentSeconds, currentPeriod)}
                    />
                    <WheelPicker
                        label="분"
                        items={minuteItems}
                        value={currentMinutes}
                        onChange={(v) => handleChange(currentHours, v as number, currentSeconds, currentPeriod)}
                    />
                    {showSeconds && (
                        <WheelPicker
                            label="초"
                            items={secondItems}
                            value={currentSeconds}
                            onChange={(v) => handleChange(currentHours, currentMinutes, v as number, currentPeriod)}
                        />
                    )}
                    {is12h && (
                        <WheelPicker
                            label="AM/PM"
                            items={periodItems}
                            value={currentPeriod}
                            onChange={(v) => handleChange(currentHours, currentMinutes, currentSeconds, v as 'AM' | 'PM')}
                            formatter={(x) => String(x)}
                        />
                    )}
                </div>

                <div className="designbase-time-picker__preview" aria-live="polite">
                    <ClockIcon size={20} />
                    <div className="designbase-time-picker__preview-time">
                        {formatTimeString(currentHours, currentMinutes, currentSeconds, currentPeriod)}
                    </div>
                </div>

                {/* 드롭다운인 경우에만 선택 버튼 표시 */}
                {!isModal && (
                    <div className="designbase-time-picker__dropdown-actions">
                        <Button
                            variant="primary"
                            size="m"
                            onPress={() => {
                                handleTimeChange(currentHours, currentMinutes, currentSeconds, currentPeriod);
                                setIsOpen(false);
                            }}
                        >
                            선택
                        </Button>
                    </div>
                )}

            </div>
        );
    };

    const classes = clsx(
        'designbase-time-picker',
        `designbase-time-picker--${size}`,
        { 'designbase-time-picker--disabled': disabled, 'designbase-time-picker--readonly': readonly, 'designbase-time-picker--open': isOpen },
        className
    );

    return (
        <div ref={pickerRef} className={classes}>
            <div className="designbase-time-picker__trigger">
                <button type="button" className="designbase-time-picker__icon-display" onClick={togglePicker} disabled={disabled} aria-label="시간 선택 열기">
                    <ClockIcon size={16} />
                </button>

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={handleInputBlur}
                    onClick={(e) => e.stopPropagation()}
                    disabled={disabled}
                    readOnly={readonly}
                    className="designbase-time-picker__input"
                    placeholder={is12h ? (showSeconds ? '12:00:00 PM' : '12:00 PM') : (showSeconds ? '12:00:00' : '12:00')}
                    aria-label="시간 입력"
                />

                <button type="button" className="designbase-time-picker__toggle" onClick={togglePicker} disabled={disabled} aria-label="시간 선택 열기">
                    <ChevronDownIcon size={16} />
                </button>
            </div>

            {type === 'dropdown' && isOpen && (
                <div className="designbase-time-picker__dropdown" role="dialog" aria-modal="false">
                    {renderTimeSelector(false)}
                </div>
            )}

            {type === 'modal' && (
                <Modal
                    isOpen={isOpen}
                    onClose={handleModalCancel}
                    title="시간 선택"
                    size="s"
                >
                    {renderTimeSelector(true)}
                    <ModalFooter>
                        <div className="designbase-time-picker__modal-footer">
                            <Button
                                variant="secondary"
                                size="m"
                                onPress={handleModalCancel}
                            >
                                취소
                            </Button>
                            <Button
                                variant="primary"
                                size="m"
                                onPress={handleModalApply}
                            >
                                적용
                            </Button>
                        </div>
                    </ModalFooter>
                </Modal>
            )}
        </div>
    );
};

TimePicker.displayName = 'TimePicker';
export default TimePicker;
