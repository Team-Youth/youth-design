import React, { JSX } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from '../../tokens/colors';

// 주요 아이콘 타입만 우선 정의 (전체 아이콘은 추후 포팅)
export type IconType =
  | 'hamburger'
  | 'search'
  | 'close'
  | 'check'
  | 'add'
  | 'minus'
  | 'home'
  | 'heart'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-left'
  | 'chevron-right';

export interface IconProps {
  /** 아이콘 타입 */
  type: IconType;
  /** 아이콘 크기 (픽셀 단위) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 클릭 이벤트 핸들러 */
  onPress?: () => void;
  /** 추가 스타일 */
  style?: ViewStyle;
}

const getIconSvg = (type: IconType, size: number, color: string) => {
  const iconMap: Record<IconType, JSX.Element> = {
    hamburger: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 12h18M3 6h18M3 18h18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    search: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
        <Path
          d="m21 21-4.35-4.35"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    close: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="m18 6-12 12M6 6l12 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    check: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M20 6 9 17l-5-5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    add: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 5v14M5 12h14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    minus: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M5 12h14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    home: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 22V12h6v10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    heart: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'arrow-down': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 5v14M5 12l7 7 7-7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'arrow-up': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 19V5M5 12l7-7 7 7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'arrow-right': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M5 12h14M12 5l7 7-7 7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'arrow-left': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 12H5M12 19l-7-7 7-7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'chevron-left': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="m15 18-6-6 6-6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    'chevron-right': (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="m9 18 6-6-6-6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  };

  return iconMap[type] || iconMap.close; // fallback to close icon
};

export const Icon: React.FC<IconProps> = ({
  type,
  size = 24,
  color = colors.primary.coolGray[800],
  onPress,
  style,
}) => {
  const iconSvg = getIconSvg(type, size, color);

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
        activeOpacity={0.7}
      >
        {iconSvg}
      </TouchableOpacity>
    );
  }

  return iconSvg;
};
