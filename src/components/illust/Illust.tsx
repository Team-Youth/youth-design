import { illustMap, IllustType } from './assets';

export interface IllustProps {
  /** 일러스트 타입 */
  type: IllustType;
  /** 일러스트 크기 (픽셀 단위) */
  size?: number;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Illust: React.FC<IllustProps> = ({
  type,
  size = 24,
  onClick,
  className = '',
  style = {},
}) => {
  const svgContent = illustMap[type];

  const illustStyle: React.CSSProperties = {
    width: size,
    height: size,
    cursor: 'inherit',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  if (!svgContent) {
    console.warn(`Illust type "${type}" not found`);
    return (
      <div
        className={`illust illust--${type} ${className}`}
        style={illustStyle}
        onClick={handleClick}
        role={onClick ? 'button' : 'img'}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      </div>
    );
  }

  // SVG 내용에서 크기를 동적으로 변경 (color는 변경하지 않음)
  const processedSvg = svgContent
    .replace(/width="[^"]*"/g, `width="${size}"`)
    .replace(/height="[^"]*"/g, `height="${size}"`);

  return (
    <div
      className={`illust illust--${type} ${className}`}
      style={illustStyle}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};
