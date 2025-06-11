import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DropdownOption, Dropdown, TextField, TextArea } from '../../components';
import React from 'react';

// Icon components
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

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 3.33334 1.66667 4.08334 1.66667 5.00001V15C1.66667 15.9167 2.41667 16.6667 3.33333 16.6667Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 5L10 10.8333L1.66667 5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M18.3083 14.175v2.5c0.0011 0.5328-0.1956 1.0481-0.5477 1.4334C17.4085 18.5937 16.9064 18.8323 16.3749 18.8333C13.7808 18.6103 11.3022 17.6769 9.19166 16.125C7.24145 14.7194 5.6139 12.8694 4.44999 10.725C2.89166 8.60273 1.95832 6.10834 1.74166 3.50001C1.74266 2.97262 1.98178 2.47238 2.36491 2.12635C2.74804 1.78032 3.25813 1.61656 3.78333 1.66667H6.28333C7.11667 1.66667 7.74999 2.36667 7.74999 3.25C7.74999 4.5 8.08333 5.66667 8.58333 6.75C8.74999 7.08333 8.66666 7.5 8.33333 7.83334L7.16666 8.91667C8.51666 11.3667 10.8 13.65 13.25 15L14.3333 13.8333C14.6667 13.5 15.0833 13.4167 15.4167 13.5833C16.5 14.0833 17.6667 14.4167 18.9167 14.4167C19.8 14.4167 20.5 15.05 20.5 15.8833V18.3833Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
];

const categoryOptions: DropdownOption[] = [
  { value: 'general', label: '일반 문의' },
  { value: 'technical', label: '기술 지원' },
  { value: 'billing', label: '결제/환불' },
  { value: 'partnership', label: '파트너십' },
  { value: 'other', label: '기타' },
];

const priorityOptions: DropdownOption[] = [
  { value: 'high', label: '높음' },
  { value: 'medium', label: '보통' },
  { value: 'low', label: '낮음' },
];

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    priority: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.category) {
      newErrors.category = '문의 유형을 선택해주세요.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.length < 10) {
      newErrors.message = '최소 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('폼이 성공적으로 제출되었습니다!');
    }
  };

  return (
    <div style={{ width: '500px', padding: '20px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>문의하기</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              이름 *
            </label>
            <TextField
              placeholder="이름을 입력해주세요"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              leadingIcon={<UserIcon />}
              error={!!errors.name}
              errorMessage={errors.name}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              이메일 *
            </label>
            <TextField
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              leadingIcon={<EmailIcon />}
              error={!!errors.email}
              errorMessage={errors.email}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              전화번호
            </label>
            <TextField
              type="tel"
              placeholder="010-0000-0000"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              leadingIcon={<PhoneIcon />}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              지역
            </label>
            <Dropdown
              placeholder="지역을 선택해주세요"
              options={cityOptions}
              value={formData.city}
              onChange={(value) => setFormData({ ...formData, city: value })}
              leadingIconType="location-stroke"
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              문의 유형 *
            </label>
            <Dropdown
              placeholder="문의 유형을 선택해주세요"
              options={categoryOptions}
              value={formData.category}
              onChange={(value) => setFormData({ ...formData, category: value })}
              leadingIconType="settings-stroke"
              error={!!errors.category}
              errorMessage={errors.category}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label
              style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
            >
              우선순위
            </label>
            <Dropdown
              placeholder="우선순위를 선택해주세요"
              options={priorityOptions}
              value={formData.priority}
              onChange={(value) => setFormData({ ...formData, priority: value })}
            />
          </div>
        </div>

        <div>
          <label
            style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
          >
            메시지 *
          </label>
          <TextArea
            placeholder="문의 내용을 자세히 작성해주세요..."
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            showCharacterCounter={true}
            maxLength={1000}
            rows={6}
            error={!!errors.message}
            errorMessage={errors.message}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            padding: '12px 24px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: '8px',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5A38B8')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#7248D9')}
        >
          문의 보내기
        </button>
      </div>
    </div>
  );
};

