import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, ButtonProps } from '../button';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { shadows } from '../../tokens/shadows';

export interface PopupProps {
  /** 팝업 제목 */
  title: string;
  /** 팝업 설명 (선택사항) */
  description?: string;
  /** 메인 버튼 props */
  primaryButton: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<ButtonProps, 'onClick'>>;
  /** 보조 버튼 props (선택사항) */
  secondaryButton?: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<ButtonProps, 'onClick'>>;
  /** 팝업이 표시되는지 여부 */
  isOpen: boolean;
  /** 팝업 닫기 핸들러 */
  onClose: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
  /** 팝업 너비 */
  width?: string | number;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  isOpen,
  onClose,
  className = '',
  width = '480px',
  style = {},
}) => {
  const [portalRoot, setPortalRoot] = React.useState<Element | null>(null);

  // Portal root 설정
  useEffect(() => {
    // 기존 portal root가 있는지 확인
    let popupRoot = document.getElementById('popup-root');

    // 없으면 생성
    if (!popupRoot) {
      popupRoot = document.createElement('div');
      popupRoot.id = 'popup-root';
      popupRoot.style.position = 'relative';
      popupRoot.style.zIndex = '9999';
      document.body.appendChild(popupRoot);
    }

    setPortalRoot(popupRoot);

    // 컴포넌트 언마운트 시 정리는 하지 않음 (다른 팝업들이 사용할 수 있으므로)
  }, []);

  // 팝업이 열려있을 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !portalRoot) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.semantic.dim.overlay,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    ...style,
  };

  const popupStyle: React.CSSProperties = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    width: typeof width === 'number' ? `${width}px` : width,
    maxHeight: '90vh',
    boxShadow: shadows.s,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const titleStyle: React.CSSProperties = {
    ...textStyles.heading1,
    color: colors.semantic.text.primary,
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    ...textStyles.body1,
    color: colors.semantic.text.secondary,
    margin: 0,
    whiteSpace: 'pre-wrap',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    flexDirection: secondaryButton ? 'row' : 'column',
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const popupContent = (
    <div className={`popup-overlay ${className}`} style={overlayStyle} onClick={handleOverlayClick}>
      <div className="popup" style={popupStyle}>
        <div className="popup-content" style={contentStyle}>
          <h1 style={titleStyle}>{title}</h1>
          {description && <p style={descriptionStyle}>{description}</p>}
        </div>

        <div className="popup-buttons" style={buttonContainerStyle}>
          {secondaryButton && (
            <Button
              type="outlined"
              size="l"
              width="fill"
              onClick={secondaryButton.onClick}
              {...(({ text, onClick, ...rest }) => rest)(secondaryButton)}
            >
              {secondaryButton.text}
            </Button>
          )}
          <Button
            type="solid"
            size="l"
            width="fill"
            onClick={primaryButton.onClick}
            {...(({ text, onClick, ...rest }) => rest)(primaryButton)}
          >
            {primaryButton.text}
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(popupContent, portalRoot);
};
