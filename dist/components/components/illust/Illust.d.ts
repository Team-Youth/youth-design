import { IllustType } from './assets';
export interface IllustProps {
    /** 일러스트 타입 */
    type: IllustType;
    /** 일러스트 크기 (픽셀 단위) */
    size?: number;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
}
export declare const Illust: React.FC<IllustProps>;
