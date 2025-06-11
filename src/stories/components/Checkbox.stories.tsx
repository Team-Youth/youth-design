import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '../../components/check-box/Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    onChange: action('checkbox-changed'),
    onClick: action('checkbox-clicked'),
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: '텍스트 라벨',
    description: '설명 텍스트',
    onChange: action('checkbox-changed'),
    onClick: action('checkbox-clicked'),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: '선택된 체크박스',
    onChange: action('checkbox-changed'),
    onClick: action('checkbox-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: '비활성화된 체크박스',
    onChange: action('checkbox-changed'),
    onClick: action('checkbox-clicked'),
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: '비활성화된 선택 체크박스',
    onChange: action('checkbox-changed'),
    onClick: action('checkbox-clicked'),
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        checked={checked}
        label="상호작용 가능한 체크박스"
        description="클릭해서 상태를 변경해보세요"
        onChange={(newChecked) => {
          setChecked(newChecked);
          action('checkbox-changed')(newChecked);
        }}
        onClick={action('checkbox-clicked')}
      />
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const [states, setStates] = useState({
      basic: false,
      withDescription: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>모든 상태</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>기본 상태</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Checkbox
              label="기본 체크박스"
              checked={states.basic}
              onChange={(checked) => setStates((prev) => ({ ...prev, basic: checked }))}
            />
            <Checkbox
              label="설명이 있는 체크박스"
              description="추가 설명 텍스트입니다"
              checked={states.withDescription}
              onChange={(checked) => setStates((prev) => ({ ...prev, withDescription: checked }))}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>비활성화 상태</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Checkbox label="비활성화" disabled />
            <Checkbox label="비활성화 + 설명" description="비활성화된 체크박스입니다" disabled />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>비활성화 + 선택 상태</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Checkbox label="비활성화 + 선택" disabled checked />
            <Checkbox
              label="비활성화 + 선택 + 설명"
              description="비활성화된 선택 체크박스입니다"
              disabled
              checked
            />
          </div>
        </div>
      </div>
    );
  },
};

export const LabelPositions: Story = {
  render: () => {
    const [labelStates, setLabelStates] = useState({
      right: false,
      left: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>라벨 위치</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox
            labelPosition="right"
            label="오른쪽 라벨"
            description="설명 텍스트"
            checked={labelStates.right}
            onChange={(checked) => setLabelStates((prev) => ({ ...prev, right: checked }))}
          />
          <Checkbox
            labelPosition="left"
            label="왼쪽 라벨"
            description="설명 텍스트"
            checked={labelStates.left}
            onChange={(checked) => setLabelStates((prev) => ({ ...prev, left: checked }))}
          />
        </div>
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [states, setStates] = useState({
      option1: false,
      option2: false,
      option3: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>설명이 있는 체크박스</h3>

        <Checkbox
          label="마케팅 정보 수신 동의"
          description="이벤트, 쿠폰, 할인 혜택 등의 마케팅 정보를 이메일과 SMS로 받아보실 수 있습니다."
          checked={states.option1}
          onChange={(checked) => setStates((prev) => ({ ...prev, option1: checked }))}
        />

        <Checkbox
          label="개인정보 처리방침 동의"
          description="서비스 이용을 위한 개인정보 수집 및 이용에 동의합니다."
          checked={states.option2}
          onChange={(checked) => setStates((prev) => ({ ...prev, option2: checked }))}
        />

        <Checkbox
          label="이용약관 동의"
          description="서비스 이용약관을 확인하고 동의합니다."
          checked={states.option3}
          onChange={(checked) => setStates((prev) => ({ ...prev, option3: checked }))}
        />
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      privacy: false,
      marketing: false,
      newsletter: false,
    });

    const allRequired = formData.terms && formData.privacy;
    const allChecked = Object.values(formData).every(Boolean);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '500px',
          padding: '24px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>회원가입 약관 동의</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox
            label="전체 동의"
            description="아래 모든 약관에 동의합니다."
            checked={allChecked}
            onChange={(checked) => {
              setFormData({
                terms: checked,
                privacy: checked,
                marketing: checked,
                newsletter: checked,
              });
            }}
          />

          <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

          <Checkbox
            label="[필수] 이용약관 동의"
            description="서비스 이용을 위한 필수 약관입니다."
            checked={formData.terms}
            onChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked }))}
          />

          <Checkbox
            label="[필수] 개인정보 처리방침 동의"
            description="개인정보 수집 및 이용에 대한 필수 동의입니다."
            checked={formData.privacy}
            onChange={(checked) => setFormData((prev) => ({ ...prev, privacy: checked }))}
          />

          <Checkbox
            label="[선택] 마케팅 정보 수신 동의"
            description="이벤트, 쿠폰 등의 마케팅 정보를 받아보실 수 있습니다."
            checked={formData.marketing}
            onChange={(checked) => setFormData((prev) => ({ ...prev, marketing: checked }))}
          />

          <Checkbox
            label="[선택] 뉴스레터 구독"
            description="주간 뉴스레터를 이메일로 받아보실 수 있습니다."
            checked={formData.newsletter}
            onChange={(checked) => setFormData((prev) => ({ ...prev, newsletter: checked }))}
          />
        </div>

        <button
          style={{
            padding: '12px 24px',
            backgroundColor: allRequired ? '#7c3aed' : '#d1d5db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: allRequired ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s',
          }}
          disabled={!allRequired}
          onClick={() => action('form-submitted')(formData)}
        >
          회원가입
        </button>
      </div>
    );
  },
};
