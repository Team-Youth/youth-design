import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DropdownOption, Dropdown } from '../../components';
import React from 'react';

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
- **검색 기능**: enableSearch=true로 옵션 검색 가능
- **옵션 숨김 기능**: hideOption=true로 드롭다운 옵션 표시 없이 디스플레이만 사용
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
    width: {
      control: { type: 'select' },
      options: ['320px', 'fill', '400px', '50%'],
      description: '드롭다운의 너비를 설정합니다. "fill"을 사용하면 부모 요소의 100%가 됩니다.',
      defaultValue: '320px',
    },
    leadingIconType: {
      control: { type: 'select' },
      options: [
        'none',
        'search',
        'location-stroke',
        'location-filled',
        'person-stroke',
        'person-filled',
        'home',
        'home-filled',
        'calendar',
        'calendar-filled',
        'mail-stroke',
        'mail-filled',
        'settings-stroke',
        'settings-filled',
        'heart',
        'heart-filled',
        'chevron-up',
        'chevron-down',
        'check',
      ],
      description: 'Leading 아이콘 타입을 설정합니다. Icon 컴포넌트를 사용합니다.',
      mapping: {
        none: undefined,
        search: 'search',
        'location-stroke': 'location-stroke',
        'location-filled': 'location-filled',
        'person-stroke': 'person-stroke',
        'person-filled': 'person-filled',
        home: 'home',
        'home-filled': 'home-filled',
        calendar: 'calendar',
        'calendar-filled': 'calendar-filled',
        'mail-stroke': 'mail-stroke',
        'mail-filled': 'mail-filled',
        'settings-stroke': 'settings-stroke',
        'settings-filled': 'settings-filled',
        heart: 'heart',
        'heart-filled': 'heart-filled',
        'chevron-up': 'chevron-up',
        'chevron-down': 'chevron-down',
        check: 'check',
      },
    },
    enableSearch: {
      control: { type: 'boolean' },
      description: '검색 기능을 활성화합니다. true일 때 드롭다운 내에서 옵션을 검색할 수 있습니다.',
      defaultValue: false,
    },
    hideOption: {
      control: { type: 'boolean' },
      description:
        '모든 옵션을 숨깁니다. true일 때 드롭다운이 열리지 않고 디스플레이만 사용할 수 있습니다.',
      defaultValue: false,
    },
    className: {
      control: { type: 'text' },
      description: '커스텀 클래스명을 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    options: [
      { value: 'option1', label: 'Option1' },
      { value: 'option2', label: 'Option2' },
      { value: 'option3', label: 'Option3' },
      { value: 'option4', label: 'Option4' },
    ],
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const Selected: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'option1',
    options: [
      { value: 'option1', label: 'Option1' },
      { value: 'option2', label: 'Option2' },
      { value: 'option3', label: 'Option3' },
      { value: 'option4', label: 'Option4' },
    ],
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const WithLeadingIcon: Story = {
  args: {
    placeholder: '위치를 선택해주세요...',
    options: cityOptions,
    leadingIconType: 'location-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const WithDisabledOptions: Story = {
  args: {
    placeholder: '역할을 선택해주세요...',
    options: roleOptions,
    leadingIconType: 'person-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const ErrorState: Story = {
  args: {
    placeholder: '카테고리를 선택해주세요...',
    options: categoryOptions,
    error: true,
    errorMessage: '카테고리를 선택해야 합니다.',
    leadingIconType: 'settings-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 드롭다운',
    options: cityOptions,
    disabled: true,
    value: 'seoul',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

// 새로운 hideOption 기능 시연
export const HideOption: Story = {
  args: {
    placeholder: '옵션이 숨겨진 드롭다운',
    value: 'seoul',
    options: cityOptions,
    hideOption: true,
    leadingIconType: 'location-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'hideOption=true로 설정하면 드롭다운이 열리지 않고 디스플레이 목적으로만 사용할 수 있습니다.',
      },
    },
  },
};

// 검색 기능 시연
export const WithSearch: Story = {
  args: {
    placeholder: '검색하여 선택해주세요...',
    options: cityOptions,
    enableSearch: true,
    leadingIconType: 'search',
  },
  render: (args) => <ControlledDropdown {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'enableSearch=true로 설정하면 드롭다운 내에서 옵션을 검색할 수 있습니다.',
      },
    },
  },
};

