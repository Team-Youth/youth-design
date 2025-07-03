import React from 'react';
import { Font } from '../font/Font';
import { colors } from '../../tokens/colors';

export interface BreadcrumbItem {
  /** 표시할 텍스트 */
  label: string;
  /** 클릭 시 실행될 함수 (현재 페이지인 경우 undefined) */
  onClick?: () => void;
  /** 링크 URL (onClick 대신 사용 가능) */
  href?: string;
}

export interface BreadcrumbProps {
  /** Breadcrumb 항목들 (마지막 항목은 현재 페이지) */
  items: BreadcrumbItem[];
  /** 구분자 (기본값: '/') */
  separator?: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 커스텀 스타일 */
  style?: React.CSSProperties;
}

const BreadcrumbItem: React.FC<{
  item: BreadcrumbItem;
  isCurrent: boolean;
}> = ({ item, isCurrent }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const handleClick = () => {
    if (!isCurrent && item.onClick) {
      item.onClick();
    }
  };

  const handleMouseDown = () => {
    if (!isCurrent) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const getBackgroundColor = () => {
    if (isCurrent) return 'transparent';
    if (isPressed) return colors.primary.coolGray[100];
    if (isHovered) return colors.primary.coolGray[50];
    return 'transparent';
  };

  const getTextColor = () => {
    if (isCurrent || isPressed) return colors.semantic.text.primary;

    return colors.semantic.text.secondary;
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
    borderRadius: '8px',
    backgroundColor: getBackgroundColor(),
    cursor: isCurrent ? 'default' : 'pointer',
    transition: 'background-color 0.2s ease',
    userSelect: 'none',
    // a 태그 기본 스타일 제거
    textDecoration: 'none',
    color: 'inherit',
  };

  const ItemComponent = item.href && !isCurrent ? 'a' : 'div';

  return (
    <ItemComponent
      style={itemStyle}
      onClick={handleClick}
      onMouseEnter={() => !isCurrent && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      href={item.href}
      aria-current={isCurrent ? 'page' : undefined}
      role={isCurrent ? undefined : 'button'}
      tabIndex={isCurrent ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isCurrent) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <Font type="heading3" fontWeight="semibold" color={getTextColor()}>
        {item.label}
      </Font>
    </ItemComponent>
  );
};

const Separator: React.FC<{ separator: string }> = ({ separator }) => {
  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="5.78198"
          y="0.667301"
          width="1.66667"
          height="15"
          rx="0.833334"
          transform="rotate(20 5.78198 0.667301)"
          fill="#D1D5DB"
        />
      </svg>
    </div>
  );
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className,
  style,
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    ...style,
  };

  return (
    <nav style={containerStyle} className={className} aria-label="breadcrumb">
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <BreadcrumbItem item={item} isCurrent={isCurrent} />
            {!isLast && <Separator separator={separator} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
