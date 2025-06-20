import React, { useState } from 'react';
import { Tab, TabProps } from '../tab';
import { colors } from '../../tokens/colors';
import { IconType } from '../icon';

export interface TabBarProps {
  type?: 'underline' | 'capsule' | 'toggle';
  size?: 'l' | 'm' | 's';
  /** 너비 설정 */
  width?: 'fill' | (string & {});
  /** 줄바꿈 허용 여부 */
  wrap?: boolean;
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

export const TabBar: React.FC<TabBarProps> = ({
  type = 'underline',
  size = 'm',
  width,
  wrap = true,
  defaultSelectedIndex = 0,
  selectedIndex,
  onTabChange,
  tabs,
  className = '',
}) => {
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(defaultSelectedIndex);

  const currentSelectedIndex = selectedIndex !== undefined ? selectedIndex : internalSelectedIndex;

  const handleTabClick = (index: number) => {
    if (tabs[index]?.disabled) return;

    if (selectedIndex === undefined) {
      setInternalSelectedIndex(index);
    }
    onTabChange?.(index);
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'stretch',
      gap: type === 'toggle' ? '0px' : type === 'capsule' ? '12px' : '8px',
      flexDirection: 'row',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      rowGap: wrap ? (type === 'toggle' ? '4px' : type === 'capsule' ? '12px' : '8px') : undefined,
      width: width === 'fill' ? '100%' : width || 'fit-content',
      height: type === 'toggle' ? (size === 'l' ? '48px' : size === 's' ? '38px' : '48px') : 'auto',
      borderBottom: type === 'underline' ? `1px solid ${colors.semantic.border.default}` : 'none',
      background: type === 'toggle' ? colors.primary.coolGray[50] : 'transparent',
      borderRadius: type === 'toggle' ? (size === 'l' ? '12px' : '8px') : '0px',
      padding: type === 'toggle' ? '4px' : '0px',
    };

    return baseStyles;
  };

  const getTabStyles = (index: number): Partial<TabProps> => {
    if (type === 'toggle') {
      return {
        width: 'fill',
        style: {
          flex: '1',
          minWidth: '0',
        } as React.CSSProperties,
      };
    }

    if (width === 'fill') {
      return {
        width: 'fill',
        style: {
          flex: '1',
          minWidth: '0',
        } as React.CSSProperties,
      };
    }

    return {};
  };

  return (
    <div style={getContainerStyles()} className={className}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          type={type}
          size={size}
          selected={index === currentSelectedIndex}
          disabled={tab.disabled}
          icon={tab.icon}
          number={tab.number}
          onClick={() => handleTabClick(index)}
          {...getTabStyles(index)}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
};
