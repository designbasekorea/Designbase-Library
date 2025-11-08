export type IconCategoryId =
    | "0-etc"
    | "1-navigation"
    | "2-action"
    | "3-communications"
    | "4-settings"
    | "5-media-files"
    | "6-status-alerts"
    | "7-arrows"
    | "8-forms"
    | "9-layout"
    | "10-data"
    | "11-devices"
    | "12-commerce"
    | "13-profiles"
    | "14-weather"
    | "15-gamification"
    | "16-decoration"
    | "17-food"
    | "18-building"
    | "19-marketing"
    | "20-sports"
    | "22-travel"
    | "23-furniture"
    | "24-nature"
    | "25-education"
    | "26-health";

export interface IconCategory {
    id: IconCategoryId;
    name: string;
    description?: string;
    aliases?: string[];
    order: number;
}

export type IconStyle = "line" | "filled" | "duotone";

export interface IconVariant {
    /**
     * 고유 variant ID (보통 svg 파일명과 동일)
     */
    id: string;
    /**
     * variant가 사용하는 표현 스타일 (outlined, filled 등)
     */
    style: IconStyle;
    /**
     * 원본 svg 파일명 (packages/icons/svg 기준)
     */
    svg: string;
    /**
     * 웹폰트 코드포인트 (build 후 주입)
     */
    codepoint?: string;
    /**
     * React 컴포넌트 이름 (빌드 결과 기준)
     */
    componentName?: string;
    /**
     * SVG 파일 해시 등 무결성 체크용
     */
    hash?: string;
}

export interface IconMeta {
    id: string;
    name: string;
    description?: string;
    categoryId: IconCategoryId;
    tags: string[];
    keywords?: string[];
    updatedAt?: string;
    aliases?: string[];
    variants: IconVariant[];
}

export interface IconManifestVariant extends IconVariant {
    /**
     * dist/svg 경로 (패키지 내부 상대 경로)
     */
    distPath: string;
    /**
     * CDN 접근 경로 (jsDelivr, unpkg 등)
     */
    cdn: {
        jsdelivr: string;
        unpkg: string;
    };
}

export interface IconManifestItem extends IconMeta {
    categoryName: string;
    searchText: string;
    variants: IconManifestVariant[];
}

export interface IconManifest {
    version: string;
    generatedAt: string;
    schemaVersion: number;
    categories: IconCategory[];
    icons: IconManifestItem[];
}


