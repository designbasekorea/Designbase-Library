/**
 * 검증 유틸리티
 * 
 * 목적: 데이터 검증과 유효성 검사 함수 제공
 * 기능: 이메일, URL, 전화번호, 신용카드, 비밀번호 등 검증
 * 사용법: import { isEmail, isURL } from '@designbase/utils'
 */

// ============================================================================
// 기본 타입 검증
// ============================================================================

/**
 * 값이 정의되어 있는지 확인
 */
export function isDefined<T>(value: T | undefined | null): value is T {
    return value !== undefined && value !== null;
}

/**
 * 값이 빈 값인지 확인
 */
export function isEmpty(value: any): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
}

/**
 * 문자열인지 확인
 */
export function isString(value: any): value is string {
    return typeof value === 'string';
}

/**
 * 숫자인지 확인
 */
export function isNumber(value: any): value is number {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * 불린인지 확인
 */
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}

/**
 * 배열인지 확인
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

/**
 * 객체인지 확인
 */
export function isObject(value: any): value is Record<string, any> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 함수인지 확인
 */
export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

// ============================================================================
// 숫자 검증
// ============================================================================

/**
 * 정수인지 확인
 */
export function isInteger(value: any): value is number {
    return Number.isInteger(value);
}

/**
 * 양수인지 확인
 */
export function isPositive(value: number): boolean {
    return value > 0;
}

/**
 * 음수인지 확인
 */
export function isNegative(value: number): boolean {
    return value < 0;
}

/**
 * 범위 내에 있는지 확인
 */
export function isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
}

/**
 * 짝수인지 확인
 */
export function isEven(value: number): boolean {
    return value % 2 === 0;
}

/**
 * 홀수인지 확인
 */
export function isOdd(value: number): boolean {
    return value % 2 !== 0;
}

// ============================================================================
// 문자열 패턴 검증
// ============================================================================

/**
 * 이메일 주소 검증
 */
export function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * URL 검증
 */
export function isURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * 전화번호 검증 (한국)
 */
export function isPhoneNumber(phone: string): boolean {
    const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * 신용카드 번호 검증 (Luhn 알고리즘)
 */
export function isCreditCard(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\D/g, '');

    if (cleaned.length < 13 || cleaned.length > 19) {
        return false;
    }

    let sum = 0;
    let isEven = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i]);

        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isEven = !isEven;
    }

    return sum % 10 === 0;
}

/**
 * IPv4 주소 검증
 */
export function isIPv4(ip: string): boolean {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(ip);
}

/**
 * IPv6 주소 검증
 */
export function isIPv6(ip: string): boolean {
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip);
}

/**
 * 16진수 색상 코드 검증
 */
export function isHexColor(color: string): boolean {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(color);
}

/**
 * UUID 검증
 */
export function isUUID(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

// ============================================================================
// 날짜 검증
// ============================================================================

/**
 * 유효한 날짜인지 확인
 */
export function isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
}

/**
 * 미래 날짜인지 확인
 */
export function isFutureDate(date: Date): boolean {
    return date > new Date();
}

/**
 * 과거 날짜인지 확인
 */
export function isPastDate(date: Date): boolean {
    return date < new Date();
}

/**
 * 오늘 날짜인지 확인
 */
export function isToday(date: Date): boolean {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

/**
 * 주말인지 확인
 */
export function isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6; // 일요일(0) 또는 토요일(6)
}

/**
 * 윤년인지 확인
 */
export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// ============================================================================
// 비밀번호 검증
// ============================================================================

export interface PasswordStrength {
    score: number; // 0-4
    feedback: string[];
    isValid: boolean;
}

/**
 * 비밀번호 강도 검증
 */
