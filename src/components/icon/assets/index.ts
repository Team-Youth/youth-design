import { IconType } from '../Icon';

// 기본 아이콘들
import search from './search.svg?raw';
import close from './close.svg?raw';
import check from './check.svg?raw';
import add from './add.svg?raw';
import minus from './minus.svg?raw';
import truncation from './Truncation.svg?raw';
import more from './more.svg?raw';
import hamburger from './hamburger.svg?raw';

// 홈 관련
import home from './home.svg?raw';
import homeFilled from './home-filled.svg?raw';
import homeStroke from './homeStroke.svg?raw';

// 하트 관련
import heart from './heart.svg?raw';
import heartFilled from './heart-filled.svg?raw';
import heartStroke from './heartStroke.svg?raw';

// 프로필 관련
import myPage from './my-page.svg?raw';
import myPageFilled from './my-page-filled.svg?raw';
import profileStroke from './profileStroke.svg?raw';
import profileFilled from './profileFilled.svg?raw';

// 액션 아이콘들
import download from './download.svg?raw';
import modify from './modify.svg?raw';
import duplicate from './duplicate.svg?raw';
import dialog from './dialog.svg?raw';

// 화살표 관련
import arrowDown from './arrow-down.svg?raw';
import arrowUp from './arrow-up.svg?raw';
import arrowRight from './arrow-right.svg?raw';
import arrowLeft from './arrow-left.svg?raw';
import chevronDown from './chevron-down.svg?raw';
import chevronUp from './chevron-up.svg?raw';
import chevronRight from './chevron-right.svg?raw';
import chevronLeft from './chevron-left.svg?raw';

// 달력 관련
import calendar from './calendar.svg?raw';
import calendarFilled from './calendar-filled.svg?raw';

// 시간 관련
import timeStroke from './timeStroke.svg?raw';
import timeFilled from './timeFilled.svg?raw';

// 스위치 관련
import switchCircleStroke from './switchCircleStroke.svg?raw';
import switchCircleFilled from './switchCircleFilled.svg?raw';

// 미디어 관련
import sound from './sound.svg?raw';
import shareIos from './shareIos.svg?raw';
import microphone from './microphone.svg?raw';
import cameraStroke from './cameraStorke.svg?raw';
import cameraFilled from './cameraFilled.svg?raw';

// 설정 관련
import settingsStroke from './settingsStroke.svg?raw';
import settingsFilled from './settingsFilled.svg?raw';
import reset from './reset.svg?raw';
import reload from './reload.svg?raw';

// 폼 관련
import receipt from './receipt.svg?raw';
import radioSelected from './radioSelected.svg?raw';
import radioResting from './radioResting.svg?raw';
import checkboxSelectedStroke from './checkboxSelectedStroke.svg?raw';
import checkboxSelectedFilled from './checkboxSelectedFilled.svg?raw';
import checkboxResting from './checkboxResting.svg?raw';

// 정보 관련
import questionStroke from './questionStroke.svg?raw';
import questionFilled from './questionFilled.svg?raw';
import infoStroke from './infoStroke.svg?raw';
import infoFilled from './infoFilled.svg?raw';
import qr from './qr.svg?raw';

// 출력 관련
import print from './print.svg?raw';

// 사람 관련
import personStroke from './personStroke.svg?raw';
import personFilled from './personFilled.svg?raw';

// 결제 관련
import paymentStroke from './paymentStroke.svg?raw';
import paymentFilled from './paymenrFilled.svg?raw';

// 배송 관련
import parcel from './parcel.svg?raw';

// 숫자 아이콘들
import number0 from './number=0.svg?raw';
import number1 from './number=1.svg?raw';
import number2 from './number=2.svg?raw';
import number3 from './number=3.svg?raw';
import number4 from './number=4.svg?raw';
import number5 from './number=5.svg?raw';
import number6 from './number=6.svg?raw';
import number7 from './number=7.svg?raw';
import number8 from './number=8.svg?raw';
import number9 from './number=9.svg?raw';

// 상태 아이콘들
import newIcon from './New.svg?raw';
import minusCircleStroke from './minusCircleStroke.svg?raw';
import minusCircleFilled from './minusCircleFilled.svg?raw';
import addCircleStroke from './addCircleStroke.svg?raw';
import addCircleFilled from './addCircleFilled.svg?raw';

// 이메일 관련
import mailStroke from './mailStroke.svg?raw';
import mailFilled from './mailFilled.svg?raw';

// 로고들
import logoNaver from './logoNaver.svg?raw';
import logoKakao from './logoKakao.svg?raw';
import logoGoogle from './logoGoogle.svg?raw';
import logoApple from './logoApple.svg?raw';

// 보안 관련
import lock from './Lock.svg?raw';

// 위치 관련
import locationStroke from './locationStroke.svg?raw';
import locationFilled from './locationFilled.svg?raw';

// 이미지 관련
import image from './image.svg?raw';

// 신분증 관련
import idCardStroke from './idCardStroke.svg?raw';
import idCardFilled from './idCardFilled.svg?raw';

// 히스토리 관련
import historyStroke from './historyStroke.svg?raw';
import historyFilled from './historyFilled.svg?raw';

// 기타
import gym from './gym.svg?raw';
import guide from './guide.svg?raw';

// 삭제 관련
import deleteStroke from './deleteStroke.svg?raw';
import deleteFilled from './deleteFilled.svg?raw';

// 대시보드 관련
import dashboardStroke from './dashboardStroke.svg?raw';
import dashboardFilled from './dashboardFilled.svg?raw';

