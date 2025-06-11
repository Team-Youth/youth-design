import React from 'react';
export type ToastStatus = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
    /** 토스트 상태 */
    status: ToastStatus;
    /** 제목 */
    title: string;
    /** 설명 텍스트 (선택사항) */
    description?: string;
    /** 앞쪽 아이콘 표시 여부 */
    showLeadingIcon?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 닫기 버튼 클릭 핸들러 */
    onClose?: () => void;
    /** 커스텀 클래스명 */
    className?: string;
}
/**
 * 토스트 오버레이 컴포넌트
 *
 * 사용자가 어떤 작업을 완료했을 때, 시스템이 잘 처리됐다는 걸 알려주는 알림입니다.
 * 현재 하고 있는 일을 방해하지 않고, 잠깐 나타났다 사라지는 방식으로 보여집니다.
 */
export declare const Toast: React.FC<ToastProps>;
export default Toast;
