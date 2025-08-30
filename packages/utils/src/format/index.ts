/**
 * 포맷 유틸리티
 * 
 * 목적: 숫자, 날짜, 문자열 등의 포맷팅 함수 제공
 * 기능: 통화, 백분율, 날짜, 파일 크기, 전화번호 등 포맷
 * 사용법: import { formatCurrency, formatDate } from '@designbase/utils'
 */

// ============================================================================
// 숫자 포맷팅
// ============================================================================

/**
 * 숫자를 통화 형식으로 포맷
 */
export function formatCurrency(
    amount: number,
    currency = 'KRW',
    locale = 'ko-KR'
): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
}

/**
 * 숫자를 백분율로 포맷
 */
export function formatPercentage(
    value: number,
    decimals = 1,
    locale = 'ko-KR'
): string {
    return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value / 100);
}

/**
 * 숫자를 천 단위 구분자로 포맷
 */
export function formatNumber(
    value: number,
    decimals = 0,
    locale = 'ko-KR'
): string {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

/**
 * 바이트를 읽기 쉬운 파일 크기로 포맷
 */
export function formatFileSize(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * 숫자를 컴팩트 형식으로 포맷 (1K, 1M 등)
 */
export function formatCompactNumber(
    value: number,
    locale = 'ko-KR'
): string {
    return new Intl.NumberFormat(locale, {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(value);
}

// ============================================================================
// 날짜 포맷팅
// ============================================================================

/**
 * 날짜를 지정된 형식으로 포맷
 */
export function formatDate(
    date: Date | string | number,
    format: 'short' | 'medium' | 'long' | 'full' = 'medium',
    locale = 'ko-KR'
): string {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
    }

    return new Intl.DateTimeFormat(locale, {
        dateStyle: format,
    }).format(dateObj);
}

/**
 * 시간을 지정된 형식으로 포맷
 */
export function formatTime(
    date: Date | string | number,
    format: 'short' | 'medium' | 'long' = 'short',
    locale = 'ko-KR'
): string {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
    }

    return new Intl.DateTimeFormat(locale, {
        timeStyle: format,
    }).format(dateObj);
}

/**
 * 날짜와 시간을 함께 포맷
 */
export function formatDateTime(
    date: Date | string | number,
    dateFormat: 'short' | 'medium' | 'long' = 'medium',
    timeFormat: 'short' | 'medium' | 'long' = 'short',
    locale = 'ko-KR'
): string {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
    }

    return new Intl.DateTimeFormat(locale, {
        dateStyle: dateFormat,
        timeStyle: timeFormat,
    }).format(dateObj);
}

/**
 * 상대적 시간 포맷 (몇 분 전, 몇 시간 전 등)
 */
export function formatRelativeTime(
    date: Date | string | number,
    locale = 'ko-KR'
): string {
    const dateObj = new Date(date);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    if (Math.abs(diffInSeconds) < 60) {
        return rtf.format(-diffInSeconds, 'second');
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (Math.abs(diffInMinutes) < 60) {
        return rtf.format(-diffInMinutes, 'minute');
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (Math.abs(diffInHours) < 24) {
        return rtf.format(-diffInHours, 'hour');
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (Math.abs(diffInDays) < 30) {
        return rtf.format(-diffInDays, 'day');
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (Math.abs(diffInMonths) < 12) {
        return rtf.format(-diffInMonths, 'month');
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return rtf.format(-diffInYears, 'year');
}

// ============================================================================
// 문자열 포맷팅
// ============================================================================

/**
 * 문자열을 카멜케이스로 변환
 */
export function toCamelCase(str: string): string {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

/**
 * 문자열을 파스칼케이스로 변환
 */
export function toPascalCase(str: string): string {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
            return word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

/**
 * 문자열을 케밥케이스로 변환
 */
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

/**
 * 문자열을 스네이크케이스로 변환
 */
export function toSnakeCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
}

/**
 * 문자열 자르기 (말줄임표 추가)
 */
export function truncateString(
    str: string,
    length: number,
    suffix = '...'
): string {
    if (str.length <= length) return str;
    return str.slice(0, length - suffix.length) + suffix;
}

/**
 * 전화번호 포맷팅
 */
export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');

    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }

    if (cleaned.length === 11) {
        return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

    return phone;
}

/**
 * 신용카드 번호 포맷팅 (마스킹)
 */
export function formatCreditCard(
    cardNumber: string,
    showLast = 4,
    maskChar = '*'
): string {
    const cleaned = cardNumber.replace(/\D/g, '');
    const masked = cleaned.slice(0, -showLast).replace(/\d/g, maskChar);
    const visible = cleaned.slice(-showLast);

    return (masked + visible).replace(/(.{4})/g, '$1 ').trim();
}

// ============================================================================
// 색상 포맷팅
// ============================================================================

/**
 * HEX 색상을 RGB로 변환
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}

/**
 * RGB를 HEX 색상으로 변환
 */
export function rgbToHex(r: number, g: number, b: number): string {
    return '#' + [r, g, b].map(x => {
        const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

/**
 * 색상의 명도 계산
 */
export function getLuminance(hex: string): number {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * 색상의 대비비 계산
 */
export function getContrastRatio(color1: string, color2: string): number {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const lightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (lightest + 0.05) / (darkest + 0.05);
}
