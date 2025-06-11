import type { Meta, StoryObj } from '@storybook/react';
import { YouthLottie, LottieRef } from '../../components/lottie';
import React, { useRef } from 'react';

// 간단한 데모용 Lottie 애니메이션 데이터 (원이 돌아가는 애니메이션)
const simpleRotationAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: 'Simple Rotation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Circle',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { t: 59, s: [360] },
          ],
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              d: 1,
              ty: 'el',
              s: { a: 0, k: [40, 40] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.2, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 4 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

// 페이드 인/아웃 애니메이션 데이터
const fadeAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: 'Fade Animation',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Square',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] },
            { t: 89, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [40, 40] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: 'fl',
              c: { a: 0, k: [1, 0.4, 0.4, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

const meta: Meta<typeof YouthLottie> = {
  title: 'Components/Lottie',
  component: YouthLottie,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lottie 애니메이션을 렌더링하는 컴포넌트입니다. After Effects에서 만든 애니메이션을 웹에서 재생할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animationData: {
      control: false,
      description: 'Lottie 애니메이션 JSON 데이터',
    },
    loop: {
      control: { type: 'boolean' },
      description: '애니메이션 반복 재생 여부',
    },
    autoplay: {
      control: { type: 'boolean' },
      description: '자동 재생 여부',
    },
    speed: {
      control: { type: 'range', min: 0.1, max: 3, step: 0.1 },
      description: '애니메이션 재생 속도',
    },
    direction: {
      control: { type: 'select' },
      options: [1, -1],
      description: '애니메이션 재생 방향 (1: 정방향, -1: 역방향)',
    },
    width: {
      control: { type: 'number' },
      description: '애니메이션 컨테이너 너비 (픽셀)',
    },
    height: {
      control: { type: 'number' },
      description: '애니메이션 컨테이너 높이 (픽셀)',
    },
  },
  args: {
    loop: true,
    autoplay: true,
    speed: 1,
    direction: 1,
    width: 200,
    height: 200,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animationData: simpleRotationAnimation,
  },
};

export const FadeAnimation: Story = {
  args: {
    animationData: fadeAnimation,
    width: 150,
    height: 150,
  },
};

export const SlowRotation: Story = {
  args: {
    animationData: simpleRotationAnimation,
    speed: 0.5,
    width: 100,
    height: 100,
  },
};

export const ReverseRotation: Story = {
  args: {
    animationData: simpleRotationAnimation,
    direction: -1,
    width: 100,
    height: 100,
  },
};

export const NoLoop: Story = {
  args: {
    animationData: fadeAnimation,
    loop: false,
    width: 120,
    height: 120,
  },
};

export const WithControls: Story = {
  render: (args) => {
    const lottieRef = useRef<LottieRef>(null);

    const handlePlay = () => {
      lottieRef.current?.play();
    };

    const handlePause = () => {
      lottieRef.current?.pause();
    };

    const handleStop = () => {
      lottieRef.current?.stop();
    };

    const handleSpeedChange = (speed: number) => {
      lottieRef.current?.setSpeed(speed);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <YouthLottie ref={lottieRef} {...args} />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handlePlay}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            재생
          </button>
          <button
            onClick={handlePause}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            일시정지
          </button>
          <button
            onClick={handleStop}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            정지
          </button>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span>속도:</span>
          <button onClick={() => handleSpeedChange(0.5)}>0.5x</button>
          <button onClick={() => handleSpeedChange(1)}>1x</button>
          <button onClick={() => handleSpeedChange(2)}>2x</button>
        </div>
      </div>
    );
  },
  args: {
    animationData: simpleRotationAnimation,
    width: 150,
    height: 150,
  },
};
