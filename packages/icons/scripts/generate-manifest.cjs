/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PKG_DIR = path.join(__dirname, "..");
const META_DIR = path.join(PKG_DIR, "meta");
const SVG_DIR = path.join(PKG_DIR, "svg");
const DIST_DIR = path.join(PKG_DIR, "dist");
const DIST_SVG_DIR = path.join(DIST_DIR, "svg");

function readJson(filePath, fallback = {}) {
    try {
        if (!fs.existsSync(filePath)) return fallback;
        const raw = fs.readFileSync(filePath, "utf8");
        return JSON.parse(raw);
    } catch (error) {
        throw new Error(`JSON 파싱 실패 (${filePath}): ${error.message}`);
    }
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function toPascalCase(str) {
    return str
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "");
}

function getComponentName(id) {
    let name = `${toPascalCase(id)}Icon`;
    if (/^\d/.test(name)) {
        name = `I${name}`;
    }
    return name;
}

function getRepositorySlug(pkgJson) {
    const repoUrl = pkgJson?.repository?.url || "";
    if (!repoUrl.includes("github.com")) return null;
    return repoUrl
        .replace(/^https?:\/\/github.com\//, "")
        .replace(/\.git$/, "");
}

function buildCdnPaths(pkgJson, svgFile) {
    const version = pkgJson.version;
    const repoSlug = getRepositorySlug(pkgJson);
    const npmName = pkgJson.name;

    const jsdelivrNpm = `https://cdn.jsdelivr.net/npm/${npmName}@${version}/dist/svg/${svgFile}`;
    const unpkgPath = `https://unpkg.com/${npmName}@${version}/dist/svg/${svgFile}`;
    const result = {
        jsdelivr: jsdelivrNpm,
        unpkg: unpkgPath,
    };

    if (repoSlug) {
        result.jsdelivrGh = `https://cdn.jsdelivr.net/gh/${repoSlug}@v${version}/packages/icons/dist/svg/${svgFile}`;
    }

    return result;
}

function hashFile(buffer) {
    return crypto.createHash("sha256").update(buffer).digest("hex");
}

function validateVariant(variant, iconId) {
    if (!variant.id || !variant.svg) {
        throw new Error(
            `아이콘(${iconId}) variant 정의가 잘못되었습니다. id와 svg는 필수입니다.`
        );
    }
}

function main() {
    console.log("🛠  icon manifest 생성 시작");

    const pkgJson = readJson(path.join(PKG_DIR, "package.json"));
    const categories = readJson(path.join(META_DIR, "categories.json"), []);
    const meta = readJson(path.join(META_DIR, "icon-meta.json"));
    const codepoints = readJson(path.join(PKG_DIR, "codepoints.json"), {});

    const schemaVersion = meta.schemaVersion || 1;
    const iconList = meta.icons || [];

    if (!iconList.length) {
        console.warn("⚠️  icon-meta.json 에 등록된 아이콘이 없습니다.");
    }

    ensureDir(DIST_DIR);
    ensureDir(DIST_SVG_DIR);

    const manifest = {
        version: pkgJson.version,
        generatedAt: new Date().toISOString(),
        schemaVersion,
        categories,
        icons: [],
    };

    for (const icon of iconList) {
        const category = categories.find((c) => c.id === icon.categoryId);
        if (!category) {
            throw new Error(
                `아이콘(${icon.id})의 categoryId(${icon.categoryId}) 를 categories.json 에서 찾을 수 없습니다.`
            );
        }

        const variants = [];

        for (const variant of icon.variants) {
            validateVariant(variant, icon.id);
            const svgPath = path.join(SVG_DIR, variant.svg);
            if (!fs.existsSync(svgPath)) {
                throw new Error(
                    `아이콘(${icon.id}) variant(${variant.id})의 SVG 파일을 찾을 수 없습니다: ${variant.svg}`
                );
            }

            const svgBuffer = fs.readFileSync(svgPath);
            const distFile = path.join(DIST_SVG_DIR, variant.svg);
            ensureDir(path.dirname(distFile));
            fs.copyFileSync(svgPath, distFile);

            const hash = hashFile(svgBuffer);
            const cdnPaths = buildCdnPaths(pkgJson, variant.svg);
            const componentName =
                variant.componentName || getComponentName(variant.id);

            variants.push({
                ...variant,
                componentName,
                codepoint: variant.codepoint || codepoints[variant.id] || null,
                hash,
                distPath: `./svg/${variant.svg}`,
                cdn: cdnPaths,
            });
        }

        const searchTokens = [
            icon.id,
            icon.name,
            category.name,
            ...(icon.tags || []),
            ...(icon.keywords || []),
            ...(icon.aliases || []),
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        manifest.icons.push({
            ...icon,
            categoryName: category.name,
            variants,
            searchText: searchTokens,
        });
    }

    manifest.icons.sort((a, b) => a.id.localeCompare(b.id));

    const manifestPath = path.join(DIST_DIR, "icon-manifest.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

    console.log(
        `✅ icon-manifest.json 생성 완료 (${manifest.icons.length}개 아이콘) -> ${manifestPath}`
    );
}

try {
    main();
} catch (error) {
    console.error("❌ manifest 생성 실패:", error);
    process.exit(1);
}


