import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DropdownOption, Dropdown } from '../../components';

// Icon components for demonstration
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667S2.5 14.1667 2.5 8.33333C2.5 6.34419 3.29018 4.43655 4.6967 3.03007C6.10322 1.62359 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62359 15.3033 3.03007C16.7098 4.43655 17.5 6.34419 17.5 8.33333Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="10"
      cy="8.33333"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.6667 17.5v-1.6667a3.3333 3.3333 0 0 0-3.3334-3.3333H6.66667a3.3333 3.3333 0 0 0-3.3333 3.3333V17.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="10"
      cy="6.66667"
      r="3.33333"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect
      x="2.5"
      y="2.5"
      width="6.66667"
      height="6.66667"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10.8333"
      y="2.5"
      width="6.66667"
      height="6.66667"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2.5"
      y="10.8333"
      width="6.66667"
      height="6.66667"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10.8333"
      y="10.8333"
      width="6.66667"
      height="6.66667"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sample options
const cityOptions: DropdownOption[] = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'incheon', label: '인천' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
  { value: 'ulsan', label: '울산' },
  { value: 'sejong', label: '세종' },
];

const categoryOptions: DropdownOption[] = [
  { value: 'tech', label: '기술' },
  { value: 'design', label: '디자인' },
  { value: 'business', label: '비즈니스' },
  { value: 'marketing', label: '마케팅' },
  { value: 'sales', label: '영업' },
  { value: 'hr', label: '인사' },
  { value: 'finance', label: '재무' },
  { value: 'legal', label: '법무' },
];

const roleOptions: DropdownOption[] = [
  { value: 'admin', label: '관리자' },
  { value: 'manager', label: '매니저' },
  { value: 'developer', label: '개발자' },
  { value: 'designer', label: '디자이너' },
  { value: 'user', label: '일반 사용자', disabled: true },
  { value: 'guest', label: '게스트' },
];

// Controlled Dropdown component for interactive stories
const ControlledDropdown = (props: any) => {
  const [value, setValue] = useState(props.value || '');
  return <Dropdown {...props} value={value} onChange={setValue} />;
};

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
드롭다운(Dropdown)은 사용자가 여러 옵션 중 하나를 선택할 수 있는 선택형 입력 컴포넌트입니다.

## 주요 기능
- **Figma 디자인 스펙 완벽 구현**: 정확한 크기, 패딩, 색상, 그림자 적용
- **선택된 옵션 표시**: 체크 아이콘과 보라색 하이라이트로 현재 선택 상태 표시
- **호버 상태**: 마우스 오버 시 부드러운 배경색 변화
- **키보드 접근성**: Enter, Space, ESC 키 지원
- **외부 클릭 감지**: 드롭다운 외부 클릭 시 자동 닫기
- **Leading Icon 지원**: 아이콘과 함께 사용 가능
- **에러 상태**: 빨간색 테두리와 에러 메시지 표시
- **비활성화 상태**: disabled 옵션 및 전체 컴포넌트 비활성화
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '드롭다운 플레이스홀더 텍스트입니다.',
      defaultValue: 'Placeholder',
    },
    value: {
      control: { type: 'text' },
      description: '선택된 값입니다.',
    },
    options: {
      control: { type: 'object' },
      description: '드롭다운 옵션 리스트입니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태를 설정합니다.',
      defaultValue: false,
    },
    error: {
      control: { type: 'boolean' },
      description: '에러 상태를 설정합니다.',
      defaultValue: false,
    },
    errorMessage: {
      control: { type: 'text' },
      description: '에러 메시지를 설정합니다.',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: '앞쪽에 표시되는 아이콘입니다.',
      mapping: {
        true: <LocationIcon />,
        false: undefined,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="Placeholder"
      options={[
        { value: 'option1', label: 'Option1' },
        { value: 'option2', label: 'Option2' },
        { value: 'option3', label: 'Option3' },
        { value: 'option4', label: 'Option4' },
      ]}
    />
  ),
};

export const Selected: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="Placeholder"
      value="option1"
      options={[
        { value: 'option1', label: 'Option1' },
        { value: 'option2', label: 'Option2' },
        { value: 'option3', label: 'Option3' },
        { value: 'option4', label: 'Option4' },
      ]}
    />
  ),
};

export const WithLeadingIcon: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="위치를 선택해주세요..."
      options={cityOptions}
      leadingIcon={<LocationIcon />}
    />
  ),
};

export const WithDisabledOptions: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="역할을 선택해주세요..."
      options={roleOptions}
      leadingIcon={<UserIcon />}
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="카테고리를 선택해주세요..."
      options={categoryOptions}
      error={true}
      errorMessage="카테고리를 선택해야 합니다."
      leadingIcon={<CategoryIcon />}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="비활성화된 드롭다운"
      options={cityOptions}
      disabled={true}
      value="seoul"
    />
  ),
};

// Interactive controlled examples
export const Interactive: Story = {
  render: () => <ControlledDropdown placeholder="도시를 선택해주세요..." options={cityOptions} />,
};

export const InteractiveWithIcon: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="위치를 선택해주세요..."
      options={cityOptions}
      leadingIcon={<LocationIcon />}
    />
  ),
};

// Figma 디자인 스펙 시연을 위한 새로운 스토리
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          🎨 Figma 디자인 스펙 구현
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          실제 Figma 디자인과 동일한 스펙으로 구현된 드롭다운 컴포넌트입니다.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            기본 상태
          </h3>
          <ControlledDropdown
            placeholder="Placeholder"
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
              { value: 'option4', label: 'Option4' },
            ]}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            선택됨 (체크 아이콘)
          </h3>
          <ControlledDropdown
            placeholder="OptionName"
            value="option1"
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
              { value: 'option4', label: 'Option4' },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Empty (Rest)</h3>
        <ControlledDropdown placeholder="선택해주세요..." options={cityOptions} />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Selected</h3>
        <ControlledDropdown placeholder="선택해주세요..." options={cityOptions} value="seoul" />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Leading Icon
        </h3>
        <ControlledDropdown
          placeholder="위치를 선택해주세요..."
          options={cityOptions}
          leadingIcon={<LocationIcon />}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Disabled Options
        </h3>
        <ControlledDropdown
          placeholder="역할을 선택해주세요..."
          options={roleOptions}
          leadingIcon={<UserIcon />}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Error State</h3>
        <ControlledDropdown
          placeholder="카테고리를 선택해주세요..."
          options={categoryOptions}
          error={true}
          errorMessage="카테고리를 선택해야 합니다."
          leadingIcon={<CategoryIcon />}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Disabled</h3>
        <ControlledDropdown
          placeholder="비활성화된 드롭다운"
          options={cityOptions}
          disabled={true}
          value="seoul"
        />
      </div>
    </div>
  ),
};

// Long option list example
export const LongOptionList: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="국가를 선택해주세요..."
      options={[
        { value: 'kr', label: '대한민국' },
        { value: 'us', label: '미국' },
        { value: 'jp', label: '일본' },
        { value: 'cn', label: '중국' },
        { value: 'uk', label: '영국' },
        { value: 'fr', label: '프랑스' },
        { value: 'de', label: '독일' },
        { value: 'it', label: '이탈리아' },
        { value: 'es', label: '스페인' },
        { value: 'ca', label: '캐나다' },
        { value: 'au', label: '호주' },
        { value: 'br', label: '브라질' },
        { value: 'in', label: '인도' },
        { value: 'ru', label: '러시아' },
        { value: 'mx', label: '멕시코' },
      ]}
      leadingIcon={<LocationIcon />}
    />
  ),
};
