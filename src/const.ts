import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

// dayjs 설정: UTC 및 타임존 플러그인 확장, 한국어 로캘 설정
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/**
 * 예식 일시 설정
 * Asia/Seoul 타임존 기준으로 설정합니다.
 */
export const WEDDING_DATE = dayjs.tz("2026-11-15 12:50", "Asia/Seoul")

/**
 * 예식 일시 포맷
 * 분이 0이면 분을 생략하고, 그 외에는 표시합니다.
 * 예: 2024년 8월 24일 토요일 오후 1시
 */
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

/**
 * 예식 당월 휴무일 (달력 표시용)
 * 예: 8월 15일 광복절
 */
export const HOLIDAYS = []

/**
 * 예식 장소 명칭
 */
export const LOCATION = "울산롯데호텔 2층 르엘컨벤션웨딩홀 크리스탈볼룸"

/**
 * 예식 장소 상세 주소
 */
export const LOCATION_ADDRESS = "울산광역시 남구 삼산로 282 롯데호텔울산"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소
 * 필요에 따라 LOCATION과 다르게 설정할 수 있습니다.
 */
export const SHARE_ADDRESS = "르엘컨벤션웨딩홀"

/**
 * 카카오톡 공유 시 표시될 위치 제목
 */
export const SHARE_ADDRESS_TITLE = "르엘컨벤션웨딩홀"

/**
 * 지도 서비스(네이버, 카카오)에 사용할 좌표 [경도, 위도]
 */
export const WEDDING_HALL_POSITION = [129.3382, 35.5385]

/**
 * 네이버 지도 장소 ID (NMAP_PLACE_ID)
 * 네이버 지도에서 장소 검색 후 URL의 숫자 부분을 입력합니다.
 */
export const NMAP_PLACE_ID = 1560466592

/**
 * 카카오 지도 장소 ID (KMAP_PLACE_ID)
 * 카카오 지도에서 장소 상세보기 클릭 후 URL의 숫자 부분을 입력합니다.
 */
export const KMAP_PLACE_ID = 809780456

// 신부 정보 설정
export const BRIDE_FULLNAME = "박진경"
export const BRIDE_FIRSTNAME = "진경"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "박주삼"
export const BRIDE_MOTHER = "허경미"

/**
 * 신부측 연락처 및 계좌 정보
 */
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "",
    account: "국민은행 62060201358829",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "",
    account: "농협은행 3522153314233",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "",
    account: "농협은행 3020892942611",
  },
]

// 신랑 정보 설정
export const GROOM_FULLNAME = "김현우"
export const GROOM_FIRSTNAME = "현우"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "김태희"
export const GROOM_MOTHER = "김종숙"

/**
 * 신랑측 연락처 및 계좌 정보
 */
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "",
    account: "카카오뱅크 3333345184762",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "",
    account: "농협은행 3561319588523",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "",
    account: "농협은행 3010094259611",
  },
]
