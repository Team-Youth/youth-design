import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, ButtonProps } from '../button';
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
  /** 모달 내부 컨텐츠 */
  children?: React.ReactNode;
  /** 컨텐츠 최대 높이 (기본값: 500px) */
  contentMaxHeight?: number;
  /** 스크롤바 표시 여부 (기본값: false) */
  showScrollbar?: boolean;
  /** 닫기 버튼 표시 여부 */
  showCloseButton?: boolean;
  /** 모달 너비 (기본값: 480px) */
  width?: string | number;
  /** 메인 버튼 props */
  primaryButton?: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<ButtonProps, 'onClick'>>;
  /** 보조 버튼 props (선택사항) */
  secondaryButton?: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<ButtonProps, 'onClick'>>;
  /** 모달이 표시되는지 여부 */
  isOpen: boolean;
  /** 모달 닫기 핸들러 */
  onClose: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 모달 컨테이너 추가 스타일 */
  style?: React.CSSProperties;
  /** 오버레이 추가 스타일 */
  overlayStyle?: React.CSSProperties;

  primaryDefaultDisabledButton?: {
    text: string;
    onClick: () => void;
  } & Partial<Omit<ButtonProps, 'onClick'>>;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  contentMaxHeight = 500,
  showScrollbar = false,
  showCloseButton = true,
  width,
  primaryButton,
  primaryDefaultDisabledButton,
  secondaryButton,
  isOpen,
  onClose,
  className = '',
  style = {},
  overlayStyle = {},
}) => {
  const [isContentOverflowing, setIsContentOverflowing] = React.useState(false);
  const [isPrimaryDefaultDisabled, setIsPrimaryDefaultDisabled] = React.useState(true);
  const [portalRoot, setPortalRoot] = React.useState<Element | null>(null);

  const contentRef = React.useRef<HTMLDivElement>(null);

  // Portal root 설정
  useEffect(() => {
    // 기존 portal root가 있는지 확인
    let modalRoot = document.getElementById('modal-root');

    // 없으면 생성
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      modalRoot.style.position = 'relative';
      modalRoot.style.zIndex = '9999';
      document.body.appendChild(modalRoot);
    }

    setPortalRoot(modalRoot);

    // 컴포넌트 언마운트 시 정리는 하지 않음 (다른 모달들이 사용할 수 있으므로)
  }, []);

  // 모달이 열려있을 때 body 스크롤 방지
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

  useEffect(() => {
    if (children && contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setIsContentOverflowing(scrollHeight > clientHeight);
    }
  }, [children, contentMaxHeight]);

  useEffect(() => {
    if (!primaryDefaultDisabledButton) {
      return;
    }

    if (primaryDefaultDisabledButton.disabled !== undefined) {
      setIsPrimaryDefaultDisabled(primaryDefaultDisabledButton.disabled);
    }
  }, [primaryDefaultDisabledButton?.disabled]);

  if (!isOpen || !portalRoot) return null;

  const overlayStyleConfig: React.CSSProperties = {
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
    ...overlayStyle,
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: typeof width === 'number' ? `${width}px` : width || '480px',
    width: typeof width === 'number' ? `${width}px` : width,
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 40px)',
    boxShadow: shadows.m,
    display: 'flex',
    flexDirection: 'column',
    gap: isContentOverflowing ? '0px' : secondaryButton ? '20px' : '24px',
    ...style,
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
    // borderRadius: '8px',
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
      marginLeft: '-32px',
      marginRight: '-32px',
      paddingLeft: '32px',
      paddingRight: '32px',
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

  const modalContent = (
    <div
      className={`modal-overlay ${className}`}
      style={overlayStyleConfig}
      onClick={handleOverlayClick}
    >
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

          {children && (
            <div
              ref={contentRef}
              style={imageContainerStyle}
              className={showScrollbar ? '' : 'modal-content-scrollable'}
            >
              {children}
            </div>
          )}
        </div>

        <div className="modal-buttons" style={buttonContainerStyle}>
          {secondaryButton && (
            <Button
              type="outlined"
              size="l"
              width="fill"
              onClick={secondaryButton.onClick}
              {...(({ text, onClick, disabled, ...rest }) => rest)(secondaryButton)}
            >
              {secondaryButton.text}
            </Button>
          )}
          {primaryDefaultDisabledButton && (
            <Button
              type="solid"
              size="l"
              width="fill"
              disabled={isPrimaryDefaultDisabled}
              onClick={primaryDefaultDisabledButton.onClick}
              {...(({ text, onClick, disabled, ...rest }) => rest)(primaryDefaultDisabledButton)}
            >
              {primaryDefaultDisabledButton.text}
            </Button>
          )}
          {primaryButton && (
            <Button
              type="solid"
              size="l"
              width="fill"
              disabled={primaryButton.disabled}
              onClick={primaryButton.onClick}
              {...(({ text, onClick, disabled, ...rest }) => rest)(primaryButton)}
            >
              {primaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, portalRoot);
};
