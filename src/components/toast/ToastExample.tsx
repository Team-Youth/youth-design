import React from 'react';
import { ToastProvider, useToast } from './ToastProvider';

/**
 * 토스트 버튼 컴포넌트
 *
 * 다양한 토스트 타입을 테스트할 수 있는 버튼들을 제공합니다.
 */
const ToastButtons: React.FC = () => {
  const toast = useToast();

  const handleSuccessToast = () => {
    toast.success('성공!', '작업이 성공적으로 완료되었습니다.');
  };

  const handleErrorToast = () => {
    toast.error('오류 발생', '작업 중 오류가 발생했습니다.');
  };

  const handleWarningToast = () => {
    toast.warning('주의!', '주의가 필요한 상황입니다.');
  };

  const handleInfoToast = () => {
    toast.info('정보', '새로운 정보가 있습니다.');
  };

  const handleCustomToast = () => {
    toast.custom({
      status: 'success',
      title: '커스텀 토스트',
      description: '커스텀 설정으로 만든 토스트입니다.',
      duration: 6000,
    });
  };

  const handleLongTextToast = () => {
    toast.info(
      '긴 텍스트 테스트',
      '이것은 긴 텍스트를 테스트하기 위한 토스트입니다. Base UI의 애니메이션과 접근성 기능들이 잘 작동하는지 확인해보세요. F6 키를 눌러 토스트에 포커스하거나, 스와이프해서 닫을 수 있습니다.',
    );
  };

  const handleMultipleToasts = () => {
    toast.success('첫 번째', '여러 토스트 테스트');
    setTimeout(() => toast.warning('두 번째', '스택 테스트'), 200);
    setTimeout(() => toast.info('세 번째', '리미트 테스트'), 400);
    setTimeout(() => toast.error('네 번째', '이것은 리미트를 초과합니다'), 600);
  };

  const handleRemoveAll = () => {
    toast.removeAll();
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    margin: '8px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'transform 0.1s ease',
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>🍞 Toast 테스트 (Sonner 기반)</h2>
      <p style={{ color: '#6b7280', marginBottom: '16px' }}>
        Sonner 라이브러리의 강력한 기능들을 테스트해보세요:
        <br />• <strong>스와이프</strong> - 터치로 토스트 닫기 • <strong>호버</strong> - 마우스 호버
        시 타이머 일시정지 • <strong>키보드</strong> - 접근성 지원
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <button
          onClick={handleSuccessToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#10b981',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ✅ Success Toast
        </button>
        <button
          onClick={handleErrorToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#ef4444',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ❌ Error Toast
        </button>
        <button
          onClick={handleWarningToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#f59e0b',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ⚠️ Warning Toast
        </button>
        <button
          onClick={handleInfoToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#3b82f6',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ℹ️ Info Toast
        </button>
        <button
          onClick={handleLongTextToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#8b5cf6',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          📝 Long Text
        </button>
        <button
          onClick={handleMultipleToasts}
          style={{
            ...buttonStyle,
            backgroundColor: '#06b6d4',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          📚 Multiple Toasts
        </button>
        <button
          onClick={handleCustomToast}
          style={{
            ...buttonStyle,
            backgroundColor: '#a855f7',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          🎨 Custom Toast
        </button>
        <button
          onClick={handleRemoveAll}
          style={{
            ...buttonStyle,
            backgroundColor: '#6b7280',
            color: 'white',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          🗑️ Remove All
        </button>
      </div>

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#374151',
        }}
      >
        <h4 style={{ margin: '0 0 8px 0', color: '#1f2937' }}>🎯 Sonner 기능 테스트:</h4>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>
            <strong>접근성</strong>: 토스트가 표시되면 스크린 리더가 자동으로 읽어줍니다
          </li>
          <li>
            <strong>터치 제스처</strong>: 모바일에서 스와이프로 토스트 닫기
          </li>
          <li>
            <strong>애니메이션</strong>: 부드러운 입장/퇴장 애니메이션
          </li>
          <li>
            <strong>스택 관리</strong>: 최대 3개까지 표시, 초과 시 오래된 것부터 제거
          </li>
          <li>
            <strong>호버 일시정지</strong>: 마우스 호버 시 타이머가 일시정지됩니다
          </li>
          <li>
            <strong>커스텀 스타일링</strong>: youth-design 디자인 토큰 적용
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * 토스트 예시 컴포넌트
 *
 * ToastProvider로 감싸진 환경에서 토스트를 테스트할 수 있습니다.
 */
export const ToastExample: React.FC = () => {
  return (
    <ToastProvider position="top-right" defaultDuration={4000} limit={3}>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <ToastButtons />
        <div style={{ padding: '20px' }}>
          <h3 style={{ color: '#1f2937', marginBottom: '16px' }}>📖 사용법</h3>
          <pre
            style={{
              backgroundColor: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '13px',
              lineHeight: '1.4',
            }}
          >
            {`// 1. Provider 설정
import { ToastProvider, useToast } from '@team-youth/youth-design/toast';

function App() {
  return (
    <ToastProvider position="top-right" defaultDuration={4000} limit={3}>
      <YourApp />
    </ToastProvider>
  );
}

// 2. 컴포넌트에서 사용
function YourComponent() {
  const toast = useToast();
  
  const handleClick = () => {
    // 기본 사용법
    toast.success('성공!', '작업이 완료되었습니다.');
    toast.error('오류!', '문제가 발생했습니다.');
    toast.warning('주의!', '확인이 필요합니다.');
    toast.info('정보', '새로운 알림입니다.');
    
    // 옵션과 함께 사용
    toast.success('제목', '설명', {
      id: 'unique-id',     // 고유 ID
      duration: 6000,      // 지속 시간
    });
    
    // 커스텀 토스트
    toast.custom({
      status: 'success',
      title: '커스텀',
      description: '설명',
      duration: 5000,
    });
    
    // 관리 기능
    toast.remove('toast-id');  // 특정 토스트 제거
    toast.removeAll();         // 모든 토스트 제거
  };
  
  return <button onClick={handleClick}>토스트 보기</button>;
}`}
          </pre>

          <div
            style={{
              marginTop: '20px',
              padding: '16px',
              backgroundColor: '#ecfdf5',
              border: '1px solid #d1fae5',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ color: '#065f46', margin: '0 0 8px 0' }}>✨ Sonner의 장점</h4>
            <p style={{ color: '#047857', margin: '0', fontSize: '14px' }}>
              기존 API를 유지하면서, 성능 최적화, 접근성, 터치 제스처 등 현대적인 사용자 경험을
              제공합니다. youth-design 디자인 토큰과 완벽하게 통합되어 일관된 UI를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
};

export default ToastExample;
