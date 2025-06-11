import React, { useCallback, useRef, useImperativeHandle, forwardRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export interface LottieProps {
  /** Lottie 애니메이션 데이터 (JSON 형태) */
  animationData: object;
  /** 애니메이션 재생 여부 */
  loop?: boolean;
  /** 자동 재생 여부 */
  autoplay?: boolean;
  /** 애니메이션 속도 (1이 기본 속도) */
  speed?: number;
  /** 애니메이션 방향 (1: 정방향, -1: 역방향) */
  direction?: 1 | -1;
  /** 애니메이션 크기 (픽셀 단위) */
  width?: number;
  /** 애니메이션 높이 (픽셀 단위) */
  height?: number;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
  /** 애니메이션 완료 시 콜백 */
  onComplete?: () => void;
  /** 애니메이션 반복 시 콜백 */
  onLoopComplete?: () => void;
  /** 특정 세그먼트만 재생할 때 사용 */
  segments?: [number, number];
  /** 애니메이션 렌더링 설정 */
  rendererSettings?: {
    preserveAspectRatio?: string;
    clearCanvas?: boolean;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
  };
}

export interface LottieRef {
  /** 애니메이션 재생 */
  play: () => void;
  /** 애니메이션 정지 */
  stop: () => void;
  /** 애니메이션 일시정지 */
  pause: () => void;
  /** 특정 프레임으로 이동 */
  goToAndStop: (frame: number) => void;
  /** 특정 프레임으로 이동하고 재생 */
  goToAndPlay: (frame: number) => void;
  /** 재생 속도 설정 */
  setSpeed: (speed: number) => void;
  /** 재생 방향 설정 */
  setDirection: (direction: 1 | -1) => void;
  /** 애니메이션 인스턴스 가져오기 */
  getLottieInstance: () => any;
}

export const YouthLottie = forwardRef<LottieRef, LottieProps>(
  (
    {
      animationData,
      loop = true,
      autoplay = true,
      speed = 1,
      direction = 1,
      width,
      height,
      className = '',
      style = {},
      onComplete,
      onLoopComplete,
      segments,
      rendererSettings,
    },
    ref,
  ) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    // 외부에서 사용할 수 있는 메서드들을 정의
    useImperativeHandle(ref, () => ({
      play: () => lottieRef.current?.play(),
      stop: () => lottieRef.current?.stop(),
      pause: () => lottieRef.current?.pause(),
      goToAndStop: (frame: number) => lottieRef.current?.goToAndStop(frame, true),
      goToAndPlay: (frame: number) => lottieRef.current?.goToAndPlay(frame, true),
      setSpeed: (speed: number) => lottieRef.current?.setSpeed(speed),
      setDirection: (direction: 1 | -1) => lottieRef.current?.setDirection(direction),
      getLottieInstance: () => lottieRef.current,
    }));

    // 애니메이션 완료 콜백
    const handleComplete = useCallback(() => {
      if (onComplete) {
        onComplete();
      }
    }, [onComplete]);

    // 애니메이션 반복 완료 콜백
    const handleLoopComplete = useCallback(() => {
      if (onLoopComplete) {
        onLoopComplete();
      }
    }, [onLoopComplete]);

    // 컨테이너 스타일
    const containerStyle: React.CSSProperties = {
      width: width || '100%',
      height: height || 'auto',
      display: 'inline-block',
      ...style,
    };

    // Lottie 옵션
    const lottieOptions = {
      animationData,
      loop,
      autoplay,
      onComplete: handleComplete,
      onLoopComplete: handleLoopComplete,
      lottieRef,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        clearCanvas: true,
        progressiveLoad: false,
        hideOnTransparent: true,
        ...rendererSettings,
      },
      ...(segments && { segments }),
    };

    // 애니메이션 설정 적용
    React.useEffect(() => {
      if (lottieRef.current) {
        lottieRef.current.setSpeed(speed);
        lottieRef.current.setDirection(direction);
      }
    }, [speed, direction]);

    return (
      <div
        className={`youth-lottie ${className}`}
        style={containerStyle}
        role="img"
        aria-label="애니메이션"
      >
        <Lottie {...lottieOptions} />
      </div>
    );
  },
);

YouthLottie.displayName = 'YouthLottie';
