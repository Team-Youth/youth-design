import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../tokens/typography';

interface TypeSampleProps {
  label: string;
  style: React.CSSProperties;
  description?: string;
  sampleText?: string;
}

const TypeSample: React.FC<TypeSampleProps> = ({
  label,
  style,
  description,
  sampleText = '청년 의료 플랫폼을 위한 디자인 시스템',
}) => {
  return (
    <div
      style={{
        marginBottom: '32px',
        padding: '20px',
        border: '1px solid #E8EAED',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#7248D9',
          marginBottom: '8px',
          fontFamily: 'Pretendard, sans-serif',
        }}
      >
        {label}
      </div>

      <div style={style}>{sampleText}</div>

      {description && (
        <div
          style={{
            fontSize: '12px',
            color: '#8D97A5',
            marginTop: '12px',
            lineHeight: '1.4',
            fontFamily: 'Pretendard, sans-serif',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
};

interface FontWeightSampleProps {
  weight: number;
  name: string;
}

const FontWeightSample: React.FC<FontWeightSampleProps> = ({ weight, name }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      padding: '12px',
      border: '1px solid #E8EAED',
      borderRadius: '6px',
    }}
  >
    <div
      style={{
        fontFamily: 'Pretendard, sans-serif',
        fontSize: '16px',
        fontWeight: weight,
        color: '#25282D',
        minWidth: '200px',
      }}
    >
      Font Weight {weight}
    </div>
    <div
      style={{
        fontFamily: 'Pretendard, sans-serif',
        fontSize: '12px',
        color: '#8D97A5',
        marginLeft: '16px',
      }}
    >
      {name} - {weight}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# 타이포그래피 시스템 (Typography System)

청년 의료 플랫폼을 위한 체계적인 타이포그래피 시스템입니다.

## 구성
- **Font Family**: Pretendard (한국형 웹폰트)
- **Text Styles**: Display, Heading, Body, Caption 스타일
- **Font Weights**: 4단계 굵기 (Regular, Medium, Semibold, Bold)
- **Responsive Design**: rem 단위 기반 확장성

## 사용 가이드
- **Display**: 페이지 제목, 큰 타이틀 영역 강조
- **Heading**: 섹션 제목, 카드 헤더, 정보성 타이틀
- **Body**: 본문 텍스트, 일반적인 텍스트 콘텐츠
- **Caption**: 부가 정보, 설명 텍스트
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextStyles: Story = {
  render: () => (
    <div>
      <TypeSample
        label="Display 1"
        style={typography.textStyles.display1}
        description="주목도를 높이고 큰 타이틀 영역 강조에 사용합니다. 대화 UI에서 서브타이틀, 페이지 제목 등 섹션 나눔에 많이 사용합니다."
      />

      <TypeSample
        label="Display 2"
        style={typography.textStyles.display2}
        description="중간 크기 타이틀에 사용됩니다. 카드 헤더, 모달 제목, 챕터 제목 등에 사용됩니다."
      />

      <TypeSample
        label="Heading 1"
        style={typography.textStyles.heading1}
        description="정보성 카드 타이틀에 주로 사용됩니다. 사용자 입력 폼의 필드명에 사용됩니다."
      />

      <TypeSample
        label="Heading 2"
        style={typography.textStyles.heading2}
        description="섹션 구분 타이틀 등에 사용됩니다. 사용자 입력 폼의 라벨에 사용됩니다."
      />

      <TypeSample
        label="Heading 3"
        style={typography.textStyles.heading3}
        description="소제목 등에 사용됩니다. 문단 내 강조 텍스트로 사용됩니다."
      />

      <TypeSample
        label="Heading 4"
        style={typography.textStyles.heading4}
        description="리스트 아이템, 버튼 텍스트 등에 사용됩니다. 태그, 카테고리, 배지 텍스트 등에 사용됩니다."
      />

      <TypeSample
        label="Heading 5"
        style={typography.textStyles.heading5}
        description="부가 정보, 캡션 등에 사용됩니다."
      />

      <TypeSample
        label="Body 1"
        style={typography.textStyles.body1}
        description="주요 본문 텍스트에 사용됩니다. 개행 없는 문단에서 쉽게 읽히도록 설계되었습니다."
        sampleText="의료 서비스의 접근성을 높이고 청년들이 건강한 삶을 영위할 수 있도록 돕는 것이 우리의 목표입니다. 전문적인 의료진과 함께 체계적인 건강 관리 서비스를 제공합니다."
      />

      <TypeSample
        label="Body 2"
        style={typography.textStyles.body2}
        description="보조 본문 텍스트에 사용됩니다."
        sampleText="온라인 진료 예약부터 건강 상담까지, 필요한 모든 의료 서비스를 한 곳에서 이용하실 수 있습니다."
      />

      <TypeSample
        label="Body 3"
        style={typography.textStyles.body3}
        description="본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장됩니다."
        sampleText="추가 정보나 세부 사항을 표시할 때 사용하는 작은 크기의 본문 텍스트입니다."
      />

      <TypeSample
        label="Caption"
        style={typography.textStyles.caption}
        description="보조 정보나 컴포넌트 레벨에서 사용됩니다."
        sampleText="* 진료 예약은 최소 24시간 전에 해주시기 바랍니다."
      />
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <h2
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '20px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: '20px',
        }}
      >
        Font Weights
      </h2>

      <FontWeightSample weight={typography.fontWeight.regular} name="Regular" />
      <FontWeightSample weight={typography.fontWeight.medium} name="Medium" />
      <FontWeightSample weight={typography.fontWeight.semibold} name="Semibold" />
      <FontWeightSample weight={typography.fontWeight.bold} name="Bold" />
    </div>
  ),
};

export const FontSizes: Story = {
  render: () => (
    <div>
      <h2
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '20px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: '20px',
        }}
      >
        Font Sizes
      </h2>

      {Object.entries(typography.fontSize).map(([key, value]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            padding: '12px',
            border: '1px solid #E8EAED',
            borderRadius: '6px',
          }}
        >
          <div
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: value,
              color: '#25282D',
              minWidth: '300px',
            }}
          >
            Font Size {key.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '12px',
              color: '#8D97A5',
              marginLeft: '16px',
            }}
          >
            {value} ({Math.round(parseFloat(value) * 16)}px)
          </div>
        </div>
      ))}
    </div>
  ),
};

