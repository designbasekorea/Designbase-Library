/**
 * i18n 관련 타입과 헬퍼 함수
 * 라이브러리는 react-i18next에 직접 의존하지 않고, 소비자가 t 함수를 주입하는 구조
 */

export type I18nText =
    | string
    | { key: string; values?: Record<string, any> }; // t(key, values)

export type TFunctionLite = (key: string, values?: Record<string, any>) => string;

/**
 * 텍스트를 해석하는 헬퍼 함수
 * @param t - 번역 함수 (선택사항)
 * @param input - 문자열 또는 {key, values} 객체
 * @param fallback - t가 없거나 input이 null일 때 사용할 기본값
 * @returns 해석된 문자열
 */
export function resolveText(
    t: TFunctionLite | undefined,
    input: I18nText | undefined,
    fallback?: string
): string | undefined {
    if (input == null) return fallback;
    if (typeof input === 'string') {
        // 그냥 문자열이면 그대로 사용 (이미 번역된 텍스트 혹은 raw)
        return input;
    }
    // {key, values} 형태면 t가 있으면 번역, 없으면 key 자체를 표시
    return t ? t(input.key, input.values) : input.key;
}
