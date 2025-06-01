import React from 'react';
import { Icon, IconType } from './Icon';
import { colors } from '../../tokens/colors';

// 구현된 아이콘들
const implementedIcons: IconType[] = [
  'hamburger',
  'search',
  'close',
  'check',
  'add',
  'minus',
  'more',
  'truncation',
  'download',
  'home',
  'home-filled',
  'heart',
  'heart-filled',
  'my-page',
  'my-page-filled',
  'arrow-down',
  'arrow-up',
  'arrow-left',
  'arrow-right',
];

// 아직 구현되지 않은 아이콘들 (플레이스홀더로 표시됨)
const pendingIcons: IconType[] = [
  'modify',
  'duplicate',
  'dialog',
  'profile',
  'profile-filled',
  'bell',
  'bell-filled',
  'dashboard',
  'dashboard-filled',
  'radio',
  'radio-filled',
  'caution',
  'caution-filled',
  'question',
  'question-filled',
  'info',
  'info-filled',
  'add-circle',
  'add-circle-filled',
  'minus-circle',
  'minus-circle-filled',
  'location',
  'location-filled',
  'bookmark',
  'bookmark-filled',
  'camera',
  'camera-filled',
  'card',
  'card-filled',
  'close-circle',
  'close-circle-filled',
  'calendar',
  'calendar-filled',
  'check-circle',
  'check-circle-filled',
  'time',
  'time-filled',
  'phone',
  'phone-filled',
  'history',
  'history-filled',
  'switch-circle',
  'switch-circle-filled',
  'id-card',
  'id-card-filled',
  'delete',
  'delete-filled',
  'mail',
  'mail-filled',
  'settings',
  'settings-filled',
  'checkbox',
  'checkbox-selected',
  'checkbox-filled',
  'chevron-down',
  'chevron-up',
  'chevron-left',
  'chevron-right',
  'social-kakao',
  'social-apple',
  'social-naver',
  'social-google',
  'social-company5',
  'number-0',
  'number-1',
  'number-2',
  'number-3',
  'number-4',
  'number-5',
  'number-6',
  'number-7',
  'number-8',
  'number-9',
  'reset',
  'reload',
  'share-ios',
  'guide',
  'parcel',
  'receipt',
  'image',
  'qr',
  'fax',
  'customer-service',
  'lock',
  'microphone',
  'sound',
  'new',
  'gym',
];

interface IconGridProps {
  icons: IconType[];
  title: string;
  subtitle?: string;
}

const IconGrid: React.FC<IconGridProps> = ({ icons, title, subtitle }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2
      style={{
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '8px',
        color: colors.semantic.text.primary,
        fontFamily: 'Pretendard',
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        style={{
          fontSize: '14px',
          color: colors.semantic.text.secondary,
          marginBottom: '24px',
          fontFamily: 'Pretendard',
        }}
      >
        {subtitle}
      </p>
    )}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '16px',
      }}
    >
      {icons.map((iconType) => (
        <div
          key={iconType}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            border: `1px solid ${colors.semantic.border.strong}`,
            borderRadius: '8px',
            backgroundColor: colors.semantic.background.primary,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.semantic.disabled.background;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.semantic.background.primary;
          }}
        >
          <Icon
            type={iconType}
            size={32}
            color={colors.semantic.text.primary}
            style={{ marginBottom: '8px' }}
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: colors.semantic.text.secondary,
              textAlign: 'center',
              fontFamily: 'Pretendard',
              lineHeight: '1.4',
            }}
          >
            {iconType}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const IconShowcase: React.FC = () => {
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: colors.semantic.background.primary,
        minHeight: '100vh',
        fontFamily: 'Pretendard',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '16px',
          color: colors.semantic.text.primary,
          fontFamily: 'Pretendard',
        }}
      >
        아이콘 라이브러리
      </h1>
      <p
        style={{
          fontSize: '16px',
          color: colors.semantic.text.secondary,
          marginBottom: '48px',
          lineHeight: '1.6',
          fontFamily: 'Pretendard',
        }}
      >
        Figma 디자인 시스템에서 가져온 아이콘들입니다. 현재 구현된 아이콘들과 향후 구현될 아이콘들을
        확인할 수 있습니다.
      </p>

      <IconGrid
        icons={implementedIcons}
        title="구현 완료된 아이콘들"
        subtitle="현재 사용 가능한 아이콘들입니다."
      />

      <IconGrid
        icons={pendingIcons}
        title="구현 예정 아이콘들"
        subtitle="Figma 디자인에서 확인된 아이콘들로, 향후 구현될 예정입니다. 현재는 플레이스홀더가 표시됩니다."
      />

      <div
        style={{
          marginTop: '48px',
          padding: '24px',
          backgroundColor: colors.semantic.disabled.background,
          borderRadius: '8px',
        }}
      >
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '12px',
            color: colors.semantic.text.primary,
            fontFamily: 'Pretendard',
          }}
        >
          사용법
        </h3>
        <pre
          style={{
            backgroundColor: colors.semantic.background.primary,
            padding: '16px',
            borderRadius: '4px',
            fontSize: '14px',
            color: colors.semantic.text.primary,
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            overflow: 'auto',
          }}
        >
          {`import { Icon } from './components/icon/Icon';

// 기본 사용법
<Icon type="search" />

// 크기와 색상 커스터마이징
<Icon 
  type="heart" 
  size={32} 
  color="#FF6B6B" 
/>

// 클릭 이벤트 처리
<Icon 
  type="hamburger" 
  onClick={() => console.log('메뉴 클릭!')} 
/>`}
        </pre>
      </div>
    </div>
  );
};

export default IconShowcase;
