import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, CopyIcon, DoneIcon, EyedropperIcon } from '@designbasekorea/icons';
import Modal, { ModalBody, ModalFooter } from '../Modal/Modal';
import Select from '../Select/Select';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ColorPicker.scss';

export type ColorPickerSize = 's' | 'm' | 'l';
export type ColorPickerType = 'dropdown' | 'modal';
export type ColorFormat = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
export type ColorPickerPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface ColorPickerProps {
    size?: ColorPickerSize;
    type?: ColorPickerType;
    position?: ColorPickerPosition;
    value?: string;                // 제어형
    defaultValue?: string;         // 비제어형 초기값
    showInput?: boolean;
    showAlpha?: boolean;
    showFormatSelector?: boolean;
    showCopyButton?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    /** 콜백 반환 포맷: 기본은 HEX, UI는 현재 선택 포맷 */
    onChangeFormat?: 'hex' | 'ui';
    /** 초기 마운트 시 onChange 발사 여부(기본 false) */
    fireOnInit?: boolean;
    /** 과발사 방지 디바운스(ms). 0은 비활성 */
    changeDebounceMs?: number;
    onChange?: (color: string) => void;
    onApply?: (color: string) => void; // type="modal" 전용
    onCancel?: () => void;             // type="modal" 전용
    className?: string;
}

/* ----------------------- 유틸 ----------------------- */
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const normalizeHex = (s?: string) => (s || '').trim().toUpperCase();

/** #RRGGBB → {r,g,b} */
const hexToRgb = (hex: string) => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
    if (!m) return null;
    return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
};

/** RGB → HEX */
const toHex = (r: number, g: number, b: number) => {
    const h = (x: number) => clamp(Math.round(x), 0, 255).toString(16).padStart(2, '0');
    return `#${h(r)}${h(g)}${h(b)}`.toUpperCase();
};

const rgbToHsv = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    if (d !== 0) {
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
            case g: h = ((b - r) / d + 2); break;
            case b: h = ((r - g) / d + 4); break;
        }
        h *= 60;
    }
    const s = max === 0 ? 0 : d / max;
    const v = max;
    return { h, s: s * 100, v: v * 100 };
};

const hsvToRgb = (h: number, s: number, v: number) => {
    s /= 100; v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let rp = 0, gp = 0, bp = 0;
    if (h >= 0 && h < 60) { rp = c; gp = x; bp = 0; }
    else if (h < 120) { rp = x; gp = c; bp = 0; }
    else if (h < 180) { rp = 0; gp = c; bp = x; }
    else if (h < 240) { rp = 0; gp = x; bp = c; }
    else if (h < 300) { rp = x; gp = 0; bp = c; }
    else { rp = c; gp = 0; bp = x; }
    return {
        r: Math.round((rp + m) * 255),
        g: Math.round((gp + m) * 255),
        b: Math.round((bp + m) * 255),
    };
};

const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
            case g: h = ((b - r) / d + 2); break;
            case b: h = ((r - g) / d + 4); break;
        }
        h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
};

