import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DropdownOption, Dropdown } from '../../components';

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
      },
    },
    enableSearch: {
      control: { type: 'boolean' },
      description: '검색 기능을 활성화합니다. true일 때 드롭다운 내에서 옵션을 검색할 수 있습니다.',
      defaultValue: false,
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

export const WithLeadingIconType: Story = {
  args: {
    placeholder: '위치를 선택해주세요...',
    options: cityOptions,
    leadingIconType: 'location-stroke',
  },
  render: (args) => <ControlledDropdown {...args} />,
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
          With Disabled Options
        </h3>
        <ControlledDropdown
          placeholder="역할을 선택해주세요..."
          options={roleOptions}
          leadingIconType="person-stroke"
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
export const WithSearch: Story = {
  args: {
    placeholder: '검색하여 선택해주세요...',
    options: cityOptions,
    enableSearch: true,
    leadingIconType: 'search',
  },
  render: (args) => <ControlledDropdown {...args} />,
};

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