// Interactive controlled examples
export const Interactive: Story = {
  args: {
    placeholder: '도시를 선택해주세요...',
    options: cityOptions,
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const InteractiveWithIcon: Story = {
  args: {
    placeholder: '위치를 선택해주세요...',
    options: cityOptions,
    leadingIconType: 'location-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

// 모든 기능을 포함한 종합 시연
export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          🚀 모든 기능 시연
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          Dropdown 컴포넌트의 모든 기능과 상태를 확인할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>기본 상태</h3>
          <ControlledDropdown placeholder="기본 드롭다운" options={cityOptions} />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>선택된 상태</h3>
          <ControlledDropdown placeholder="선택된 드롭다운" value="seoul" options={cityOptions} />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            Leading Icon 포함
          </h3>
          <ControlledDropdown
            placeholder="아이콘 포함"
            options={cityOptions}
            leadingIconType="location-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            검색 기능 활성화
          </h3>
          <ControlledDropdown
            placeholder="검색하여 선택..."
            options={cityOptions}
            enableSearch={true}
            leadingIconType="search"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            비활성화된 옵션 포함
          </h3>
          <ControlledDropdown
            placeholder="역할 선택..."
            options={roleOptions}
            leadingIconType="person-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            옵션 숨김 (hideOption)
          </h3>
          <ControlledDropdown
            placeholder="표시만 가능"
            value="seoul"
            options={cityOptions}
            hideOption={true}
            leadingIconType="location-filled"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>에러 상태</h3>
          <ControlledDropdown
            placeholder="에러 상태 드롭다운"
            options={categoryOptions}
            error={true}
            errorMessage="필수 항목입니다."
            leadingIconType="settings-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            비활성화 상태
          </h3>
          <ControlledDropdown
            placeholder="비활성화됨"
            value="seoul"
            options={cityOptions}
            disabled={true}
            leadingIconType="location-stroke"
          />
        </div>
      </div>
    </div>
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
          leadingIconType="location-stroke"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Search Enabled
        </h3>
        <ControlledDropdown
          placeholder="검색해서 선택해주세요..."
          options={cityOptions}
          enableSearch={true}
          leadingIconType="search"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Disabled Options
        </h3>
        <ControlledDropdown
          placeholder="역할을 선택해주세요..."
          options={roleOptions}
          leadingIconType="person-stroke"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Hidden Options (Display Only)
        </h3>
        <ControlledDropdown
          placeholder="표시만 가능한 드롭다운"
          value="seoul"
          options={cityOptions}
          hideOption={true}
          leadingIconType="location-filled"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Error State</h3>
        <ControlledDropdown
          placeholder="카테고리를 선택해주세요..."
          options={categoryOptions}
          error={true}
          errorMessage="카테고리를 선택해야 합니다."
          leadingIconType="settings-stroke"
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
      leadingIconType="location-stroke"
    />
  ),
};

// Width examples
export const WidthDefault: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        기본 너비 (320px)
      </h3>
      <ControlledDropdown placeholder="기본 너비" options={cityOptions} />
    </div>
  ),
};

export const WidthFill: Story = {
  render: () => (
    <div style={{ padding: '20px', width: '500px', border: '1px dashed #ccc' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        부모 컨테이너 100% (width="fill")
      </h3>
      <ControlledDropdown width="fill" placeholder="부모의 100% 너비" options={cityOptions} />
    </div>
  ),
};

export const WidthCustom: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        커스텀 너비 (400px)
      </h3>
      <ControlledDropdown width="400px" placeholder="커스텀 너비" options={cityOptions} />
    </div>
  ),
};