/* ----------------------- 컴포넌트 ----------------------- */
const ColorPicker: React.FC<ColorPickerProps> = ({
    size = 'm',
    type = 'dropdown',
    position = 'bottom-left',
    value,
    defaultValue = '#006FFF',
    showInput = true,
    showAlpha = true,
    showFormatSelector = true,
    showCopyButton = true,
    disabled = false,
    readonly = false,
    onChangeFormat = 'hex',
    fireOnInit = false,
    changeDebounceMs = 0,
    onChange,
    onApply,
    onCancel,
    className,
}) => {
    /** 초기 HSV는 props에서 즉시 도출(StrictMode 안전) */
    const initialHex = normalizeHex(value || defaultValue) || '#006FFF';
    const initialRgb = hexToRgb(initialHex) || { r: 0, g: 111, b: 255 };
    const initialHsv = rgbToHsv(initialRgb.r, initialRgb.g, initialRgb.b);

    const [h, setH] = useState<number>(() => initialHsv.h);
    const [s, setS] = useState<number>(() => initialHsv.s);
    const [v, setV] = useState<number>(() => initialHsv.v);
    const [a, setA] = useState<number>(100);

    const [isOpen, setIsOpen] = useState(false);
    const [format, setFormat] = useState<ColorFormat>('hex');
    const [isCopied, setIsCopied] = useState(false);

    const [colorInput, setColorInput] = useState<string>(() => initialHex);
    const [alphaInput, setAlphaInput] = useState<string>('100');
    const [tempColor, setTempColor] = useState<string>('');

    const pickerRef = useRef<HTMLDivElement>(null);
    const areaRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    /** onChange 보호 상태 */
    const lastEmittedRef = useRef<string>(normalizeHex(initialHex)); // ✅ 초기값 미리 기록
    const didMountRef = useRef<boolean>(false);                      // ✅ 첫 렌더 감지
    const emitErrorCountRef = useRef<number>(0);
    const emitBlockedUntilRef = useRef<number>(0);

    /** 제어형(value) 변화 → HSV 반영 */
    useEffect(() => {
        if (value == null) return;
        const norm = normalizeHex(value);
        const rgb = hexToRgb(norm);
        if (!rgb) return;
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        setH(hsv.h); setS(hsv.s); setV(hsv.v);
        setColorInput(norm);
    }, [value]);

    /** 파생값 */
    const rgb = useMemo(() => hsvToRgb(h, s, v), [h, s, v]);
    const hex = useMemo(() => toHex(rgb.r, rgb.g, rgb.b), [rgb]);
    const hsl = useMemo(() => rgbToHsl(rgb.r, rgb.g, rgb.b), [rgb]);

    /** UI 표시 문자열 */
    const uiFormatted = useMemo(() => {
        const alpha = a / 100;
        switch (format) {
            case 'hex': return hex;
            case 'rgb': return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            case 'rgba': return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`;
            case 'hsl': return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
            case 'hsla': return `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${alpha.toFixed(2)})`;
            default: return hex;
        }
    }, [format, hex, rgb, hsl, a]);

    /** 콜백으로 내보낼 문자열 */
    const outward = useMemo(() => {
        if (onChangeFormat === 'hex') return hex;
        return uiFormatted;
    }, [hex, uiFormatted, onChangeFormat]);

    /** 최초 렌더 스킵 + 동일값/레이트리밋 검사 후 onChange */
    useEffect(() => {
        if (!onChange) return;

        // 첫 렌더는 기본 차단 (옵션으로 허용)
        if (!didMountRef.current) {
            didMountRef.current = true;
            if (!fireOnInit) return; // 기본: 초기 발사 금지
        }

        const now = Date.now();
        if (emitBlockedUntilRef.current > now) return;

        const currentHexNorm = normalizeHex(outward);
        const last = lastEmittedRef.current;

        // 제어형: 부모 value와 동일하면 발사 금지
        if (value && normalizeHex(value) === currentHexNorm) return;
        // 직전 발사값과 동일하면 금지
        if (last === currentHexNorm) return;

        const fire = () => {
            try {
                lastEmittedRef.current = currentHexNorm;
                onChange(onChangeFormat === 'hex' ? currentHexNorm : outward);
                emitErrorCountRef.current = 0;
            } catch (e) {
                emitErrorCountRef.current += 1;
                if (emitErrorCountRef.current >= 20) {
                    emitBlockedUntilRef.current = Date.now() + 3000;
                    // eslint-disable-next-line no-console
                    console.warn('[ColorPicker] onChange errors too frequent; temporarily muted.');
                }
            }
        };

        if (changeDebounceMs > 0) {
            const t = setTimeout(fire, changeDebounceMs);
            return () => clearTimeout(t);
        }
        fire();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outward]); // 의도적으로 onChange/value 제외

    /** colorInput 동기화(표시 전용) */
    useEffect(() => {
        const next = format === 'hex' ? normalizeHex(uiFormatted) : uiFormatted;
        if (colorInput !== next) setColorInput(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uiFormatted, format]);

    /** 드롭다운 외부 클릭 닫기 */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setIsOpen(false);
        };
        if (isOpen && type === 'dropdown') document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isOpen, type]);

    /** S/V 영역 업데이트 */
    const updateFromArea = (clientX: number, clientY: number) => {
        const el = areaRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = clamp(clientX - rect.left, 0, rect.width);
        const y = clamp(clientY - rect.top, 0, rect.height);
        const newS = (x / rect.width) * 100;
        const newV = 100 - (y / rect.height) * 100;
        setS(newS); setV(newV);
    };

    const onAreaMouseDown = (e: React.MouseEvent<HTMLDivElement>) => { dragging.current = true; updateFromArea(e.clientX, e.clientY); };
    const onAreaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => { if (dragging.current) updateFromArea(e.clientX, e.clientY); };
    const onAreaMouseUp = () => { dragging.current = false; };
    const onAreaLeave = () => { dragging.current = false; };
    const onAreaTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { dragging.current = true; const t = e.touches[0]; updateFromArea(t.clientX, t.clientY); };
    const onAreaTouchMove = (e: React.TouchEvent<HTMLDivElement>) => { if (!dragging.current) return; const t = e.touches[0]; updateFromArea(t.clientX, t.clientY); };
    const onAreaTouchEnd = () => { dragging.current = false; };

    /** 슬라이더 */
    const onHueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
        setH(parseFloat(e.target.value)), []);
    const onAlphaChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newAlpha = parseInt(e.target.value, 10);
        setA(newAlpha);
        setAlphaInput(String(newAlpha));
    }, []);

    /** 컬러 인풋 확정 */
    const commitColorInput = useCallback(() => {
        const str = colorInput.trim();

        if (/^#([0-9A-Fa-f]{6})$/.test(str)) {
            const rgb = hexToRgb(str)!;
            const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
            setH(hsv.h); setS(hsv.s); setV(hsv.v);
            setColorInput(normalizeHex(str));
            return;
        }

        let m = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(str);
        if (m) {
            const r = clamp(parseInt(m[1], 10), 0, 255);
            const g = clamp(parseInt(m[2], 10), 0, 255);
            const b = clamp(parseInt(m[3], 10), 0, 255);
            const hsv = rgbToHsv(r, g, b);
            setH(hsv.h); setS(hsv.s); setV(hsv.v);
            setColorInput(`rgb(${r}, ${g}, ${b})`);
            return;
        }

        m = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/i.exec(str);
        if (m) {
            const r = clamp(parseInt(m[1], 10), 0, 255);
            const g = clamp(parseInt(m[2], 10), 0, 255);
            const b = clamp(parseInt(m[3], 10), 0, 255);
            const alpha = parseFloat(m[4]);
            const hsv = rgbToHsv(r, g, b);
            setH(hsv.h); setS(hsv.s); setV(hsv.v);
            setA(Math.round(alpha * 100));
            setAlphaInput(String(Math.round(alpha * 100)));
            setColorInput(`rgba(${r}, ${g}, ${b}, ${alpha})`);
            return;
        }

        // 인식 실패 → 표시값으로 원복
        setColorInput(format === 'hex' ? normalizeHex(uiFormatted) : uiFormatted);
    }, [colorInput, uiFormatted, format]);

    const onColorKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') commitColorInput(); };
    const onColorBlur = () => {
        const next = format === 'hex' ? normalizeHex(uiFormatted) : uiFormatted;
        if (colorInput !== next) setColorInput(next);
    };

    /** 알파 인풋 확정 */
    const commitAlphaInput = useCallback(() => {
        const n = Number(alphaInput.trim());
        if (!Number.isNaN(n) && n >= 0 && n <= 100) {
            const rounded = Math.round(n);
            if (a !== rounded) setA(rounded);
            if (alphaInput !== String(rounded)) setAlphaInput(String(rounded));
            return;
        }
        setAlphaInput(String(a));
    }, [alphaInput, a]);

    const onAlphaInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') commitAlphaInput(); };
    const onAlphaInputBlur = () => { if (alphaInput !== String(a)) setAlphaInput(String(a)); };

    /** 복사 */
    const onCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(uiFormatted);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1600);
        } catch (e) { console.error(e); }
    }, [uiFormatted]);

    /** EyeDropper */
    const onEyedrop = useCallback(async () => {
        try {
            if ('EyeDropper' in window) {
                const eye = new (window as any).EyeDropper();
                const { sRGBHex } = await eye.open();
                const rgb = hexToRgb(sRGBHex)!;
                const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
                setH(hsv.h); setS(hsv.s); setV(hsv.v);
            }
        } catch (e) { console.error(e); }
    }, []);

    /** 모달 */
    const handleModalOpen = useCallback(() => {
        if (type === 'modal') setTempColor(hex);
        setIsOpen(true);
    }, [type, hex]);

    const handleModalApply = useCallback(() => {
        if (type === 'modal') {
            const out = onChangeFormat === 'hex' ? hex : uiFormatted;
            onApply?.(out);
            setIsOpen(false);
        }
    }, [type, hex, uiFormatted, onApply, onChangeFormat]);

    const handleModalCancel = useCallback(() => {
        if (type === 'modal') {
            const rgb = hexToRgb(tempColor);
            if (rgb) {
                const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
                setH(hsv.h); setS(hsv.s); setV(hsv.v);
            }
            onCancel?.();
            setIsOpen(false);
        }
    }, [type, tempColor, onCancel]);

    /** 스타일 */
    const hueTrackStyle = useMemo(() => ({
        background: `linear-gradient(to right,
      hsl(0,100%,50%),
      hsl(60,100%,50%),
      hsl(120,100%,50%),
      hsl(180,100%,50%),
      hsl(240,100%,50%),
      hsl(300,100%,50%),
      hsl(360,100%,50%))`,
    }), []);

    const areaBackground = useMemo(() => ({
        backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)),
      linear-gradient(to right, #ffffff, hsl(${h}, 100%, 50%))
    `,
    }), [h]);

    const alphaTrackStyle = useMemo(() => ({
        backgroundImage: `
      linear-gradient(45deg, var(--db-border-base) 25%, transparent 25%),
      linear-gradient(-45deg, var(--db-border-base) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--db-border-base) 75%),
      linear-gradient(-45deg, transparent 75%, var(--db-border-base) 75%),
      linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1))
    `,
        backgroundSize: '8px 8px,8px 8px,8px 8px,8px 8px,100% 100%',
        backgroundPosition: '0 0,0 4px,4px -4px,-4px 0,0 0',
        backgroundColor: 'var(--db-surface-base)',
    }), [rgb]);

    const classes = clsx(
        'designbase-color-picker',
        `designbase-color-picker--${size}`,
        `designbase-color-picker--${position}`,
        {
            'designbase-color-picker--disabled': disabled,
            'designbase-color-picker--readonly': readonly,
            'designbase-color-picker--open': isOpen,
            'designbase-color-picker--no-input': !showInput,
        },
        className
    );

    const Trigger = (
        <div
            className="designbase-color-picker__trigger"
            onClick={() => !disabled && !readonly && (type === 'modal' ? handleModalOpen() : setIsOpen(v => !v))}
        >
            <div className="designbase-color-picker__color-display">
                <div
                    className="designbase-color-picker__color-box"
                    style={{
                        backgroundColor: showAlpha ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a / 100})` : hex
                    }}
                />
            </div>

            {showInput && (
                <input
                    type="text"
                    value={colorInput}
                    onChange={(e) => setColorInput(e.target.value)}
                    onKeyDown={onColorKeyDown}
                    onBlur={onColorBlur}
                    onClick={(e) => e.stopPropagation()}
                    disabled={disabled}
                    readOnly={readonly}
                    className="designbase-color-picker__input"
                    placeholder="#000000"
                />
            )}

            {showInput && showCopyButton && (
                <button
                    type="button"
                    className="designbase-color-picker__copy-button-inline"
                    onClick={(e) => { e.stopPropagation(); onCopy(); }}
                    disabled={disabled}
                    aria-label="Copy color value"
                >
                    {isCopied ? <DoneIcon size={14} /> : <CopyIcon size={14} />}
                </button>
            )}

            <button
                type="button"
                className="designbase-color-picker__toggle"
                disabled={disabled}
                aria-label="Toggle color picker"
            >
                <ChevronDownIcon size={16} />
            </button>
        </div>
    );

    const Selector = (
        <div className="designbase-color-picker__selector">
            {/* 메인 색상 영역 */}
            <div className="designbase-color-picker__color-area">
                <div
                    ref={areaRef}
                    className="designbase-color-picker__color-field"
                    style={areaBackground}
                    onMouseDown={onAreaMouseDown}
                    onMouseMove={onAreaMouseMove}
                    onMouseUp={onAreaMouseUp}
                    onMouseLeave={onAreaLeave}
                    onTouchStart={onAreaTouchStart}
                    onTouchMove={onAreaTouchMove}
                    onTouchEnd={onAreaTouchEnd}
                >
                    <div
                        className="designbase-color-picker__color-pointer"
                        style={{ left: `${s}%`, top: `${100 - v}%`, backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                    />
                </div>
            </div>

            {/* 컨트롤 */}
            <div className="designbase-color-picker__controls">
                <Button variant="tertiary" size="m" iconOnly onClick={onEyedrop} aria-label="Eyedropper tool">
                    <EyedropperIcon />
                </Button>

                <div className="designbase-color-picker__slider-container">
                    <div className="designbase-color-picker__hue-slider">
                        <input
                            type="range"
                            min={0}
                            max={360}
                            value={h}
                            onChange={onHueChange}
                            className="designbase-color-picker__slider designbase-color-picker__slider--hue"
                            style={hueTrackStyle}
                        />
                    </div>

                    {showAlpha && (
                        <div className="designbase-color-picker__alpha-slider">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={a}
                                onChange={onAlphaChange}
                                className="designbase-color-picker__slider designbase-color-picker__slider--alpha"
                                style={alphaTrackStyle}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* 값 영역 */}
            <div className="designbase-color-picker__value-display">
                {showFormatSelector && (
                    <Select
                        value={format}
                        onChange={(v) => setFormat(v as ColorFormat)}
                        showClearButton={false}
                        options={[
                            { label: 'HEX', value: 'hex' },
                            { label: 'RGB', value: 'rgb' },
                            { label: 'RGBA', value: 'rgba' },
                            { label: 'HSL', value: 'hsl' },
                            { label: 'HSLA', value: 'hsla' },
                        ]}
                        size="s"
                        position="top"
                    />
                )}

                <Input
                    type="text"
                    value={colorInput}
                    onChange={setColorInput}
                    onKeyDown={onColorKeyDown}
                    onBlur={onColorBlur}
                    placeholder="#000000"
                    size="s"
                    className="designbase-color-picker__value-input"
                />

                {showAlpha && (
                    <div className="designbase-color-picker__alpha-input-wrap">
                        <Input
                            type="text"
                            inputMode="numeric"
                            value={alphaInput}
                            onChange={(value) => setAlphaInput(value.replace(/[^\d]/g, '').slice(0, 3))}
                            onKeyDown={onAlphaInputKeyDown}
                            onBlur={onAlphaInputBlur}
                            placeholder="100"
                            size="s"
                            className="designbase-color-picker__alpha-input"
                            aria-label="Alpha percent"
                        />
                        <span className="designbase-color-picker__alpha-suffix">%</span>
                    </div>
                )}

                {showCopyButton && (
                    <Button variant="tertiary" size="m" iconOnly onClick={onCopy} aria-label="Copy color value">
                        {isCopied ? <DoneIcon /> : <CopyIcon />}
                    </Button>
                )}
            </div>
        </div>
    );

    return (
        <div ref={pickerRef} className={classes}>
            {Trigger}

            {type === 'dropdown' && isOpen && (
                <div className="designbase-color-picker__dropdown" onClick={(e) => e.stopPropagation()}>
                    {Selector}
                </div>
            )}

            {type === 'modal' && (
                <Modal isOpen={isOpen} onClose={handleModalCancel} title="색상 선택" size="s">
                    <ModalBody>{Selector}</ModalBody>
                    <ModalFooter>
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                            <Button variant="tertiary" size="m" onClick={handleModalCancel}>취소</Button>
                            <Button variant="primary" size="m" onClick={handleModalApply}>적용</Button>
                        </div>
                    </ModalFooter>
                </Modal>
            )}
        </div>
    );
};

ColorPicker.displayName = 'ColorPicker';
export default ColorPicker;