import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { radius, shadows, borders } from '../tokens';

interface TokenSampleProps {
  name: string;
  value: string;
  style: React.CSSProperties;
  description?: string;
}

const TokenSample: React.FC<TokenSampleProps> = ({ name, value, style, description }) => (
  <div
    style={{
      marginBottom: '24px',
      padding: '20px',
      border: '1px solid #E8EAED',
      borderRadius: '8px',
    }}
  >
    <div
      style={{
        fontFamily: 'Pretendard, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        color: '#25282D',
        marginBottom: '12px',
      }}
    >
      {name} - {value}
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '12px' }}>
      <div
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: '#F8F4FE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#7248D9',
          ...style,
        }}
      >
        Sample
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '12px',
            color: '#8D97A5',
            marginBottom: '4px',
          }}
        >
          CSS:{' '}
          {Object.entries(style)
            .map(([key, val]) => `${key}: ${val}`)
            .join('; ')}
        </div>
        {description && (
          <div
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '11px',
              color: '#505862',
              fontStyle: 'italic',
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  </div>
);

const CombinedExample: React.FC = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '24px',
      backgroundColor: '#F3F5F6',
      borderRadius: '12px',
    }}
  >
    <div
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: radius.xs,
        border: `${borders.border.s} solid #E8EAED`,
      }}
    >
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: '8px',
        }}
      >
        기본 카드
      </div>
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#505862',
        }}
      >
        radius-xs + border-s
      </div>
    </div>

    <div
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: radius.s,
        boxShadow: shadows.m,
      }}
    >
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: '8px',
        }}
      >
        그림자 카드
      </div>
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#505862',
        }}
      >
        radius-s + shadow-m
      </div>
    </div>

    <div
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: radius.l,
        border: `${borders.border.m} solid #7248D9`,
        boxShadow: shadows.s,
      }}
    >
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: '8px',
        }}
      >
        강조 카드
      </div>
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#505862',
        }}
      >
        radius-l + border-m + shadow-s
      </div>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Border, Radius & Shadow',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# 테두리, 반지름, 그림자 시스템

UI 요소의 시각적 계층과 스타일을 결정하는 핵심 토큰들입니다.

## Border (테두리)
- **3단계 두께**: 1px, 1.5px, 2px
- **구분감과 강조**: 요소 간 명확한 구분과 시각적 계층 형성

## Radius (둥근 모서리)  
- **6단계 값**: 4px부터 50%까지
- **부드러운 경험**: 컴포넌트 유형에 따른 적절한 둥근 효과

## Shadow (그림자)
- **3단계 깊이**: 작은 요소부터 대형 모달까지
- **Elevation 표현**: UI 요소의 높이와 중요도 시각화
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Borders: Story = {
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
        Border Styles
      </h2>

      <TokenSample
        name="border-s"
        value={borders.border.s}
        style={{ border: `${borders.border.s} solid #7248D9` }}
        description="UI 요소의 기본적인 구분감을 제공할 때 사용합니다."
      />

      <TokenSample
        name="border-m"
        value={borders.border.m}
        style={{ border: `${borders.border.m} solid #7248D9` }}
        description="요소가 서로 밀접하게 배치되어 있거나, 구분감이 약할 경우에 사용할 수 있습니다."
      />

      <TokenSample
        name="border-l"
        value={borders.border.l}
        style={{ border: `${borders.border.l} solid #7248D9` }}
        description="중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용합니다."
      />
    </div>
  ),
};

