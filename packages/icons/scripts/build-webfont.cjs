"use strict";

const path = require("path");
const fs = require("fs");
const { generateFonts } = require("fantasticon");

(async function main() {
    try {
        const pkgDir = path.resolve(__dirname, "..");
        const configPath = path.join(pkgDir, ".fantasticonrc.cjs");
        const config = require(configPath);

        // 출력 폴더 보장
        fs.mkdirSync(config.outputDir, { recursive: true });

        // 1) 폰트/에셋 생성
        await generateFonts(config);

        // 2) 생성된 아이콘 매핑 읽기
        const jsonPath =
            (config.pathOptions && config.pathOptions.json) ||
            path.join(config.outputDir, "icons.json");
        if (!fs.existsSync(jsonPath)) {
            console.error("icons.json 이 생성되지 않았습니다:", jsonPath);
            process.exit(1);
        }
        const generatedMap = JSON.parse(fs.readFileSync(jsonPath, "utf8") || "{}");

        // 3) 현재 svg 목록 기준 ID 계산
        const svgDir = config.inputDir;
        const files = fs
            .readdirSync(svgDir, { withFileTypes: true })
            .filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".svg"))
            .map((d) => d.name);

        const getIconId = config.getIconId
            ? (fileName) =>
                config.getIconId({
                    basename: path.basename(fileName, ".svg"),
                })
            : (fileName) => path.basename(fileName, ".svg");

        const currentIds = new Set(files.map((f) => getIconId(f)));

        // 4) 기존 codepoints.json 로드
        const codepointsPath = path.join(pkgDir, "codepoints.json");
        let prev = {};
        try {
            prev = JSON.parse(fs.readFileSync(codepointsPath, "utf8") || "{}");
        } catch {
            prev = {};
        }

        // 5) 코드포인트 유지/동기화
        // - 남아있는 아이콘: 이전 코드포인트 유지
        // - 새 아이콘: 이번 생성된 icons.json 값 사용
        // - 삭제된 아이콘: codepoints.json에서 제거
        const next = {};
        for (const id of currentIds) {
            if (prev[id]) next[id] = prev[id];
            else if (generatedMap[id]) next[id] = generatedMap[id];
        }

        const sortedKeys = Object.keys(next).sort();
        const sorted = {};
        for (const k of sortedKeys) sorted[k] = next[k];
        fs.writeFileSync(
            codepointsPath,
            JSON.stringify(sorted, null, 2) + "\n",
            "utf8"
        );

        // 6) CSS에 font-display: swap 주입
        const cssPath =
            (config.pathOptions && config.pathOptions.css) ||
            path.join(config.outputDir, "icons.css");
        if (fs.existsSync(cssPath)) {
            let css = fs.readFileSync(cssPath, "utf8");
            css = css.replace(
                /(@font-face\s*\{)([^}]*)(\})/m,
                (m, a, b, c) => {
                    if (/font-display\s*:/.test(b)) return m;
                    return `${a}${b}\n  font-display: swap;${c}`;
                }
            );
            fs.writeFileSync(cssPath, css, "utf8");
        }

        console.log(
            `✅ 웹폰트 생성 완료 (${sortedKeys.length}개)\n` +
            `📄 CSS: ${cssPath}`
        );
    } catch (err) {
        console.error("❌ 웹폰트 빌드 실패:", err);
        process.exit(1);
    }
})();
