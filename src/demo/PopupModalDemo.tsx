import React, { useState } from 'react';
import { Popup } from '../components/popup';
import { Modal } from '../components/modal';
import { colors } from '../tokens/colors';
import { textStyles } from '../tokens/typography';

export const PopupModalDemo: React.FC = () => {
  const [popupStates, setPopupStates] = useState({
    singleButton: false,
    singleButtonNoDesc: false,
    twoButtons: false,
    twoButtonsNoDesc: false,
  });

  const [modalStates, setModalStates] = useState({
    singleButton: false,
    twoButtons: false,
    withImage: false,
    withImageAndDesc: false,
    twoButtonsWithImage: false,
    noCloseButton: false,
  });

  const buttonStyle: React.CSSProperties = {
    padding: '12px 16px',
    backgroundColor: colors.primary.mainviolet,
    color: colors.semantic.background.primary,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '8px',
    ...textStyles.body1,
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '32px',
    padding: '24px',
    border: `1px solid ${colors.semantic.border.default}`,
    borderRadius: '12px',
  };

  const titleStyle: React.CSSProperties = {
    ...textStyles.heading2,
    color: colors.semantic.text.primary,
    marginBottom: '16px',
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1
        style={{
          ...textStyles.heading1,
          color: colors.semantic.text.primary,
          marginBottom: '32px',
        }}
      >
        Popup & Modal 컴포넌트 데모
      </h1>

      {/* Popup 섹션 */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Popup 컴포넌트</h2>

        <button
          style={buttonStyle}
          onClick={() => setPopupStates((prev) => ({ ...prev, singleButton: true }))}
        >
          버튼 1개 + 설명 있음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPopupStates((prev) => ({ ...prev, singleButtonNoDesc: true }))}
        >
          버튼 1개 + 설명 없음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPopupStates((prev) => ({ ...prev, twoButtons: true }))}
        >
          버튼 2개 + 설명 있음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPopupStates((prev) => ({ ...prev, twoButtonsNoDesc: true }))}
        >
          버튼 2개 + 설명 없음
        </button>

        {/* Popup 컴포넌트들 */}
        <Popup
          title="Popup Title h1"
          description="Popup Contents Text body1"
          isOpen={popupStates.singleButton}
          onClose={() => setPopupStates((prev) => ({ ...prev, singleButton: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, singleButton: false })),
          }}
        />

        <Popup
          title="Popup Title h1"
          isOpen={popupStates.singleButtonNoDesc}
          onClose={() => setPopupStates((prev) => ({ ...prev, singleButtonNoDesc: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, singleButtonNoDesc: false })),
          }}
        />

        <Popup
          title="Popup Title h1"
          description="Popup Contents Text body1"
          isOpen={popupStates.twoButtons}
          onClose={() => setPopupStates((prev) => ({ ...prev, twoButtons: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, twoButtons: false })),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, twoButtons: false })),
          }}
        />

        <Popup
          title="Popup Title h1"
          isOpen={popupStates.twoButtonsNoDesc}
          onClose={() => setPopupStates((prev) => ({ ...prev, twoButtonsNoDesc: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, twoButtonsNoDesc: false })),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setPopupStates((prev) => ({ ...prev, twoButtonsNoDesc: false })),
          }}
        />
      </div>

      {/* Modal 섹션 */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Modal 컴포넌트</h2>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, singleButton: true }))}
        >
          닫기버튼 + 버튼 1개 + 설명 있음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, twoButtons: true }))}
        >
          닫기버튼 + 버튼 2개 + 설명 있음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, withImage: true }))}
        >
          닫기버튼 + 버튼 1개 + 이미지 있음
        </button>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, withImageAndDesc: true }))}
        >
          닫기버튼 + 버튼 1개 + 설명 + 이미지
        </button>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, twoButtonsWithImage: true }))}
        >
          닫기버튼 + 버튼 2개 + 설명 + 이미지
        </button>

        <button
          style={buttonStyle}
          onClick={() => setModalStates((prev) => ({ ...prev, noCloseButton: true }))}
        >
          닫기버튼 없음 + 버튼 2개
        </button>

        {/* Modal 컴포넌트들 */}
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={modalStates.singleButton}
          onClose={() => setModalStates((prev) => ({ ...prev, singleButton: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, singleButton: false })),
          }}
        />

        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={modalStates.twoButtons}
          onClose={() => setModalStates((prev) => ({ ...prev, twoButtons: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, twoButtons: false })),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, twoButtons: false })),
          }}
        />

        <Modal
          title="Modal Title h1"
          image="https://via.placeholder.com/400x240/E8EAED/6E7887?text=Image+Placeholder"
          isOpen={modalStates.withImage}
          onClose={() => setModalStates((prev) => ({ ...prev, withImage: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, withImage: false })),
          }}
        />

        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          image="https://via.placeholder.com/400x240/E8EAED/6E7887?text=Image+Placeholder"
          isOpen={modalStates.withImageAndDesc}
          onClose={() => setModalStates((prev) => ({ ...prev, withImageAndDesc: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, withImageAndDesc: false })),
          }}
        />

        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          image="https://via.placeholder.com/400x240/E8EAED/6E7887?text=Image+Placeholder"
          isOpen={modalStates.twoButtonsWithImage}
          onClose={() => setModalStates((prev) => ({ ...prev, twoButtonsWithImage: false }))}
          primaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, twoButtonsWithImage: false })),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setModalStates((prev) => ({ ...prev, twoButtonsWithImage: false })),
          }}
        />

        <Modal
          title="Modal Title h1"
          description="이 모달은 닫기 버튼이 없습니다. 버튼으로만 닫을 수 있습니다."
          showCloseButton={false}
          isOpen={modalStates.noCloseButton}
          onClose={() => setModalStates((prev) => ({ ...prev, noCloseButton: false }))}
          primaryButton={{
            text: '확인',
            onClick: () => setModalStates((prev) => ({ ...prev, noCloseButton: false })),
          }}
          secondaryButton={{
            text: '취소',
            onClick: () => setModalStates((prev) => ({ ...prev, noCloseButton: false })),
          }}
        />
      </div>
    </div>
  );
};
