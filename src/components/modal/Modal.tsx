import React, { useEffect } from 'react';
import { BoxButton, BoxButtonProps } from '../box-button';
import { Icon } from '../icon';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { shadows } from '../../tokens/shadows';
import './Modal.css';

export interface ModalProps {
  /** 모달 제목 */
  title: string;
  /** 모달 설명 (선택사항) */
  description?: string;
  /** 이미지 컴포넌트 (선택사항) */
  contentComponent?: React.ReactNode;
  /** 컨텐츠 최대 높이 (기본값: 500px) */
  contentMaxHeight?: number;
  /** 스크롤바 표시 여부 (기본값: false) */
  showScrollbar?: boolean;
  /** 닫기 버튼 표시 여부 */
  showCloseButton?: boolean;
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
  /** 모달이 표시되는지 여부 */
  isOpen: boolean;
  /** 모달 닫기 핸들러 */
  onClose: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  contentComponent,
  contentMaxHeight = 500,
  showScrollbar = false,
  showCloseButton = true,
  primaryButton,
  secondaryButton,
  isOpen,
  onClose,
  className = '',
  style = {},
}) => {
  const [isContentOverflowing, setIsContentOverflowing] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentComponent && contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setIsContentOverflowing(scrollHeight > clientHeight);
    }
  }, [contentComponent, contentMaxHeight]);

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
    zIndex: 9999,
    ...style,
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 40px)',
    boxShadow: shadows.m,
    display: 'flex',
    flexDirection: 'column',
    gap: secondaryButton ? '20px' : '24px',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexShrink: 0,
  };

  const titleStyle: React.CSSProperties = {
    ...textStyles.heading1,
    color: colors.semantic.text.primary,
    margin: 0,
    flex: 1,
  };

  const closeButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    flexShrink: 0,
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
    minHeight: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    ...textStyles.body1,
    color: colors.semantic.text.secondary,
    margin: 0,
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '240px',
    borderRadius: '8px',
    backgroundColor: colors.primary.coolGray[100],
    objectFit: 'cover',
  };

  const imageContainerStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    maxHeight: `${contentMaxHeight}px`,
    overflowY: 'auto',
    scrollbarWidth: showScrollbar ? 'thin' : 'none',
    msOverflowStyle: showScrollbar ? 'auto' : 'none',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    flexDirection: secondaryButton ? 'row' : 'column',
    flexShrink: 0,
    ...(isContentOverflowing && {
      borderTop: `1px solid ${colors.semantic.border.default}`,
      paddingTop: '20px',
    }),
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className={`modal-overlay ${className}`} style={overlayStyle} onClick={handleOverlayClick}>
      <div className="modal" style={modalStyle}>
        <div className="modal-content" style={contentStyle}>
          <div className="modal-header" style={headerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            {showCloseButton && (
              <div style={closeButtonStyle} onClick={handleCloseClick}>
                <Icon type="close" size={24} color={colors.semantic.text.secondary} />
              </div>
            )}
          </div>

          {description && <p style={descriptionStyle}>{description}</p>}

          {contentComponent && (
            <div
              ref={contentRef}
              style={imageContainerStyle}
              className={showScrollbar ? '' : 'modal-content-scrollable'}
            >
              {contentComponent}
            </div>
          )}
        </div>

        <div className="modal-buttons" style={buttonContainerStyle}>
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
