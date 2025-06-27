import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown, DropdownOption } from '../../components/dropdown/Dropdown';
import { Icon } from '../../components/icon';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '드롭다운 컴포넌트입니다. 다양한 옵션을 선택할 수 있으며, 검색, 무한스크롤, 커스텀 컨텐츠 등의 기능을 지원합니다.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: '드롭다운 플레이스홀더 텍스트',
    },
    value: {
      control: 'text',
      description: '선택된 값',
    },
    options: {
      control: 'object',
      description: '옵션 리스트',
    },
    onChange: {
      action: 'changed',
      description: '값 변경 시 호출되는 콜백',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    className: {
      control: 'text',
      description: '커스텀 클래스명',
    },
    leadingIconType: {
      control: 'select',
      options: ['home', 'search', 'check', 'close', 'arrow-right', 'arrow-left'],
      description: 'Leading 아이콘 타입',
    },
    size: {
      control: 'select',
      options: ['l', 'm'],
      description: '크기 설정',
    },
    width: {
      control: 'text',
      description: '너비 설정 (fill 또는 px 값)',
    },
    enableSearch: {
      control: 'boolean',
      description: '검색 기능 활성화 여부',
    },
    onSearchChange: {
      action: 'search-changed',
      description: '검색 텍스트 변경 콜백',
    },
    hideOption: {
      control: 'boolean',
      description: '모든 옵션 숨김 여부 (드롭다운 자체를 열지 않음)',
    },
    populatedDisabled: {
      control: 'boolean',
      description: 'populated disabled 기능 활성화 여부 (옵션이 1개일 때 자동 선택 및 비활성화)',
    },
    customContentMaxHeight: {
      control: 'number',
      description: '커스텀 컨텐츠 사용 시 최대 높이',
    },
    isOpen: {
      control: 'boolean',
      description: '외부에서 드롭다운 열림 상태 제어',
    },
    onOpenChange: {
      action: 'open-changed',
      description: '드롭다운 열림 상태 변경 콜백',
    },
    hasNextPage: {
      control: 'boolean',
      description: '무한스크롤: 다음 페이지가 있는지 여부',
    },
    isLoadingMore: {
      control: 'boolean',
      description: '무한스크롤: 로딩 중인지 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// 기본 옵션 데이터
const basicOptions: DropdownOption[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
];

const fruitOptions: DropdownOption[] = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
  { value: 'grape', label: '포도' },
  { value: 'strawberry', label: '딸기' },
  { value: 'kiwi', label: '키위' },
  { value: 'mango', label: '망고' },
  { value: 'pineapple', label: '파인애플' },
];

const memberOptions: DropdownOption[] = [
  { value: 'member1', label: '기회원' },
  { value: 'member2', label: '김회원' },
  { value: 'member3', label: '박회원' },
  { value: 'member4', label: '이회원' },
  { value: 'member5', label: '최회원' },
];

const mixedOptions: DropdownOption[] = [
  { value: 'enabled1', label: '활성화된 옵션 1' },
  { value: 'disabled1', label: '비활성화된 옵션 1', disabled: true },
  { value: 'enabled2', label: '활성화된 옵션 2' },
  { value: 'disabled2', label: '비활성화된 옵션 2', disabled: true },
  { value: 'enabled3', label: '활성화된 옵션 3' },
];

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '옵션을 선택해주세요',
    options: basicOptions,
    onChange: action('onChange'),
  },
};

// 선택된 값이 있는 상태
export const WithSelectedValue: Story = {
  args: {
    placeholder: '옵션을 선택해주세요',
    value: 'option2',
    options: basicOptions,
    onChange: action('onChange'),
  },
};

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Large (기본)</h3>
        <Dropdown
          placeholder="Large 사이즈"
          size="l"
          options={basicOptions}
          onChange={action('onChange-large')}
        />
      </div>
      <div>
        <h3>Medium</h3>
        <Dropdown
          placeholder="Medium 사이즈"
          size="m"
          options={basicOptions}
          onChange={action('onChange-medium')}
        />
      </div>
    </div>
  ),
};

