import React, { useState, useEffect } from 'react';
import { colors } from '../../tokens/colors';

// 아이콘 타입 정의
export type IconType =
  | 'hamburger'
  | 'search'
  | 'close'
  | 'check'
  | 'add'
  | 'minus'
  | 'truncation'
  | 'more'
  | 'home'
  | 'home-filled'
  | 'heart'
  | 'heart-filled'
  | 'my-page'
  | 'my-page-filled'
  | 'download'
  | 'modify'
  | 'duplicate'
  | 'dialog'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'calendar'
  | 'calendar-filled'
  | 'time-stroke'
  | 'time-filled'
  | 'switch-circle-stroke'
  | 'switch-circle-filled'
  | 'sound'
  | 'share-ios'
  | 'settings-stroke'
  | 'settings-filled'
  | 'reset'
  | 'reload'
  | 'receipt'
  | 'radio-selected'
  | 'radio-resting'
  | 'question-stroke'
  | 'question-filled'
  | 'qr'
  | 'profile-stroke'
  | 'profile-filled'
  | 'print'
  | 'person-stroke'
  | 'person-filled'
  | 'payment-stroke'
  | 'payment-filled'
  | 'parcel'
  | 'number-0'
  | 'number-1'
  | 'number-2'
  | 'number-3'
  | 'number-4'
  | 'number-5'
  | 'number-6'
  | 'number-7'
  | 'number-8'
  | 'number-9'
  | 'new'
  | 'minus-circle-stroke'
  | 'minus-circle-filled'
  | 'microphone'
  | 'mail-stroke'
  | 'mail-filled'
  | 'logo-naver'
  | 'logo-kakao'
  | 'logo-google'
  | 'logo-apple'
  | 'lock'
  | 'location-stroke'
  | 'location-filled'
  | 'info-stroke'
  | 'info-filled'
  | 'image'
  | 'id-card-stroke'
  | 'id-card-filled'
  | 'home-stroke'
  | 'history-stroke'
  | 'history-filled'
  | 'heart-stroke'
  | 'gym'
  | 'guide'
  | 'delete-stroke'
  | 'delete-filled'
  | 'dashboard-stroke'
  | 'dashboard-filled'
  | 'customer-service'
  | 'check-circle-stroke'
  | 'check-circle-filled'
  | 'checkbox-selected-stroke'
  | 'checkbox-selected-filled'
  | 'checkbox-resting'
  | 'caution-stroke'
  | 'caution-filled'
  | 'cancel-stroke'
  | 'cancel-filled'
  | 'camera-stroke'
  | 'camera-filled'
  | 'call-stroke'
  | 'call-filled'
  | 'calendar-stroke'
  | 'bookmark-stroke'
  | 'bookmark-filled'
  | 'bell-stroke'
  | 'bell-filled'
  | 'arrow-up';