export const MedicalContent: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={typography.textStyles.display1}>청년 건강 플랫폼</div>

      <div style={{ marginTop: '24px' }}>
        <div style={typography.textStyles.heading2}>진료 예약 안내</div>
        <div
          style={{
            ...typography.textStyles.body1,
            color: '#505862',
            marginTop: '12px',
            lineHeight: '1.6',
          }}
        >
          온라인으로 간편하게 진료를 예약하고, 전문의와 상담받으세요. 24시간 언제든지 예약이
          가능하며, 예약 확인은 문자메시지로 발송됩니다.
        </div>
      </div>

      <div
        style={{
          marginTop: '32px',
          padding: '20px',
          backgroundColor: '#F8F4FE',
          borderRadius: '12px',
        }}
      >
        <div style={typography.textStyles.heading3}>이용 안내</div>

        <div style={{ marginTop: '16px' }}>
          <div style={typography.textStyles.heading5}>진료 시간</div>
          <div
            style={{
              ...typography.textStyles.body2,
              color: '#505862',
              marginTop: '4px',
            }}
          >
            평일 09:00 - 18:00 / 토요일 09:00 - 13:00
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <div style={typography.textStyles.heading5}>예약 취소</div>
          <div
            style={{
              ...typography.textStyles.caption,
              color: '#8D97A5',
              marginTop: '4px',
            }}
          >
            * 예약 취소는 진료 시간 2시간 전까지만 가능합니다.
          </div>
          <div
            style={{
              ...typography.textStyles.body3,
              color: '#8D97A5',
              marginTop: '8px',
            }}
          >
            취소 수수료는 발생하지 않으며, 온라인 또는 전화로 취소 가능합니다.
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#FFF0F0',
          border: '1px solid #FFE0E0',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            ...typography.textStyles.heading5,
            color: '#FF2E2E',
          }}
        >
          응급상황 안내
        </div>
        <div
          style={{
            ...typography.textStyles.caption,
            color: '#FF2E2E',
            marginTop: '4px',
          }}
        >
          응급 상황 시에는 즉시 119에 신고하시기 바랍니다.
        </div>
      </div>
    </div>
  ),
};