// 너비 변형
export const Widths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Fill (부모 너비에 맞춤)</h3>
        <div style={{ width: '500px', border: '1px dashed #ccc', padding: '8px' }}>
          <Dropdown
            placeholder="Fill 너비"
            width="fill"
            options={basicOptions}
            onChange={action('onChange-fill')}
          />
        </div>
      </div>
      <div>
        <h3>고정 너비 (200px)</h3>
        <Dropdown
          placeholder="200px 너비"
          width="200px"
          options={basicOptions}
          onChange={action('onChange-200px')}
        />
      </div>
      <div>
        <h3>기본 너비 (335px)</h3>
        <Dropdown
          placeholder="기본 너비"
          options={basicOptions}
          onChange={action('onChange-default')}
        />
      </div>
    </div>
  ),
};

// Leading 아이콘
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Dropdown
        placeholder="사용자 선택"
        leadingIconType="home"
        options={memberOptions}
        onChange={action('onChange-user')}
      />
      <Dropdown
        placeholder="검색 옵션"
        leadingIconType="search"
        options={fruitOptions}
        onChange={action('onChange-search')}
      />
      <Dropdown
        placeholder="설정 메뉴"
        leadingIconType="check"
        options={basicOptions}
        onChange={action('onChange-setting')}
      />
    </div>
  ),
};

// 상태 변형
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>일반 상태</h3>
        <Dropdown
          placeholder="일반 상태"
          options={basicOptions}
          onChange={action('onChange-normal')}
        />
      </div>
      <div>
        <h3>비활성화 상태</h3>
        <Dropdown
          placeholder="비활성화 상태"
          disabled
          options={basicOptions}
          onChange={action('onChange-disabled')}
        />
      </div>
      <div>
        <h3>에러 상태</h3>
        <Dropdown
          placeholder="에러 상태"
          error
          errorMessage="필수 항목입니다"
          options={basicOptions}
          onChange={action('onChange-error')}
        />
      </div>
    </div>
  ),
};

// 검색 기능
export const WithSearch: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3>검색 기능 활성화</h3>
          <Dropdown
            placeholder="회원을 검색해보세요"
            value={value}
            options={memberOptions}
            enableSearch
            onChange={(newValue) => {
              setValue(newValue);
              action('onChange-search')(newValue);
            }}
            onSearchChange={(searchText) => {
              setSearchValue(searchText);
              action('onSearchChange')(searchText);
            }}
          />
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
            선택된 값: {value || '없음'} | 검색어: {searchValue || '없음'}
          </p>
        </div>
      </div>
    );
  },
};

// 혼합 옵션 (활성화/비활성화)
export const MixedOptions: Story = {
  args: {
    placeholder: '혼합 옵션 선택',
    options: mixedOptions,
    onChange: action('onChange'),
  },
};

// Populated Disabled
export const PopulatedDisabled: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    const singleOption = [{ value: 'only', label: '유일한 옵션' }];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3>Populated Disabled 활성화</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
            populatedDisabled=true일 때, 옵션이 1개만 있으면 자동으로 선택되고 비활성화됩니다
          </p>
          <Dropdown
            placeholder="자동 선택됨"
            value={value1}
            options={singleOption}
            populatedDisabled={true}
            onChange={(newValue) => {
              setValue1(newValue);
              action('onChange-populated')(newValue);
            }}
          />
        </div>
        <div>
          <h3>Populated Disabled 비활성화 (기본)</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
            populatedDisabled=false일 때, 옵션이 1개만 있어도 사용자가 직접 선택해야 합니다
          </p>
          <Dropdown
            placeholder="직접 선택 필요"
            value={value2}
            options={singleOption}
            populatedDisabled={false}
            onChange={(newValue) => {
              setValue2(newValue);
              action('onChange-no-populated')(newValue);
            }}
          />
        </div>
      </div>
    );
  },
};

// 외부 제어
export const ExternalControl: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            {isOpen ? '드롭다운 닫기' : '드롭다운 열기'}
          </button>
          <button
            onClick={() => setValue('')}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            선택 초기화
          </button>
        </div>
        <Dropdown
          placeholder="외부에서 제어되는 드롭다운"
          value={value}
          options={fruitOptions}
          isOpen={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
            action('onOpenChange')(open);
          }}
          onChange={(newValue) => {
            setValue(newValue);
            action('onChange-external')(newValue);
          }}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          열림 상태: {isOpen ? '열림' : '닫힘'} | 선택된 값: {value || '없음'}
        </p>
      </div>
    );
  },
};