// User Profile Form Component
const UserProfileForm = () => {
  const [profile, setProfile] = useState({
    username: 'johndoe',
    email: 'john@example.com',
    bio: '안녕하세요! 저는 프론트엔드 개발자입니다.\n\n새로운 기술을 배우는 것을 좋아하고, 사용자 경험을 개선하는 일에 관심이 많습니다.',
    location: 'seoul',
  });

  return (
    <div style={{ width: '400px', padding: '20px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>프로필 편집</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
          >
            사용자명
          </label>
          <TextField
            placeholder="사용자명을 입력해주세요"
            value={profile.username}
            onChange={(value) => setProfile({ ...profile, username: value })}
            leadingIcon={<UserIcon />}
          />
        </div>

        <div>
          <label
            style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
          >
            이메일
          </label>
          <TextField
            type="email"
            placeholder="이메일을 입력해주세요"
            value={profile.email}
            onChange={(value) => setProfile({ ...profile, email: value })}
            leadingIcon={<EmailIcon />}
          />
        </div>

        <div>
          <label
            style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
          >
            지역
          </label>
          <Dropdown
            placeholder="지역을 선택해주세요"
            options={cityOptions}
            value={profile.location}
            onChange={(value) => setProfile({ ...profile, location: value })}
            leadingIconType="location-stroke"
          />
        </div>

        <div>
          <label
            style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}
          >
            자기소개
          </label>
          <TextArea
            placeholder="자신을 소개해주세요..."
            value={profile.bio}
            onChange={(value) => setProfile({ ...profile, bio: value })}
            showCharacterCounter={true}
            maxLength={500}
            rows={5}
          />
        </div>

        <button
          style={{
            padding: '12px 24px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: '8px',
          }}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/Complete Examples',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
입력 컴포넌트들의 종합적인 사용 예시입니다.

이 스토리는 TextField, Dropdown, TextArea 컴포넌트들이 실제 폼에서 어떻게 함께 사용되는지 보여줍니다.

## 포함된 컴포넌트
- **TextField**: 텍스트 입력 필드
- **Dropdown**: 선택형 입력 필드  
- **TextArea**: 다중 라인 텍스트 입력 필드

## 사용 사례
- 연락처 양식
- 사용자 프로필 편집
- 피드백 양식
- 설문조사
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Component overview
export const ComponentOverview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>TextField</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TextField placeholder="기본 텍스트 필드" />
          <TextField placeholder="이메일 입력" type="email" leadingIcon={<EmailIcon />} />
          <TextField placeholder="에러 상태" error={true} errorMessage="필수 입력 항목입니다." />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Dropdown</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Dropdown placeholder="기본 드롭다운" options={cityOptions} />
          <Dropdown
            placeholder="아이콘이 있는 드롭다운"
            options={categoryOptions}
            leadingIconType="settings-stroke"
          />
          <Dropdown
            placeholder="에러 상태"
            options={priorityOptions}
            error={true}
            errorMessage="옵션을 선택해주세요."
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>TextArea</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TextArea placeholder="기본 텍스트 에어리어" rows={3} />
          <TextArea
            placeholder="문자 수 카운터"
            showCharacterCounter={true}
            maxLength={200}
            rows={4}
          />
          <TextArea
            placeholder="에러 상태"
            value="짧은 텍스트"
            error={true}
            errorMessage="최소 20자 이상 입력해주세요."
            showCharacterCounter={true}
            maxLength={500}
            rows={3}
          />
        </div>
      </div>
    </div>
  ),
};

// Contact form
export const ContactFormExample: Story = {
  render: () => <ContactForm />,
  parameters: {
    docs: {
      description: {
        story: '실제 연락처 양식 예시입니다. 유효성 검사와 에러 처리가 포함되어 있습니다.',
      },
    },
  },
};

// User profile form
export const UserProfileExample: Story = {
  render: () => <UserProfileForm />,
  parameters: {
    docs: {
      description: {
        story:
          '사용자 프로필 편집 폼 예시입니다. 기존 데이터가 미리 채워져 있는 상태를 보여줍니다.',
      },
    },
  },
};

// Side by side comparison
export const SideBySideComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>정상 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField placeholder="이름을 입력해주세요" leadingIcon={<UserIcon />} />
          <Dropdown
            placeholder="지역을 선택해주세요"
            options={cityOptions}
            leadingIconType="location-stroke"
          />
          <TextArea
            placeholder="메시지를 입력해주세요"
            showCharacterCounter={true}
            maxLength={300}
            rows={4}
          />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>에러 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            placeholder="이름을 입력해주세요"
            leadingIcon={<UserIcon />}
            error={true}
            errorMessage="이름은 필수 입력 항목입니다."
          />
          <Dropdown
            placeholder="지역을 선택해주세요"
            options={cityOptions}
            leadingIconType="location-stroke"
            error={true}
            errorMessage="지역을 선택해주세요."
          />
          <TextArea
            placeholder="메시지를 입력해주세요"
            value="짧음"
            showCharacterCounter={true}
            maxLength={300}
            rows={4}
            error={true}
            errorMessage="최소 10자 이상 입력해주세요."
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '정상 상태와 에러 상태를 나란히 비교해볼 수 있는 예시입니다.',
      },
    },
  },
};
