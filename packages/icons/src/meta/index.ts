import categoriesJson from "../../meta/categories.json";
import iconMetaJson from "../../meta/icon-meta.json";
import type {
    IconCategory,
    IconManifest,
    IconManifestItem,
    IconMeta,
    IconVariant,
} from "./types";

export const iconCategories = categoriesJson as IconCategory[];

export const iconMetaList = iconMetaJson.icons as IconMeta[];

export type {
    IconCategory,
    IconManifest,
    IconManifestItem,
    IconMeta,
    IconVariant,
} from "./types";