export const WidthShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          💎 Width 옵션 비교
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          다양한 너비 설정으로 레이아웃에 맞게 조정할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            기본값 (320px)
          </h3>
          <ControlledDropdown placeholder="기본 너비" options={cityOptions} />
        </div>

        <div style={{ width: '600px', border: '1px dashed #ddd', padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            부모 컨테이너 100% (width="fill")
          </h3>
          <ControlledDropdown width="fill" placeholder="부모의 100% 너비" options={cityOptions} />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            커스텀 너비 (500px)
          </h3>
          <ControlledDropdown width="500px" placeholder="커스텀 너비" options={cityOptions} />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            상대적 너비 (50%)
          </h3>
          <ControlledDropdown width="50%" placeholder="상대적 너비" options={cityOptions} />
        </div>
      </div>
    </div>
  ),
};

// Search functionality examples
export const WithoutSearch: Story = {
  args: {
    placeholder: '일반 드롭다운',
    options: cityOptions,
    enableSearch: false,
    leadingIconType: 'location-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

export const SearchLongList: Story = {
  render: () => (
    <ControlledDropdown
      placeholder="국가를 검색해주세요..."
      enableSearch={true}
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
        { value: 'sg', label: '싱가포르' },
        { value: 'th', label: '태국' },
        { value: 'vn', label: '베트남' },
        { value: 'ph', label: '필리핀' },
        { value: 'my', label: '말레이시아' },
      ]}
      leadingIconType="search"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          '많은 옵션이 있을 때 검색 기능을 사용하면 사용자가 원하는 옵션을 쉽게 찾을 수 있습니다.',
      },
    },
  },
};

export const SearchComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          🔍 검색 기능 비교
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          enableSearch props로 검색 기능을 활성화/비활성화할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            검색 활성화 (enableSearch=true)
          </h3>
          <ControlledDropdown
            placeholder="검색하여 선택해주세요..."
            options={cityOptions}
            enableSearch={true}
            leadingIconType="search"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            일반 드롭다운 (enableSearch=false)
          </h3>
          <ControlledDropdown
            placeholder="선택해주세요..."
            options={cityOptions}
            enableSearch={false}
            leadingIconType="location-stroke"
          />
        </div>
      </div>
    </div>
  ),
};

// hideOption 기능 상세 시연
export const HideOptionShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          👁️ hideOption 기능 시연
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          hideOption=true로 설정하면 드롭다운이 열리지 않고 디스플레이 목적으로만 사용할 수
          있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            일반 드롭다운 (클릭 가능)
          </h3>
          <ControlledDropdown
            placeholder="클릭해서 열기"
            value="seoul"
            options={cityOptions}
            hideOption={false}
            leadingIconType="location-stroke"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            옵션 숨김 (hideOption=true)
          </h3>
          <ControlledDropdown
            placeholder="클릭해도 열리지 않음"
            value="seoul"
            options={cityOptions}
            hideOption={true}
            leadingIconType="location-filled"
          />
        </div>
      </div>

      <div
        style={{
          marginTop: '16px',
          padding: '16px',
          backgroundColor: '#F8F9FA',
          borderRadius: '8px',
        }}
      >
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#25282D' }}>
          💡 사용 사례
        </h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#8D97A5', fontSize: '14px' }}>
          <li>선택된 값을 표시만 하고 변경하지 않을 때</li>
          <li>읽기 전용 상태로 정보를 보여줄 때</li>
          <li>폼 검토 단계에서 선택한 값을 확인할 때</li>
        </ul>
      </div>
    </div>
  ),
};

// Leading Icon comparison
export const LeadingIconComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          🎨 다양한 Leading Icon 타입
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          leadingIconType을 사용해서 다양한 아이콘을 적용할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            Stroke 타입 (location-stroke)
          </h3>
          <ControlledDropdown
            placeholder="위치를 선택해주세요..."
            options={cityOptions}
            leadingIconType="location-stroke"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', color: '#25282D' }}
          >
            Filled 타입 (location-filled)
          </h3>
          <ControlledDropdown
            placeholder="위치를 선택해주세요..."
            options={cityOptions}
            leadingIconType="location-filled"
          />
        </div>
      </div>
    </div>
  ),
};

