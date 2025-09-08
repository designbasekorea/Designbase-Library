"use strict";

const path = require("path");
const fs = require("fs-extra");
const { spawnSync } = require("child_process");

(async () => {
    try {
        const webfontPkgDir = path.resolve(__dirname, "..");
        const repoRoot = path.resolve(webfontPkgDir, "..", "..");
        const iconsPkgDir = path.resolve(webfontPkgDir, "..", "icons");

        console.log("▶︎ @designbase/icons 웹폰트 빌드 실행...");
        const r = spawnSync("npm", ["run", "build:webfont", "-w", "@designbasekorea/icons"], {
            stdio: "inherit",
            cwd: repoRoot,
        });
        if (r.status !== 0) {
            throw new Error("icons 패키지의 웹폰트 빌드 실패");
        }

        const src = path.join(iconsPkgDir, "dist", "webfont");
        const dest = path.join(webfontPkgDir, "dist", "webfont");

        if (!(await fs.pathExists(src))) {
            throw new Error(`웹폰트 산출물이 없습니다: ${src}`);
        }

        await fs.remove(dest);
        await fs.copy(src, dest);
        console.log("✅ dist/webfont 복사 완료 (icons → icons-webfont)");
    } catch (err) {
        console.error("❌ 웹폰트 패키지 준비 실패:", err);
        process.exit(1);
    }
})();


