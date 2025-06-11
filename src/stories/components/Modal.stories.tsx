import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components';
import React from 'react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma 디자인을 기반으로 구현된 모달 컴포넌트입니다. children을 통해 다양한 React 컴포넌트를 주입할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// CloseButton=True, Button=1, Description=True, Content=False
export const SingleButtonWithDescription = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=2, Description=True, Content=False
export const TwoButtonsWithDescription = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          모달 열기 (2개 버튼)
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=1, Description=False, Content=Image
export const SingleButtonWithImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          이미지 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        >
          <img
            src="https://via.placeholder.com/400x240"
            alt="예시 이미지"
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=1, Description=True, Content=Image
export const SingleButtonWithDescriptionAndImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          전체 기능 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        >
          <img
            src="https://via.placeholder.com/400x240"
            alt="예시 이미지"
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=2, Description=True, Content=Image
export const TwoButtonsWithDescriptionAndImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          완전한 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        >
          <img
            src="https://via.placeholder.com/400x240"
            alt="예시 이미지"
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 닫기 버튼 없는 모달
export const WithoutCloseButton = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          닫기 버튼 없는 모달
        </button>
        <Modal
          title="Modal Title h1"
          description="이 모달은 닫기 버튼이 없습니다. 버튼으로만 닫을 수 있습니다."
          showCloseButton={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: '취소',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// 커스텀 컴포넌트 예시
export const WithCustomComponent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const CustomComponent = () => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>커스텀 컴포넌트</h3>
        <p style={{ margin: '0 0 16px 0', color: '#6c757d' }}>
          이곳에는 어떤 React 컴포넌트든 올 수 있습니다.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span
            style={{
              padding: '4px 8px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            태그1
          </span>
          <span
            style={{
              padding: '4px 8px',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            태그2
          </span>
        </div>
      </div>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          커스텀 컴포넌트 모달
        </button>
        <Modal
          title="커스텀 컴포넌트 모달"
          description="children에 커스텀 컴포넌트를 주입한 예시입니다."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
        >
          <CustomComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 폼 컴포넌트 예시
export const WithFormComponent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const FormComponent = () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>이름</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              fontSize: '14px',
            }}
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>이메일</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              fontSize: '14px',
            }}
            placeholder="이메일을 입력하세요"
          />
        </div>
      </div>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          폼 모달 열기
        </button>
        <Modal
          title="사용자 정보 입력"
          description="아래 폼을 작성해주세요."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '저장',
            onClick: () => {
              console.log('저장된 데이터:', formData);
              setIsOpen(false);
            },
          }}
          secondaryButton={{
            text: '취소',
            onClick: () => setIsOpen(false),
          }}
        >
          <FormComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 비디오 컴포넌트 예시
export const WithVideoComponent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const VideoComponent = () => (
      <video width="100%" height="240" controls style={{ borderRadius: '8px' }}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          비디오 모달 열기
        </button>
        <Modal
          title="비디오 플레이어"
          description="children에 비디오를 주입한 예시입니다."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '닫기',
            onClick: () => setIsOpen(false),
          }}
        >
          <VideoComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 커스텀 높이와 스크롤바 표시 예시
export const WithCustomHeightAndScrollbar = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const LongContentComponent = () => (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>긴 콘텐츠 예시</h3>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 12px 0', lineHeight: '1.5' }}>
            이것은 {i + 1}번째 문단입니다. 이 콘텐츠는 설정된 최대 높이를 넘어가서 스크롤이
            필요합니다. contentMaxHeight prop을 통해 최대 높이를 조절할 수 있고, showScrollbar
            prop을 통해 스크롤바 표시 여부를 결정할 수 있습니다.
          </p>
        ))}
      </div>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          커스텀 높이 + 스크롤바 표시
        </button>
        <Modal
          title="커스텀 높이와 스크롤바"
          description="contentMaxHeight를 300px로 설정하고 스크롤바를 표시합니다."
          contentMaxHeight={300}
          showScrollbar={true}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: '취소',
            onClick: () => setIsOpen(false),
          }}
        >
          <LongContentComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 큰 높이 설정 예시
export const WithLargeContentHeight = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const MediumContentComponent = () => (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>중간 길이 콘텐츠</h3>
        {Array.from({ length: 15 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 12px 0', lineHeight: '1.5' }}>
            이것은 {i + 1}번째 문단입니다. contentMaxHeight를 800px로 설정한 예시입니다. 이 정도
            양의 콘텐츠는 스크롤 없이 모두 표시됩니다.
          </p>
        ))}
      </div>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          큰 높이 설정 (800px)
        </button>
        <Modal
          title="큰 높이 설정"
          description="contentMaxHeight를 800px로 설정한 예시입니다."
          contentMaxHeight={800}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
        >
          <MediumContentComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;

// 스크롤바 숨김 예시 (기본값)
export const WithHiddenScrollbar = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const LongContentComponent = () => (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>긴 콘텐츠 (스크롤바 숨김)</h3>
        {Array.from({ length: 25 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 12px 0', lineHeight: '1.5' }}>
            이것은 {i + 1}번째 문단입니다. showScrollbar가 false(기본값)로 설정되어 스크롤바가
            숨겨져 있지만 마우스 휠이나 터치로 스크롤할 수 있습니다.
          </p>
        ))}
      </div>
    );

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          스크롤바 숨김 (기본값)
        </button>
        <Modal
          title="스크롤바 숨김"
          description="showScrollbar가 false(기본값)로 설정된 예시입니다."
          showScrollbar={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
        >
          <LongContentComponent />
        </Modal>
      </div>
    );
  },
  args: {},
} as any;
