import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const styles = {
  dateBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    color: "#1f2937",
  },
  dot: {
    color: "#d1d5db",
    fontWeight: 300,
  },
  dayOfWeek: {
    fontSize: "13px",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#6b7280",
    marginTop: "4px",
    fontWeight: 500,
  },
  imageWrapper: {
    margin: "20px 0 16px",
  },
  subtitle: {
    fontSize: "12px",
    letterSpacing: "0.1em",
    color: "#9ca3af",
  },
  names: {
    margin: "10px 0 24px",
    fontSize: "20px",
    fontWeight: 600,
  },
  divider: {
    display: "inline-block",
    margin: "0 10px",
  },
  footerBox: {
    borderTop: "1px solid #f3f4f6",
    paddingTop: "20px",
    marginTop: "8px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    alignItems: "center",
    width: "100%",
  },
  datetime: {
    fontSize: "19px",
    fontWeight: 700,
    color: "#111827",
    lineHeight: "1.4",
    whiteSpace: "nowrap" as const,
  },
  location: {
    fontSize: "15px",
    color: "#374151",
    fontWeight: 600,
    lineHeight: "1.4",
    whiteSpace: "nowrap" as const,
    wordBreak: "keep-all" as const,
  },
}

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      {/* 날짜 */}
      <div className="wedding-date" style={styles.dateBox}>
        <span>{WEDDING_DATE.format("YYYY")}</span>
        <span style={styles.dot}>·</span>
        <span>{WEDDING_DATE.format("MM")}</span>
        <span style={styles.dot}>·</span>
        <span>{WEDDING_DATE.format("DD")}</span>
      </div>

      {/* 요일 */}
      <div className="wedding-day-of-week" style={styles.dayOfWeek}>
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>

      {/* 커버 이미지 */}
      <div className="image-wrapper" style={styles.imageWrapper}>
        <img src={COVER_IMAGE} alt="sample" />
      </div>

      <div className="subtitle" style={styles.subtitle}>
        Save the date for the wedding of
      </div>

      {/* 신랑 신부 이름 */}
      <div className="names" style={styles.names}>
        {GROOM_FULLNAME}
        <div className="divider" style={styles.divider} />
        {BRIDE_FULLNAME}
      </div>

      {/* 일시 및 장소 (한 줄 고정) */}
      <div style={styles.footerBox}>
        <div style={styles.datetime}>
          {WEDDING_DATE.format(WEDDING_DATE_FORMAT)}
        </div>
        <div style={styles.location}>
          {LOCATION}
        </div>
      </div>
    </LazyDiv>
  )
}
