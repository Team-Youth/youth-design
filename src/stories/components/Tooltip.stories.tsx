import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tooltip, type TooltipPosition } from '../../components/tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma 디자인을 기반으로 구현된 툴팁 컴포넌트입니다. hover 또는 click 트리거를 지원하며, 12가지 방향 설정이 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '툴팁 내용',
    },
    position: {
      control: 'select',
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
      ],
      description: '툴팁 위치',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: '툴팁 트리거 방식',
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
    },
    mouseEnterDelay: {
      control: 'number',
      description: 'hover 시 툴팁이 나타나기까지의 지연 시간 (ms)',
    },
    mouseLeaveDelay: {
      control: 'number',
      description: 'hover 시 툴팁이 사라지기까지의 지연 시간 (ms)',
    },
    offset: {
      control: 'number',
      description: '툴팁과 기준 요소 사이의 거리 (px)',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼 스타일
const buttonStyle: React.CSSProperties = {
  padding: '12px 16px',
  backgroundColor: '#7248D9',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
};

// Hover 트리거 - Top 방향
export const HoverTop: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'top',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (Top)</button>,
  },
};

// Hover 트리거 - Top 방향 with Close Button
export const HoverTopWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'top',
    trigger: 'hover',
    showCloseButton: true,
    children: <button style={buttonStyle}>Hover me (Top with Close)</button>,
  },
};

// Click 트리거 - Top 방향
export const ClickTop: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'top',
    trigger: 'click',
    showCloseButton: false,
    children: <button style={buttonStyle}>Click me (Top)</button>,
  },
};

// Click 트리거 - Top 방향 with Close Button
export const ClickTopWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'top',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (Top with Close)</button>,
  },
};

// Bottom 방향
export const HoverBottom: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottom',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (Bottom)</button>,
  },
};

export const HoverBottomWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottom',
    trigger: 'hover',
    showCloseButton: true,
    children: <button style={buttonStyle}>Hover me (Bottom with Close)</button>,
  },
};

// Left 방향
export const HoverLeft: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'left',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (Left)</button>,
  },
};

export const HoverLeftWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'left',
    trigger: 'hover',
    showCloseButton: true,
    children: <button style={buttonStyle}>Hover me (Left with Close)</button>,
  },
};

// Right 방향
export const HoverRight: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'right',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (Right)</button>,
  },
};

export const HoverRightWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'right',
    trigger: 'hover',
    showCloseButton: true,
    children: <button style={buttonStyle}>Hover me (Right with Close)</button>,
  },
};

// TopLeft 방향
export const HoverTopLeft: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'topLeft',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (TopLeft)</button>,
  },
};

export const ClickTopLeftWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'topLeft',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (TopLeft with Close)</button>,
  },
};

// TopRight 방향
export const HoverTopRight: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'topRight',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (TopRight)</button>,
  },
};

export const ClickTopRightWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'topRight',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (TopRight with Close)</button>,
  },
};

// BottomLeft 방향
export const HoverBottomLeft: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottomLeft',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (BottomLeft)</button>,
  },
};

export const ClickBottomLeftWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottomLeft',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (BottomLeft with Close)</button>,
  },
};

// BottomRight 방향
export const HoverBottomRight: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottomRight',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (BottomRight)</button>,
  },
};

export const ClickBottomRightWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'bottomRight',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (BottomRight with Close)</button>,
  },
};

// LeftTop 방향
export const HoverLeftTop: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'leftTop',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (LeftTop)</button>,
  },
};

export const ClickLeftTopWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'leftTop',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (LeftTop with Close)</button>,
  },
};

// LeftBottom 방향
export const HoverLeftBottom: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'leftBottom',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (LeftBottom)</button>,
  },
};

export const ClickLeftBottomWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'leftBottom',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (LeftBottom with Close)</button>,
  },
};

// RightTop 방향
export const HoverRightTop: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'rightTop',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (RightTop)</button>,
  },
};

export const ClickRightTopWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'rightTop',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (RightTop with Close)</button>,
  },
};

// RightBottom 방향
export const HoverRightBottom: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'rightBottom',
    trigger: 'hover',
    showCloseButton: false,
    children: <button style={buttonStyle}>Hover me (RightBottom)</button>,
  },
};

export const ClickRightBottomWithClose: Story = {
  args: {
    content: 'ToolTip Text Area ToolTip Text Area',
    position: 'rightBottom',
    trigger: 'click',
    showCloseButton: true,
    children: <button style={buttonStyle}>Click me (RightBottom with Close)</button>,
  },
};

// 모든 방향을 한 번에 보는 데모
export const AllPositions = () => {
  const positions: TooltipPosition[] = [
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
    'left',
    'leftTop',
    'leftBottom',
    'right',
    'rightTop',
    'rightBottom',
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '60px',
        padding: '120px',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {positions.map((position) => (
        <div
          key={position}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Tooltip
            content={`ToolTip at ${position}`}
            position={position}
            trigger="hover"
            showCloseButton={false}
          >
            <button style={buttonStyle}>{position}</button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

// Controlled Tooltip (외부에서 제어)
export const ControlledTooltip = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Tooltip
        content="This is a controlled tooltip"
        position="top"
        trigger="hover"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <button style={buttonStyle}>Controlled Target</button>
      </Tooltip>
      <button
        style={{ ...buttonStyle, backgroundColor: '#505862' }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Hide' : 'Show'} Tooltip
      </button>
    </div>
  );
};

// 긴 텍스트 테스트
export const LongText: Story = {
  args: {
    content:
      'This is a very long tooltip text that should wrap properly within the maximum width constraint of 300px. It demonstrates how the tooltip handles longer content.',
    position: 'top',
    trigger: 'hover',
    showCloseButton: true,
    children: <button style={buttonStyle}>Hover for long text</button>,
  },
};

// 화면 가장자리 위치 조정 테스트
export const EdgePositioning = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* 좌상단 */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <Tooltip content="Top-left corner adjustment" position="top" trigger="hover">
          <button style={buttonStyle}>Top-Left</button>
        </Tooltip>
      </div>

      {/* 우상단 */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Tooltip content="Top-right corner adjustment" position="top" trigger="hover">
          <button style={buttonStyle}>Top-Right</button>
        </Tooltip>
      </div>

      {/* 좌하단 */}
      <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <Tooltip content="Bottom-left corner adjustment" position="bottom" trigger="hover">
          <button style={buttonStyle}>Bottom-Left</button>
        </Tooltip>
      </div>

      {/* 우하단 */}
      <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <Tooltip content="Bottom-right corner adjustment" position="bottom" trigger="hover">
          <button style={buttonStyle}>Bottom-Right</button>
        </Tooltip>
      </div>

      {/* 중앙 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Tooltip content="Center position" position="top" trigger="hover">
          <button style={buttonStyle}>Center</button>
        </Tooltip>
      </div>
    </div>
  );
};

// Custom delay 설정
export const CustomDelay: Story = {
  args: {
    content: 'This tooltip has custom delay (1000ms)',
    position: 'top',
    trigger: 'hover',
    showCloseButton: false,
    mouseEnterDelay: 1000,
    mouseLeaveDelay: 500,
    children: <button style={buttonStyle}>Hover me (Custom Delay)</button>,
  },
};
