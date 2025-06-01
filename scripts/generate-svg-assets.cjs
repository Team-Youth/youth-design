const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../src/components/icon/assets');
const SVG_FILES_DIR = ASSETS_DIR;

// SVG 파일들을 읽어서 JavaScript 문자열로 변환
function generateSvgAssets() {
  const files = fs.readdirSync(SVG_FILES_DIR);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  let imports = '';
  let iconMapEntries = '';

  svgFiles.forEach((file) => {
    const filename = path.basename(file, '.svg');
    const svgContent = fs.readFileSync(path.join(SVG_FILES_DIR, file), 'utf8');

    // SVG 내용을 최적화 (불필요한 공백 제거)
    const optimizedSvg = svgContent.replace(/\n\s*/g, '').replace(/>\s+</g, '><').trim();

    // 변수명 정리 (kebab-case를 camelCase로)
    const variableName = filename
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/^[0-9]/, 'number$&')
      .replace(/=/g, '_');

    imports += `const ${variableName} = \`${optimizedSvg}\`;\n`;

    // iconMap 엔트리 생성
    const iconKey = filename.replace(/=/g, '-');
    iconMapEntries += `  '${iconKey}': ${variableName},\n`;
  });

  const output = `import { IconType } from '../Icon';

${imports}
export const iconMap: Record<IconType, string> = {
${iconMapEntries}};
`;

  fs.writeFileSync(path.join(ASSETS_DIR, 'index.ts'), output);
  console.log(`✅ ${svgFiles.length}개의 SVG 파일을 성공적으로 변환했습니다.`);
}

generateSvgAssets();