export const IconTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          🎯 다양한 leadingIconType 예시
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          다양한 상황에 맞는 아이콘 타입들을 활용할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            검색 (search)
          </h3>
          <ControlledDropdown
            placeholder="검색어를 입력해주세요..."
            options={categoryOptions}
            leadingIconType="search"
            enableSearch={true}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            사용자 (person-stroke)
          </h3>
          <ControlledDropdown
            placeholder="사용자를 선택해주세요..."
            options={roleOptions}
            leadingIconType="person-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>홈 (home)</h3>
          <ControlledDropdown
            placeholder="홈 옵션을 선택해주세요..."
            options={cityOptions}
            leadingIconType="home"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            캘린더 (calendar)
          </h3>
          <ControlledDropdown
            placeholder="날짜를 선택해주세요..."
            options={[
              { value: 'today', label: '오늘' },
              { value: 'tomorrow', label: '내일' },
              { value: 'week', label: '이번 주' },
              { value: 'month', label: '이번 달' },
            ]}
            leadingIconType="calendar"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            메일 (mail-stroke)
          </h3>
          <ControlledDropdown
            placeholder="메일 유형을 선택해주세요..."
            options={[
              { value: 'inbox', label: '받은편지함' },
              { value: 'sent', label: '보낸편지함' },
              { value: 'draft', label: '임시보관함' },
              { value: 'spam', label: '스팸' },
            ]}
            leadingIconType="mail-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            설정 (settings-stroke)
          </h3>
          <ControlledDropdown
            placeholder="설정을 선택해주세요..."
            options={[
              { value: 'general', label: '일반 설정' },
              { value: 'privacy', label: '개인정보 설정' },
              { value: 'notification', label: '알림 설정' },
              { value: 'account', label: '계정 설정' },
            ]}
            leadingIconType="settings-stroke"
          />
        </div>
      </div>
    </div>
  ),
};

// 키보드 접근성 테스트
export const KeyboardAccessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          ⌨️ 키보드 접근성 테스트
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          키보드만으로도 모든 기능을 사용할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '16px', backgroundColor: '#F8F9FA', borderRadius: '8px' }}>
          <h4
            style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#25282D' }}
          >
            🔑 키보드 단축키
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#8D97A5', fontSize: '14px' }}>
            <li>
              <code>Tab</code>: 드롭다운에 포커스
            </li>
            <li>
              <code>Enter</code> 또는 <code>Space</code>: 드롭다운 열기/닫기
            </li>
            <li>
              <code>Escape</code>: 드롭다운 닫기
            </li>
            <li>
              <code>Arrow Down</code>: (검색 모드에서) 첫 번째 옵션에 호버
            </li>
            <li>
              <code>Enter</code>: (검색 모드에서) 첫 번째 필터된 옵션 선택
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            일반 드롭다운 - Tab으로 포커스하고 Enter로 열어보세요
          </h3>
          <ControlledDropdown
            placeholder="키보드로 조작해보세요..."
            options={cityOptions}
            leadingIconType="location-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            검색 드롭다운 - 열린 후 타이핑하고 Enter로 선택하세요
          </h3>
          <ControlledDropdown
            placeholder="검색해서 선택해보세요..."
            options={cityOptions}
            enableSearch={true}
            leadingIconType="search"
          />
        </div>
      </div>
    </div>
  ),
};

// 에러 상태 상세 시연
export const ErrorStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          ⚠️ 에러 상태 시연
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          다양한 에러 상황에서의 드롭다운 표시를 확인할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            필수 선택 에러
          </h3>
          <ControlledDropdown
            placeholder="카테고리를 선택해주세요..."
            options={categoryOptions}
            error={true}
            errorMessage="카테고리 선택은 필수입니다."
            leadingIconType="settings-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            유효하지 않은 선택 에러
          </h3>
          <ControlledDropdown
            placeholder="유효한 옵션을 선택해주세요..."
            options={roleOptions}
            error={true}
            errorMessage="선택한 옵션이 유효하지 않습니다."
            leadingIconType="person-stroke"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            권한 없음 에러
          </h3>
          <ControlledDropdown
            placeholder="접근 권한이 필요합니다..."
            options={[]}
            error={true}
            errorMessage="이 옵션에 접근할 권한이 없습니다."
            leadingIconType="settings-filled"
          />
        </div>
      </div>
    </div>
  ),
};

