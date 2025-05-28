import type { Meta, StoryObj } from '@storybook/react';
import { spacing } from '../tokens/spacing';

interface SpacingSampleProps {
  name: string;
  value: string;
  description?: string;
}

const SpacingSample: React.FC<SpacingSampleProps> = ({ name, value, description }) => (
  <div
    style={{
      marginBottom: '24px',
      padding: '16px',
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
        marginBottom: '8px',
      }}
    >
      {name} - {value}
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
      <div
        style={{
          width: value,
          height: '32px',
          backgroundColor: '#7248D9',
          borderRadius: '4px',
          marginRight: '16px',
        }}
      />
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#8D97A5',
        }}
      >
        Width: {value}
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
      <div
        style={{
          width: '32px',
          height: value,
          backgroundColor: '#7248D9',
          borderRadius: '4px',
          marginRight: '16px',
        }}
      />
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '12px',
          color: '#8D97A5',
        }}
      >
        Height: {value}
      </div>
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
);

const SpacingInAction: React.FC = () => (
  <div
    style={{
      padding: '24px',
      backgroundColor: '#F8F4FE',
      borderRadius: '12px',
      border: '1px solid #E5DEF9',
    }}
  >
    <div
      style={{
        fontFamily: 'Pretendard, sans-serif',
        fontSize: '18px',
        fontWeight: 600,
        color: '#25282D',
        marginBottom: spacing.m,
      }}
    >
      스페이싱 적용 예시
    </div>

    <div
      style={{
        padding: spacing.l,
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        marginBottom: spacing.s,
      }}
    >
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#25282D',
          marginBottom: spacing.xs,
        }}
      >
        카드 제목 (Padding: {spacing.l})
      </div>
      <div
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '14px',
          color: '#505862',
          marginBottom: spacing.m,
        }}
      >
        카드 내용입니다. 제목과 {spacing.xs} 간격으로 배치되었습니다.
      </div>

      <div style={{ display: 'flex', gap: spacing.s }}>
        <div
          style={{
            padding: `${spacing.xs} ${spacing.s}`,
            backgroundColor: '#7248D9',
            color: '#FFFFFF',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'Pretendard, sans-serif',
          }}
        >
          버튼 1
        </div>
        <div
          style={{
            padding: `${spacing.xs} ${spacing.s}`,
            backgroundColor: '#E5DEF9',
            color: '#7248D9',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'Pretendard, sans-serif',
          }}
        >
          버튼 2
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
      * 버튼들은 {spacing.s} 간격으로 배치되었습니다.
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# 스페이싱 시스템 (Spacing System)

일관된 요소 간격을 통해 체계적인 레이아웃을 구성하는 스페이싱 토큰입니다.

## 특징
- **4px/8px 배수 기반**: 체계적인 8배수 그리드 시스템
- **9단계 스케일**: xxxs(2px)부터 xxxl(40px)까지
- **일관성**: 모든 컴포넌트와 레이아웃에서 동일한 간격 체계 사용

## 사용 가이드
- **xxxs ~ xs**: 텍스트와 아이콘, 작은 요소들 간의 미세한 간격
- **s ~ m**: 일반적인 컴포넌트 내부 간격, 여백
- **l ~ xl**: 섹션 간격, 카드 패딩
- **xxl ~ xxxl**: 페이지 레벨 간격, 큰 섹션 구분
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {
  render: () => (
    <div>
      <SpacingSample
        name="spacing-xxxs"
        value={spacing.xxxs}
        description="가장 작은 간격 - 텍스트와 아이콘, 인라인 요소들의 미세한 간격"
      />

      <SpacingSample
        name="spacing-xxs"
        value={spacing.xxs}
        description="매우 작은 간격 - 레이블과 입력 필드, 밀접한 관련 요소들"
      />

      <SpacingSample
        name="spacing-xs"
        value={spacing.xs}
        description="작은 간격 - 버튼 내부 패딩, 작은 컴포넌트 간격"
      />

      <SpacingSample
        name="spacing-s"
        value={spacing.s}
        description="기본 작은 간격 - 일반적인 요소 간격, 리스트 아이템 간격"
      />

      <SpacingSample
        name="spacing-m"
        value={spacing.m}
        description="중간 간격 - 기본 패딩, 일반적인 컴포넌트 간격"
      />

      <SpacingSample
        name="spacing-l"
        value={spacing.l}
        description="큰 간격 - 카드 패딩, 컴포넌트 그룹 간격"
      />

      <SpacingSample
        name="spacing-xl"
        value={spacing.xl}
        description="매우 큰 간격 - 섹션 간격, 페이지 상단 여백"
      />

      <SpacingSample
        name="spacing-xxl"
        value={spacing.xxl}
        description="아주 큰 간격 - 페이지 섹션 구분, 모달과 배경 간격"
      />

      <SpacingSample
        name="spacing-xxxl"
        value={spacing.xxxl}
        description="가장 큰 간격 - 페이지 최상위 간격, 메인 콘텐츠 구분"
      />
    </div>
  ),
};

export const SpacingScale: Story = {
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
        Spacing Scale Visualization
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '24px',
          backgroundColor: '#F3F5F6',
          borderRadius: '12px',
        }}
      >
        {Object.entries(spacing).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '100px',
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '12px',
                color: '#505862',
                textAlign: 'right',
              }}
            >
              {key}
            </div>
            <div
              style={{
                width: value,
                height: '20px',
                backgroundColor: '#7248D9',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '11px',
                color: '#8D97A5',
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const PracticalExample: Story = {
  render: () => <SpacingInAction />,
  parameters: {
    docs: {
      description: {
        story: '실제 컴포넌트에서 스페이싱 토큰이 어떻게 적용되는지 보여주는 예시입니다.',
      },
    },
  },
};
