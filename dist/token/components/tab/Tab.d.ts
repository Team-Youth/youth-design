import React from 'react';
import { IconType } from '../icon';
export interface TabProps {
    type?: 'underline' | 'capsule' | 'toggle';
    size?: 'l' | 'm' | 's';
    selected?: boolean;
    disabled?: boolean;
    /** 아이콘 타입 (Icon 컴포넌트 사용) */
    icon?: IconType;
    number?: string | number;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    /** 너비 설정 */
    width?: 'fill' | (string & {});
}
export declare const Tab: React.FC<TabProps>;
