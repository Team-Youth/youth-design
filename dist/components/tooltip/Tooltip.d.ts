export type TooltipPosition = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom';
export type TooltipTrigger = 'hover' | 'click';
export interface TooltipProps {
    /** 툴팁 내용 */
    content: string;
    /** 툴팁이 트리거될 자식 요소 */
    children: React.ReactNode;
    /** 툴팁 위치 (기본값: 'top') */
    position?: TooltipPosition;
    /** 툴팁 트리거 방식 (기본값: 'hover') */
    trigger?: TooltipTrigger;
    /** 닫기 버튼 표시 여부 (기본값: false) */
    showCloseButton?: boolean;
    /** 툴팁 표시 여부를 외부에서 제어 (controlled component) */
    visible?: boolean;
    /** 툴팁 표시/숨김 변경 시 호출되는 콜백 */
    onVisibleChange?: (visible: boolean) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** hover 트리거에서 툴팁이 나타나기까지의 지연 시간 (ms, 기본값: 100) */
    mouseEnterDelay?: number;
    /** hover 트리거에서 툴팁이 사라지기까지의 지연 시간 (ms, 기본값: 100) */
    mouseLeaveDelay?: number;
    /** 툴팁과 기준 요소 사이의 거리 (px, 기본값: 12) */
    offset?: number;
}
export declare const Tooltip: import("react").NamedExoticComponent<TooltipProps>;
