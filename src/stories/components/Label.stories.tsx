import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
라벨(Labels)은 메타데이터 또는 넛징 데이터를 활용하여 사용자의 선택을 도와주는 요소입니다.

## 특징
- **크기**: Large(l), Medium(m), Small(s) 세 가지 크기 지원
- **모양**: Square, Capsule 두 가지 형태 지원  
- **색상**: 다양한 색상 변형 지원
- **아이콘**: Leading Icon, Trailing Icon 지원
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's'],
      description: '라벨의 크기를 설정합니다.',
      table: {
        type: { summary: "'l' | 'm' | 's'" },
        defaultValue: { summary: "'m'" },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['square', 'capsule'],
      description: '라벨의 모양을 설정합니다.',
      table: {
        type: { summary: "'square' | 'capsule'" },
        defaultValue: { summary: "'square'" },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['lightGray', 'darkGray', 'lightViolet', 'violet', 'lightRed', 'red', 'lightGreen', 'green', 'lightYellow', 'yellow', 'grey'],
      description: '라벨의 색상을 설정합니다.',
      table: {
        type: { summary: "LabelColor" },
        defaultValue: { summary: "'darkGray'" },
      },
    },
    children: {
      control: { type: 'text' },
      description: '라벨에 표시될 텍스트 내용입니다.',
    },
    leadingIcon: {
      control: { type: 'select' },
      options: [undefined, 'add', 'minus', 'check', 'heart-stroke', 'profile-stroke', 'settings-stroke'],
      description: '라벨 텍스트 앞에 표시되는 아이콘입니다.',
    },
    trailingIcon: {
      control: { type: 'select' },
      options: [undefined, 'add', 'minus', 'check', 'heart-stroke', 'profile-stroke', 'settings-stroke'],
      description: '라벨 텍스트 뒤에 표시되는 아이콘입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Label',
    leadingIcon: 'add',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Label',
    trailingIcon: 'check',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Label',
    leadingIcon: 'add',
    trailingIcon: 'check',
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Label size="l">Large</Label>
      <Label size="m">Medium</Label>
      <Label size="s">Small</Label>
    </div>
  ),
};

// Type variants
export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Label type="square">Square</Label>
      <Label type="capsule">Capsule</Label>
    </div>
  ),
};

// Color variants
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label color="lightGray">Light Gray</Label>
      <Label color="darkGray">Dark Gray</Label>
      <Label color="lightViolet">Light Violet</Label>
      <Label color="violet">Violet</Label>
      <Label color="lightRed">Light Red</Label>
      <Label color="red">Red</Label>
      <Label color="lightGreen">Light Green</Label>
      <Label color="green">Green</Label>
      <Label color="lightYellow">Light Yellow</Label>
      <Label color="yellow">Yellow</Label>
    </div>
  ),
};

// Square type variations
export const SquareVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Square - Large</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="l" type="square" color="darkGray">New</Label>
          <Label size="l" type="square" color="violet">Featured</Label>
          <Label size="l" type="square" color="green" leadingIcon="check">완료</Label>
          <Label size="l" type="square" color="red" leadingIcon="heart-stroke">중요</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Square - Medium</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="m" type="square" color="lightGray">Draft</Label>
          <Label size="m" type="square" color="lightViolet">Beta</Label>
          <Label size="m" type="square" color="lightGreen" trailingIcon="add">Add</Label>
          <Label size="m" type="square" color="yellow">주의</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Square - Small</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="s" type="square" color="lightGray">v1.0</Label>
          <Label size="s" type="square" color="violet">Pro</Label>
          <Label size="s" type="square" color="green">✓</Label>
          <Label size="s" type="square" color="red">!</Label>
        </div>
      </div>
    </div>
  ),
};

// Capsule type variations
export const CapsuleVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Capsule - Large</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="l" type="capsule" color="darkGray">카테고리</Label>
          <Label size="l" type="capsule" color="violet">프리미엄</Label>
          <Label size="l" type="capsule" color="green" leadingIcon="profile-stroke">멤버</Label>
          <Label size="l" type="capsule" color="lightRed" trailingIcon="settings-stroke">설정</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Capsule - Medium</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="m" type="capsule" color="lightGray">태그</Label>
          <Label size="m" type="capsule" color="lightViolet">라벨</Label>
          <Label size="m" type="capsule" color="lightGreen">진행중</Label>
          <Label size="m" type="capsule" color="yellow">대기</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Capsule - Small</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label size="s" type="capsule" color="lightGray">소형</Label>
          <Label size="s" type="capsule" color="violet">작음</Label>
          <Label size="s" type="capsule" color="green">ON</Label>
          <Label size="s" type="capsule" color="red">OFF</Label>
        </div>
      </div>
    </div>
  ),
};

// Use cases examples
export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>상태 표시</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label color="green" leadingIcon="check">활성</Label>
          <Label color="red" leadingIcon="minus">비활성</Label>
          <Label color="yellow" leadingIcon="heart-stroke">대기</Label>
          <Label color="lightGray">미정</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>카테고리 분류</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label type="capsule" color="violet">기술</Label>
          <Label type="capsule" color="lightGreen">디자인</Label>
          <Label type="capsule" color="lightRed">마케팅</Label>
          <Label type="capsule" color="lightYellow">기획</Label>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>우선순위</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Label color="red" size="s">높음</Label>
          <Label color="yellow" size="s">보통</Label>
          <Label color="lightGray" size="s">낮음</Label>
        </div>
      </div>
    </div>
  ),
};
