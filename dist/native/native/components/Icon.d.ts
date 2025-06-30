import React from 'react';
import { ViewStyle } from 'react-native';
export type IconType = 'hamburger' | 'search' | 'close' | 'check' | 'add' | 'minus' | 'home' | 'heart' | 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'chevron-left' | 'chevron-right';
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
export declare const Icon: React.FC<IconProps>;