export interface IconProps {
  /** 아이콘 타입 */
  type: IconType;
  /** 아이콘 크기 (픽셀 단위) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

// 아이콘 SVG 임포트 (동적으로 로드하기 위한 매핑)
const iconMap: Record<IconType, string> = {
  hamburger: '/src/components/icon/assets/hamburger.svg',
  search: '/src/components/icon/assets/search.svg',
  close: '/src/components/icon/assets/close.svg',
  check: '/src/components/icon/assets/check.svg',
  add: '/src/components/icon/assets/add.svg',
  minus: '/src/components/icon/assets/minus.svg',
  truncation: '/src/components/icon/assets/Truncation.svg',
  more: '/src/components/icon/assets/more.svg',
  home: '/src/components/icon/assets/homeStroke.svg',
  'home-filled': '/src/components/icon/assets/homeFilled.svg',
  heart: '/src/components/icon/assets/heartStroke.svg',
  'heart-filled': '/src/components/icon/assets/heartFilled.svg',
  'my-page': '/src/components/icon/assets/profileStroke.svg',
  'my-page-filled': '/src/components/icon/assets/profileFilled.svg',
  download: '/src/components/icon/assets/download.svg',
  modify: '/src/components/icon/assets/modify.svg',
  duplicate: '/src/components/icon/assets/duplicate.svg',
  dialog: '/src/components/icon/assets/dialog.svg',
  'arrow-down': '/src/components/icon/assets/chevronDown.svg',
  'arrow-up': '/src/components/icon/assets/arrowUp.svg',
  'arrow-right': '/src/components/icon/assets/chevronRight.svg',
  'arrow-left': '/src/components/icon/assets/chevronLeft.svg',
  'chevron-left': '/src/components/icon/assets/chevronLeft.svg',
  'chevron-right': '/src/components/icon/assets/chevronRight.svg',
  'chevron-up': '/src/components/icon/assets/chevronUp.svg',
  'chevron-down': '/src/components/icon/assets/chevronDown.svg',
  calendar: '/src/components/icon/assets/calendarStroke.svg',
  'calendar-filled': '/src/components/icon/assets/calendarFilled.svg',
  'time-stroke': '/src/components/icon/assets/timeStroke.svg',
  'time-filled': '/src/components/icon/assets/timeFilled.svg',
  'switch-circle-stroke': '/src/components/icon/assets/switchCircleStroke.svg',
  'switch-circle-filled': '/src/components/icon/assets/switchCircleFilled.svg',
  sound: '/src/components/icon/assets/sound.svg',
  'share-ios': '/src/components/icon/assets/shareIos.svg',
  'settings-stroke': '/src/components/icon/assets/settingsStroke.svg',
  'settings-filled': '/src/components/icon/assets/settingsFilled.svg',
  reset: '/src/components/icon/assets/reset.svg',
  reload: '/src/components/icon/assets/reload.svg',
  receipt: '/src/components/icon/assets/receipt.svg',
  'radio-selected': '/src/components/icon/assets/radioSelected.svg',
  'radio-resting': '/src/components/icon/assets/radioResting.svg',
  'question-stroke': '/src/components/icon/assets/questionStroke.svg',
  'question-filled': '/src/components/icon/assets/questionFilled.svg',
  qr: '/src/components/icon/assets/qr.svg',
  'profile-stroke': '/src/components/icon/assets/profileStroke.svg',
  'profile-filled': '/src/components/icon/assets/profileFilled.svg',
  print: '/src/components/icon/assets/print.svg',
  'person-stroke': '/src/components/icon/assets/personStroke.svg',
  'person-filled': '/src/components/icon/assets/personFilled.svg',
  'payment-stroke': '/src/components/icon/assets/paymentStroke.svg',
  'payment-filled': '/src/components/icon/assets/paymenrFilled.svg',
  parcel: '/src/components/icon/assets/parcel.svg',
  'number-0': '/src/components/icon/assets/number=0.svg',
  'number-1': '/src/components/icon/assets/number=1.svg',
  'number-2': '/src/components/icon/assets/number=2.svg',
  'number-3': '/src/components/icon/assets/number=3.svg',
  'number-4': '/src/components/icon/assets/number=4.svg',
  'number-5': '/src/components/icon/assets/number=5.svg',
  'number-6': '/src/components/icon/assets/number=6.svg',
  'number-7': '/src/components/icon/assets/number=7.svg',
  'number-8': '/src/components/icon/assets/number=8.svg',
  'number-9': '/src/components/icon/assets/number=9.svg',
  new: '/src/components/icon/assets/New.svg',
  'minus-circle-stroke': '/src/components/icon/assets/minusCircleStroke.svg',
  'minus-circle-filled': '/src/components/icon/assets/minusCircleFilled.svg',
  microphone: '/src/components/icon/assets/microphone.svg',
  'mail-stroke': '/src/components/icon/assets/mailStroke.svg',
  'mail-filled': '/src/components/icon/assets/mailFilled.svg',
  'logo-naver': '/src/components/icon/assets/logoNaver.svg',
  'logo-kakao': '/src/components/icon/assets/logoKakao.svg',
  'logo-google': '/src/components/icon/assets/logoGoogle.svg',
  'logo-apple': '/src/components/icon/assets/logoApple.svg',
  lock: '/src/components/icon/assets/Lock.svg',
  'location-stroke': '/src/components/icon/assets/locationStroke.svg',
  'location-filled': '/src/components/icon/assets/locationFilled.svg',
  'info-stroke': '/src/components/icon/assets/infoStroke.svg',
  'info-filled': '/src/components/icon/assets/infoFilled.svg',
  image: '/src/components/icon/assets/image.svg',
  'id-card-stroke': '/src/components/icon/assets/idCardStroke.svg',
  'id-card-filled': '/src/components/icon/assets/idCardFilled.svg',
  'home-stroke': '/src/components/icon/assets/homeStroke.svg',
  'history-stroke': '/src/components/icon/assets/historyStroke.svg',
  'history-filled': '/src/components/icon/assets/historyFilled.svg',
  'heart-stroke': '/src/components/icon/assets/heartStroke.svg',
  gym: '/src/components/icon/assets/gym.svg',
  guide: '/src/components/icon/assets/guide.svg',
  'delete-stroke': '/src/components/icon/assets/deleteStroke.svg',
  'delete-filled': '/src/components/icon/assets/deleteFilled.svg',
  'dashboard-stroke': '/src/components/icon/assets/dashboardStroke.svg',
  'dashboard-filled': '/src/components/icon/assets/dashboardFilled.svg',
  'customer-service': '/src/components/icon/assets/customerService.svg',
  'check-circle-stroke': '/src/components/icon/assets/checkCircleStroke.svg',
  'check-circle-filled': '/src/components/icon/assets/checkCircleFilled.svg',
  'checkbox-selected-stroke': '/src/components/icon/assets/checkboxSelectedStroke.svg',
  'checkbox-selected-filled': '/src/components/icon/assets/checkboxSelectedFilled.svg',
  'checkbox-resting': '/src/components/icon/assets/checkboxResting.svg',
  'caution-stroke': '/src/components/icon/assets/cautionStroke.svg',
  'caution-filled': '/src/components/icon/assets/cautionFilled.svg',
  'cancel-stroke': '/src/components/icon/assets/cancelStroke.svg',
  'cancel-filled': '/src/components/icon/assets/cancelFilled.svg',
  'camera-stroke': '/src/components/icon/assets/cameraStorke.svg',
  'camera-filled': '/src/components/icon/assets/cameraFilled.svg',
  'call-stroke': '/src/components/icon/assets/callStroke.svg',
  'call-filled': '/src/components/icon/assets/callFilled.svg',
  'calendar-stroke': '/src/components/icon/assets/calendarStroke.svg',
  'bookmark-stroke': '/src/components/icon/assets/bookmarkStroke.svg',
  'bookmark-filled': '/src/components/icon/assets/bookmarkFilled.svg',
  'bell-stroke': '/src/components/icon/assets/bellStroke.svg',
  'bell-filled': '/src/components/icon/assets/bellFilled.svg',
};

export const Icon: React.FC<IconProps> = ({
  type,
  size = 24,
  color = colors.primary.coolGray[800],
  onClick,
  className = '',
  style = {},
}) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(iconMap[type]);
        let svgText = await response.text();

        // SVG 내용에서 fill 색상을 동적으로 변경
        svgText = svgText.replace(/fill="[^"]*"/g, `fill="${color}"`);

        setSvgContent(svgText);
      } catch (error) {
        console.error(`Failed to load icon: ${type}`, error);
      }
    };

    loadSvg();
  }, [type, color]);

  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
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

  return (
    <div
      className={`icon icon--${type} ${className}`}
      style={iconStyle}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