// 고객 서비스
import customerService from './customerService.svg?raw';

// 체크 서클 관련
import checkCircleStroke from './checkCircleStroke.svg?raw';
import checkCircleFilled from './checkCircleFilled.svg?raw';

// 주의 관련
import cautionStroke from './cautionStroke.svg?raw';
import cautionFilled from './cautionFilled.svg?raw';

// 취소 관련
import cancelStroke from './cancelStroke.svg?raw';
import cancelFilled from './cancelFilled.svg?raw';

// 통화 관련
import callStroke from './callStroke.svg?raw';
import callFilled from './callFilled.svg?raw';

// 북마크 관련
import bookmarkStroke from './bookmarkStroke.svg?raw';
import bookmarkFilled from './bookmarkFilled.svg?raw';

// 알림 관련
import bellStroke from './bellStroke.svg?raw';
import bellFilled from './bellFilled.svg?raw';

export const iconMap: Record<IconType, string> = {
  // 기본 아이콘들
  search,
  close,
  check,
  add,
  minus,
  truncation,
  more,
  hamburger,

  // 홈 관련
  home,
  'home-filled': homeFilled,
  'home-stroke': homeStroke,

  // 하트 관련
  heart,
  'heart-filled': heartFilled,
  'heart-stroke': heartStroke,

  // 프로필 관련
  'my-page': myPage,
  'my-page-filled': myPageFilled,
  'profile-stroke': profileStroke,
  'profile-filled': profileFilled,

  // 액션 아이콘들
  download,
  modify,
  duplicate,
  dialog,

  // 화살표 관련
  'arrow-down': arrowDown,
  'arrow-up': arrowUp,
  'arrow-right': arrowRight,
  'arrow-left': arrowLeft,
  'chevron-down': chevronDown,
  'chevron-up': chevronUp,
  'chevron-right': chevronRight,
  'chevron-left': chevronLeft,

  // 달력 관련
  calendar,
  'calendar-filled': calendarFilled,
  'calendar-stroke': calendar,

  // 시간 관련
  'time-stroke': timeStroke,
  'time-filled': timeFilled,

  // 스위치 관련
  'switch-circle-stroke': switchCircleStroke,
  'switch-circle-filled': switchCircleFilled,

  // 미디어 관련
  sound,
  'share-ios': shareIos,
  microphone,
  'camera-stroke': cameraStroke,
  'camera-filled': cameraFilled,

  // 설정 관련
  'settings-stroke': settingsStroke,
  'settings-filled': settingsFilled,
  reset,
  reload,

  // 폼 관련
  receipt,
  'radio-selected': radioSelected,
  'radio-resting': radioResting,
  'checkbox-selected-stroke': checkboxSelectedStroke,
  'checkbox-selected-filled': checkboxSelectedFilled,
  'checkbox-resting': checkboxResting,

  // 정보 관련
  'question-stroke': questionStroke,
  'question-filled': questionFilled,
  'info-stroke': infoStroke,
  'info-filled': infoFilled,
  qr,

  // 출력 관련
  print,

  // 사람 관련
  'person-stroke': personStroke,
  'person-filled': personFilled,

  // 결제 관련
  'payment-stroke': paymentStroke,
  'payment-filled': paymentFilled,

  // 배송 관련
  parcel,

  // 숫자 아이콘들
  'number-0': number0,
  'number-1': number1,
  'number-2': number2,
  'number-3': number3,
  'number-4': number4,
  'number-5': number5,
  'number-6': number6,
  'number-7': number7,
  'number-8': number8,
  'number-9': number9,

  // 상태 아이콘들
  new: newIcon,
  'minus-circle-stroke': minusCircleStroke,
  'minus-circle-filled': minusCircleFilled,
  'add-circle-stroke': addCircleStroke,
  'add-circle-filled': addCircleFilled,

  // 이메일 관련
  'mail-stroke': mailStroke,
  'mail-filled': mailFilled,

  // 로고들
  'logo-naver': logoNaver,
  'logo-kakao': logoKakao,
  'logo-google': logoGoogle,
  'logo-apple': logoApple,

  // 보안 관련
  lock,

  // 위치 관련
  'location-stroke': locationStroke,
  'location-filled': locationFilled,

  // 이미지 관련
  image,

  // 신분증 관련
  'id-card-stroke': idCardStroke,
  'id-card-filled': idCardFilled,

  // 히스토리 관련
  'history-stroke': historyStroke,
  'history-filled': historyFilled,

  // 기타
  gym,
  guide,

  // 삭제 관련
  'delete-stroke': deleteStroke,
  'delete-filled': deleteFilled,

  // 대시보드 관련
  'dashboard-stroke': dashboardStroke,
  'dashboard-filled': dashboardFilled,

  // 고객 서비스
  'customer-service': customerService,

  // 체크 서클 관련
  'check-circle-stroke': checkCircleStroke,
  'check-circle-filled': checkCircleFilled,

  // 주의 관련
  'caution-stroke': cautionStroke,
  'caution-filled': cautionFilled,

  // 취소 관련
  'cancel-stroke': cancelStroke,
  'cancel-filled': cancelFilled,

  // 통화 관련
  'call-stroke': callStroke,
  'call-filled': callFilled,

  // 북마크 관련
  'bookmark-stroke': bookmarkStroke,
  'bookmark-filled': bookmarkFilled,

  // 알림 관련
  'bell-stroke': bellStroke,
  'bell-filled': bellFilled,
};
