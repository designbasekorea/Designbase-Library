const path = require("path");
const fs = require("fs");

const pkgDir = __dirname;
const inputDir = path.join(pkgDir, "svg");
const outputDir = path.join(pkgDir, "dist", "webfont");

// codepoints.json 로딩 (없으면 {})
const codepointsPath = path.join(pkgDir, "codepoints.json");
let codepoints = {};
try {
    if (fs.existsSync(codepointsPath)) {
        codepoints = JSON.parse(fs.readFileSync(codepointsPath, "utf8") || "{}");
    }
} catch {
    codepoints = {};
}

module.exports = {
    // 경로
    inputDir,
    outputDir,

    // 결과물 종류
    name: "icons",
    fontTypes: ["woff2", "woff"],
    assetTypes: ["css", "html", "json"],

    // 노멀라이즈/높이
    fontHeight: 1000,
    descent: 150,
    normalize: true,

    // svgfonts 옵션 (ascent는 여기에서)
    formatOptions: {
        svg: { ascent: 850, descent: 150 },
        json: { indent: 2 }
    },

    // CSS 생성 시 클래스 접두어/태그
    prefix: "icon",
    tag: "i",

    // 파일명 → 아이콘 id
    getIconId: ({ basename }) =>
        basename
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "-")
            .replace(/\-+/g, "-")
            .replace(/^\-+|\-+$/g, ""),

    // 코드포인트 고정
    codepoints,

    // 산출물 파일 경로
    pathOptions: {
        json: path.join(outputDir, "icons.json"),
        css: path.join(outputDir, "icons.css"),
        html: path.join(outputDir, "icons.html")
    }
};