// 자동 스크롤 및 텍스트 선택 방지 기능 시연
export const AutoScrollAndUserSelect: Story = {
  render: () => {
    const longOptions: DropdownOption[] = [
      { value: 'option1', label: '첫 번째 옵션' },
      { value: 'option2', label: '두 번째 옵션' },
      { value: 'option3', label: '세 번째 옵션' },
      { value: 'option4', label: '네 번째 옵션' },
      { value: 'option5', label: '다섯 번째 옵션' },
      { value: 'option6', label: '여섯 번째 옵션' },
      { value: 'option7', label: '일곱 번째 옵션' },
      { value: 'option8', label: '여덟 번째 옵션' },
      { value: 'option9', label: '아홉 번째 옵션' },
      { value: 'option10', label: '열 번째 옵션' },
      { value: 'option11', label: '열한 번째 옵션' },
      { value: 'option12', label: '열두 번째 옵션' },
      { value: 'option13', label: '열세 번째 옵션' },
      { value: 'option14', label: '열네 번째 옵션' },
      { value: 'option15', label: '열다섯 번째 옵션' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
        <div>
          <h2
            style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}
          >
            📍 자동 스크롤 및 텍스트 선택 방지 기능
          </h2>
          <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
            선택된 값이 있을 때 드롭다운을 다시 열면 해당 위치로 자동 스크롤됩니다. 또한 검색 기능이
            비활성화된 경우 텍스트를 선택할 수 없습니다.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
              🎯 자동 스크롤 기능 - 중간 옵션이 미리 선택됨
            </h3>
            <p style={{ marginBottom: '12px', color: '#8D97A5', fontSize: '12px' }}>
              "여덟 번째 옵션"이 선택되어 있습니다. 드롭다운을 열어보면 해당 위치로 자동
              스크롤됩니다.
            </p>
            <ControlledDropdown
              placeholder="옵션을 선택해주세요..."
              options={longOptions}
              value="option8"
              enableSearch={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
              🔍 검색 기능 활성화 시 - 텍스트 선택 가능
            </h3>
            <p style={{ marginBottom: '12px', color: '#8D97A5', fontSize: '12px' }}>
              검색 기능이 활성화되어 있어 텍스트를 드래그해서 선택할 수 있습니다.
            </p>
            <ControlledDropdown
              placeholder="검색 가능 - 텍스트 선택도 가능"
              options={longOptions}
              value="option12"
              enableSearch={true}
              leadingIconType="search"
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
              🚫 검색 기능 비활성화 시 - 텍스트 선택 불가 (user-select: none)
            </h3>
            <p style={{ marginBottom: '12px', color: '#8D97A5', fontSize: '12px' }}>
              검색 기능이 비활성화되어 있어 텍스트를 드래그해도 선택되지 않습니다.
            </p>
            <ControlledDropdown
              placeholder="텍스트 선택 불가 - 드래그해보세요"
              options={longOptions}
              value="option5"
              enableSearch={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
              📋 옵션 숨김 모드 - 완전히 텍스트 선택 불가
            </h3>
            <p style={{ marginBottom: '12px', color: '#8D97A5', fontSize: '12px' }}>
              hideOption이 true여서 드롭다운도 열리지 않고 텍스트도 선택되지 않습니다.
            </p>
            <ControlledDropdown
              placeholder="디스플레이 전용 - 클릭해도 열리지 않음"
              options={longOptions}
              value="option10"
              hideOption={true}
            />
          </div>
        </div>

        <div style={{ padding: '16px', backgroundColor: '#F8F9FA', borderRadius: '8px' }}>
          <h4
            style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#25282D' }}
          >
            🔧 기술적 구현 내용
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#8D97A5', fontSize: '14px' }}>
            <li>선택된 옵션이 있을 때 드롭다운이 열리면 해당 옵션이 중앙에 오도록 자동 스크롤</li>
            <li>enableSearch가 false일 때 모든 텍스트에 user-select: none 적용</li>
            <li>hideOption이 true일 때도 user-select: none 적용</li>
            <li>검색 기능이 활성화된 경우에만 텍스트 선택 허용</li>
          </ul>
        </div>
      </div>
    );
  },
};
