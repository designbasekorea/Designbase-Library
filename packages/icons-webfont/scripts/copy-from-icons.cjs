"use strict";

const path = require("path");
const fs = require("fs-extra");

(async () => {
    try {
        const webfontPkgDir = path.resolve(__dirname, "..");
        const iconsPkgDir = path.resolve(webfontPkgDir, "..", "icons");

        const src = path.join(iconsPkgDir, "dist", "webfont");
        const dest = path.join(webfontPkgDir, "dist", "webfont");

        if (!(await fs.pathExists(src))) {
            throw new Error(`원본이 없습니다. 먼저 @designbase/icons에서 웹폰트를 빌드하세요: ${src}`);
        }

        await fs.remove(dest);
        await fs.copy(src, dest);

        console.log("✅ @designbase/icons → @designbase/icons-webfont : dist/webfont 복사 완료");
    } catch (err) {
        console.error("❌ 복사 실패:", err);
        process.exit(1);
    }
})();


