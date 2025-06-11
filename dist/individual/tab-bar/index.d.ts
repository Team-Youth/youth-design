import React from 'react';
import { IconType } from '../icon/index.js';

interface TabBarProps {
    type?: 'underline' | 'capsule' | 'toggle';
    size?: 'l' | 'm' | 's';
    /** 너비 설정 */
    width?: 'fill' | (string & {});
    defaultSelectedIndex?: number;
    selectedIndex?: number;
    onTabChange?: (index: number) => void;
    tabs: Array<{
        label: string;
        icon?: IconType;
        number?: string | number;
        disabled?: boolean;
    }>;
    className?: string;
}
declare const TabBar: React.FC<TabBarProps>;

export { TabBar, type TabBarProps };
