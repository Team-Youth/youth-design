import React from 'react';
import { BoxButton, BoxButtonProps } from '../box-button';
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
  } & Partial<Omit<BoxButtonProps, 'onClick'>>;
  /** 보조 버튼 props (선택사항) */
  secondaryButton?: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<BoxButtonProps, 'onClick'>>;
  /** 팝업이 표시되는지 여부 */
  isOpen: boolean;
  /** 팝업 닫기 핸들러 */
  onClose: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  isOpen,
  onClose,
  className = '',
  style = {},
}) => {
  if (!isOpen) return null;

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
    zIndex: 1000,
    ...style,
  };

  const popupStyle: React.CSSProperties = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    maxWidth: '90vw',
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

  return (
    <div className={`popup-overlay ${className}`} style={overlayStyle} onClick={handleOverlayClick}>
      <div className="popup" style={popupStyle}>
        <div className="popup-content" style={contentStyle}>
          <h1 style={titleStyle}>{title}</h1>
          {description && <p style={descriptionStyle}>{description}</p>}
        </div>

        <div className="popup-buttons" style={buttonContainerStyle}>
          {secondaryButton && (
            <BoxButton
              type="ghost"
              size="l"
              width="fill"
              onClick={secondaryButton.onClick}
              {...(({ text, onClick, ...rest }) => rest)(secondaryButton)}
            >
              {secondaryButton.text}
            </BoxButton>
          )}
          <BoxButton
            type="solid"
            size="l"
            width="fill"
            onClick={primaryButton.onClick}
            {...(({ text, onClick, ...rest }) => rest)(primaryButton)}
          >
            {primaryButton.text}
          </BoxButton>
        </div>
      </div>
    </div>
  );
};