// 커스텀 컨텐츠
export const CustomContent: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    const customContent = (
      <div
        style={{
          background: 'white',
          border: '1px solid #D6D6D6',
          borderRadius: '8px',
          boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.06)',
          padding: '16px',
          minWidth: '300px',
        }}
      >
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
          커스텀 선택 메뉴
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {fruitOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => setValue(option.value)}
              style={{
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: value === option.value ? '#F8F4FE' : 'transparent',
                color: value === option.value ? '#7248D9' : '#25282D',
                border: '1px solid transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (value !== option.value) {
                  e.currentTarget.style.background = '#F3F5F6';
                }
              }}
              onMouseLeave={(e) => {
                if (value !== option.value) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <Icon
                type="check"
                size={16}
                color={value === option.value ? '#7248D9' : 'transparent'}
              />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div>
        <h3>커스텀 컨텐츠가 있는 드롭다운</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          기본 옵션 리스트 대신 커스텀 컨텐츠를 렌더링할 수 있습니다
        </p>
        <Dropdown
          placeholder="커스텀 컨텐츠 선택"
          value={value}
          customContent={customContent}
          onChange={(newValue) => {
            setValue(newValue);
            action('onChange-custom')(newValue);
          }}
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          선택된 값: {value ? fruitOptions.find((opt) => opt.value === value)?.label : '없음'}
        </p>
      </div>
    );
  },
};

// 무한스크롤
export const InfiniteScroll: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    const [options, setOptions] = useState<DropdownOption[]>(
      Array.from({ length: 20 }, (_, i) => ({
        value: `item-${i + 1}`,
        label: `아이템 ${i + 1}`,
      })),
    );
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => {
      if (isLoading) return;

      setIsLoading(true);

      // 실제로는 API 호출
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, i) => ({
          value: `item-${options.length + i + 1}`,
          label: `아이템 ${options.length + i + 1}`,
        }));

        setOptions((prev) => [...prev, ...newItems]);
        setIsLoading(false);

        // 50개 이상이면 더 이상 로드하지 않음
        if (options.length + newItems.length >= 50) {
          setHasNextPage(false);
        }
      }, 1000);
    };

    return (
      <div>
        <h3>무한스크롤 기능</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          스크롤을 아래로 내리면 더 많은 옵션이 로드됩니다 (총 {options.length}개 로드됨)
        </p>
        <Dropdown
          placeholder="무한스크롤 옵션"
          value={value}
          options={options}
          onLoadMore={handleLoadMore}
          hasNextPage={hasNextPage}
          isLoadingMore={isLoading}
          onChange={(newValue) => {
            setValue(newValue);
            action('onChange-infinite')(newValue);
          }}
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          선택된 값: {value || '없음'}
        </p>
      </div>
    );
  },
};

// Hide Option
export const HideOption: Story = {
  args: {
    placeholder: '클릭해도 드롭다운이 열리지 않습니다',
    hideOption: true,
    options: basicOptions,
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'hideOption이 true일 때는 드롭다운이 열리지 않습니다. 입력 필드처럼 사용할 수 있습니다.',
      },
    },
  },
};

// 검색 결과 없음
export const NoSearchResults: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    return (
      <div>
        <h3>검색 결과 없음 상태</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          "xyz"와 같은 존재하지 않는 키워드로 검색해보세요
        </p>
        <Dropdown
          placeholder="검색해보세요"
          value={value}
          options={fruitOptions}
          enableSearch
          onChange={(newValue) => {
            setValue(newValue);
            action('onChange-no-results')(newValue);
          }}
          onSearchChange={action('onSearchChange-no-results')}
        />
      </div>
    );
  },
};

// 다양한 시나리오 통합
export const AllFeatures: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple');

    return (
      <div>
        <h3>모든 기능이 포함된 드롭다운</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          검색, Leading 아이콘, 에러 상태, 선택된 값 등이 모두 포함된 예시입니다
        </p>
        <Dropdown
          placeholder="과일을 선택하거나 검색하세요"
          value={value}
          options={fruitOptions}
          leadingIconType="search"
          enableSearch
          size="l"
          width="400px"
          onChange={(newValue) => {
            setValue(newValue);
            action('onChange-all-features')(newValue);
          }}
          onSearchChange={action('onSearchChange-all-features')}
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          선택된 값: {value ? fruitOptions.find((opt) => opt.value === value)?.label : '없음'}
        </p>
      </div>
    );
  },
};