export const BorderRadius: Story = {
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
        Border Radius
      </h2>

      <TokenSample
        name="radius-xs"
        value={radius.xs}
        style={{ borderRadius: radius.xs, border: '1px solid #7248D9' }}
        description="작은 버튼, 입력 필드, 체크박스에 최소한의 둥근 효과"
      />

      <TokenSample
        name="radius-s"
        value={radius.s}
        style={{ borderRadius: radius.s, border: '1px solid #7248D9' }}
        description="카드, 드롭다운, 배너, 일반 버튼에 기본적인 둥근 스타일"
      />

      <TokenSample
        name="radius-m"
        value={radius.m}
        style={{ borderRadius: radius.m, border: '1px solid #7248D9' }}
        description="중간 크기의 카드, 팝업, 모달에 부드러운 곡률"
      />

      <TokenSample
        name="radius-l"
        value={radius.l}
        style={{ borderRadius: radius.l, border: '1px solid #7248D9' }}
        description="큰 모달, 프로필 이미지, 강조 영역에 둥근 효과"
      />

      <TokenSample
        name="radius-xl"
        value={radius.xl}
        style={{ borderRadius: radius.xl, border: '1px solid #7248D9' }}
        description="Hero Section과 같은 대형 UI 요소에 강한 둥근 효과"
      />

      <div
        style={{
          marginBottom: '24px',
          padding: '20px',
          border: '1px solid #E8EAED',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#25282D',
            marginBottom: '12px',
          }}
        >
          radius-full - {radius.full}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '12px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#F8F4FE',
              borderRadius: radius.full,
              border: '1px solid #7248D9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '12px',
              color: '#7248D9',
            }}
          >
            Avatar
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '12px',
                color: '#8D97A5',
                marginBottom: '4px',
              }}
            >
              CSS: border-radius: {radius.full}
            </div>
            <div
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '11px',
                color: '#505862',
                fontStyle: 'italic',
              }}
            >
              아바타, 토글 버튼과 같은 완전한 원형 요소에 적용
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Shadows: Story = {
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
        Shadow Styles
      </h2>

      <TokenSample
        name="shadow-s"
        value={shadows.s}
        style={{ boxShadow: shadows.s }}
        description="높이 48px 이하의 작은 요소에 가벼운 깊이감. 아이콘, 버튼, 배지, 입력 필드 등에 적용"
      />

      <TokenSample
        name="shadow-m"
        value={shadows.m}
        style={{ boxShadow: shadows.m }}
        description="너비/높이 48px~200px 사이의 중간 크기 요소를 명확히 구분. 카드, 모달, 드롭다운 등에 적용"
      />

      <TokenSample
        name="shadow-l"
        value={shadows.l}
        style={{ boxShadow: shadows.l }}
        description="너비 200px 이상 또는 화면 너비 50% 이상의 큰 요소. 다이얼로그, 대형 카드 등에 적용"
      />
    </div>
  ),
};

export const CombinedTokens: Story = {
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
        조합 사용 예시
      </h2>

      <CombinedExample />

      <div
        style={{
          marginTop: '24px',
          padding: '20px',
          backgroundColor: '#F8F4FE',
          borderRadius: '12px',
        }}
      >
        <div
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#25282D',
            marginBottom: '12px',
          }}
        >
          의료 플랫폼 카드 예시
        </div>

        <div
          style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            borderRadius: radius.m,
            boxShadow: shadows.m,
            border: `${borders.border.s} solid #E5DEF9`,
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#25282D',
              marginBottom: '8px',
            }}
          >
            진료 예약 완료
          </div>
          <div
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '14px',
              color: '#505862',
              marginBottom: '16px',
            }}
          >
            내과 - 김의사 선생님
            <br />
            2024년 1월 15일 오후 2:00
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <div
              style={{
                padding: '8px 16px',
                backgroundColor: '#7248D9',
                color: '#FFFFFF',
                borderRadius: radius.xs,
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '12px',
                border: 'none',
              }}
            >
              상세보기
            </div>
            <div
              style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#7248D9',
                borderRadius: radius.xs,
                border: `${borders.border.s} solid #7248D9`,
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '12px',
              }}
            >
              취소하기
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '11px',
            color: '#8D97A5',
          }}
        >
          radius-m + shadow-m + border-s를 조합한 의료 예약 카드
        </div>
      </div>
    </div>
  ),
};
