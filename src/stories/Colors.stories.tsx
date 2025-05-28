import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../tokens';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj;

const ColorPalette = ({
  title,
  colorSet,
  description,
}: {
  title: string;
  colorSet: Record<string, any>;
  description?: string;
}) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
    {description && (
      <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.875rem' }}>{description}</p>
    )}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      {Object.entries(colorSet).map(([key, value]) => {
        const colorValue = typeof value === 'string' ? value : value?.hex || value;
        return (
          <div
            key={key}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                height: '80px',
                backgroundColor: colorValue,
                border: colorValue === '#FFFFFF' ? '1px solid #e0e0e0' : 'none',
              }}
            />
            <div style={{ padding: '0.75rem' }}>
              <div style={{ fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                {key}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                {colorValue}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const NestedColorPalette = ({
  title,
  colorSet,
  description,
}: {
  title: string;
  colorSet: Record<string, Record<string, string>>;
  description?: string;
}) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
    {description && (
      <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.875rem' }}>{description}</p>
    )}
    {Object.entries(colorSet).map(([categoryKey, categoryColors]) => (
      <div key={categoryKey} style={{ marginBottom: '1.5rem' }}>
        <h4
          style={{
            marginBottom: '0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            textTransform: 'capitalize',
          }}
        >
          {categoryKey}
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {Object.entries(categoryColors).map(([key, value]) => (
            <div
              key={key}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  height: '60px',
                  backgroundColor: value,
                  border: value === '#FFFFFF' ? '1px solid #e0e0e0' : 'none',
                }}
              />
              <div style={{ padding: '0.5rem' }}>
                <div style={{ fontWeight: '600', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  {key}
                </div>
                <div style={{ fontSize: '0.625rem', color: '#666', fontFamily: 'monospace' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Primary: Story = {
  render: () => (
    <div>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: '#25282D',
        }}
      >
        Primary Colors
      </h2>
      <p
        style={{
          marginBottom: '2rem',
          color: '#666',
          fontSize: '1rem',
          lineHeight: '1.5',
        }}
      >
        브랜드 아이덴티티를 대표하는 메인 컬러입니다. 버튼, 링크, 강조 텍스트 등 주요 액션에
        사용됩니다.
      </p>

      <ColorPalette
        title="Main Violet"
        colorSet={{ mainviolet: colors.primary.mainviolet }}
        description="브랜드의 핵심 컬러입니다."
      />

      <ColorPalette
        title="Gray Scale"
        colorSet={colors.primary.gray}
        description="중립적인 컬러입니다. 주로 Typography에 적용하며, 넓은 영역 Fill 시 Cool Gray를 사용합니다."
      />

      <ColorPalette
        title="Cool Gray"
        colorSet={colors.primary.coolGray}
        description="넓은 영역에서 Fill로 사용 가능한 중립 색상 계열입니다."
      />

      <NestedColorPalette
        title="Tint Colors"
        colorSet={colors.primary.tint}
        description="메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용됩니다."
      />
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <NestedColorPalette
      title="Semantic Colors"
      colorSet={colors.semantic}
      description="텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋입니다."
    />
  ),
};

export const Illustration: Story = {
  render: () => (
    <NestedColorPalette
      title="Illustration Colors"
      colorSet={colors.illustration}
      description="의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러를 정의합니다."
    />
  ),
};

export const AllColors: Story = {
  render: () => (
    <div>
      <div>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#25282D',
          }}
        >
          Primary Colors
        </h2>
        <p
          style={{
            marginBottom: '2rem',
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.5',
          }}
        >
          브랜드 아이덴티티를 대표하는 메인 컬러입니다. 버튼, 링크, 강조 텍스트 등 주요 액션에
          사용됩니다.
        </p>

        <ColorPalette
          title="Main Violet"
          colorSet={{ mainviolet: colors.primary.mainviolet }}
          description="브랜드의 핵심 컬러입니다."
        />

        <ColorPalette
          title="Gray Scale"
          colorSet={colors.primary.gray}
          description="중립적인 컬러입니다. 주로 Typography에 적용하며, 넓은 영역 Fill 시 Cool Gray를 사용합니다."
        />

        <ColorPalette
          title="Cool Gray"
          colorSet={colors.primary.coolGray}
          description="넓은 영역에서 Fill로 사용 가능한 중립 색상 계열입니다."
        />

        <NestedColorPalette
          title="Tint Colors"
          colorSet={colors.primary.tint}
          description="메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용됩니다."
        />
      </div>

      <NestedColorPalette
        title="Semantic Colors"
        colorSet={colors.semantic}
        description="텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋입니다."
      />

      <NestedColorPalette
        title="Illustration Colors"
        colorSet={colors.illustration}
        description="의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러를 정의합니다."
      />
    </div>
  ),
};