export function validatePasswordStrength(
    password: string,
    minLength = 8
): PasswordStrength {
    const feedback: string[] = [];
    let score = 0;

    // 길이 검사
    if (password.length < minLength) {
        feedback.push(`최소 ${minLength}자 이상이어야 합니다.`);
    } else {
        score++;
    }

    // 소문자 검사
    if (!/[a-z]/.test(password)) {
        feedback.push('소문자를 포함해야 합니다.');
    } else {
        score++;
    }

    // 대문자 검사
    if (!/[A-Z]/.test(password)) {
        feedback.push('대문자를 포함해야 합니다.');
    } else {
        score++;
    }

    // 숫자 검사
    if (!/\d/.test(password)) {
        feedback.push('숫자를 포함해야 합니다.');
    } else {
        score++;
    }

    // 특수문자 검사
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        feedback.push('특수문자를 포함해야 합니다.');
    } else {
        score++;
    }

    // 연속된 문자 검사
    if (/(.)\1{2,}/.test(password)) {
        feedback.push('동일한 문자를 3개 이상 연속으로 사용할 수 없습니다.');
        score = Math.max(0, score - 1);
    }

    // 순차적 문자 검사
    if (hasSequentialChars(password)) {
        feedback.push('순차적인 문자를 사용하지 마세요.');
        score = Math.max(0, score - 1);
    }

    return {
        score: Math.min(4, score),
        feedback,
        isValid: score >= 4 && feedback.length === 0,
    };
}

/**
 * 순차적 문자 확인
 */
function hasSequentialChars(password: string): boolean {
    const sequences = [
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
    ];

    for (const seq of sequences) {
        for (let i = 0; i <= seq.length - 3; i++) {
            const subseq = seq.substr(i, 3);
            if (password.toLowerCase().includes(subseq)) {
                return true;
            }
        }
    }

    return false;
}

// ============================================================================
// 파일 검증
// ============================================================================

/**
 * 파일 확장자 검증
 */
export function isValidFileExtension(
    filename: string,
    allowedExtensions: string[]
): boolean {
    const extension = filename.split('.').pop()?.toLowerCase();
    return extension ? allowedExtensions.includes(extension) : false;
}

/**
 * 파일 크기 검증
 */
export function isValidFileSize(fileSize: number, maxSizeInMB: number): boolean {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return fileSize <= maxSizeInBytes;
}

/**
 * 이미지 파일인지 확인
 */
export function isImageFile(filename: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'];
    return isValidFileExtension(filename, imageExtensions);
}

/**
 * 비디오 파일인지 확인
 */
export function isVideoFile(filename: string): boolean {
    const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'];
    return isValidFileExtension(filename, videoExtensions);
}

/**
 * 오디오 파일인지 확인
 */
export function isAudioFile(filename: string): boolean {
    const audioExtensions = ['mp3', 'wav', 'flac', 'aac', 'ogg', 'wma'];
    return isValidFileExtension(filename, audioExtensions);
}

// ============================================================================
// 폼 검증 헬퍼
// ============================================================================

export interface ValidationRule<T = any> {
    validate: (value: T) => boolean;
    message: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

/**
 * 값에 대해 여러 규칙을 검증
 */
export function validateValue<T>(
    value: T,
    rules: ValidationRule<T>[]
): ValidationResult {
    const errors: string[] = [];

    for (const rule of rules) {
        if (!rule.validate(value)) {
            errors.push(rule.message);
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

/**
 * 일반적인 검증 규칙들
 */
export const commonRules = {
    required: <T>(message = '필수 입력 항목입니다.'): ValidationRule<T> => ({
        validate: (value) => !isEmpty(value),
        message,
    }),

    minLength: (min: number, message?: string): ValidationRule<string> => ({
        validate: (value) => value.length >= min,
        message: message || `최소 ${min}자 이상 입력해주세요.`,
    }),

    maxLength: (max: number, message?: string): ValidationRule<string> => ({
        validate: (value) => value.length <= max,
        message: message || `최대 ${max}자까지 입력 가능합니다.`,
    }),

    email: (message = '올바른 이메일 주소를 입력해주세요.'): ValidationRule<string> => ({
        validate: isEmail,
        message,
    }),

    url: (message = '올바른 URL을 입력해주세요.'): ValidationRule<string> => ({
        validate: isURL,
        message,
    }),

    phoneNumber: (message = '올바른 전화번호를 입력해주세요.'): ValidationRule<string> => ({
        validate: isPhoneNumber,
        message,
    }),

    minValue: (min: number, message?: string): ValidationRule<number> => ({
        validate: (value) => value >= min,
        message: message || `${min} 이상의 값을 입력해주세요.`,
    }),

    maxValue: (max: number, message?: string): ValidationRule<number> => ({
        validate: (value) => value <= max,
        message: message || `${max} 이하의 값을 입력해주세요.`,
    }),
};
