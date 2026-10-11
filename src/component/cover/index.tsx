import { BRIDE_FULLNAME, GROOM_FULLNAME, LOCATION, WEDDING_DATE, WEDDING_DATE_FORMAT } from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      {/* 날짜 */}
      <div className="wedding-date" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "24px", fontWeight: 700, letterSpacing: "0.05em", color: "#1f2937" }}>
        <span>{WEDDING_DATE.format("YYYY")}</span>
        <span style={{ color: "#d1d5db", fontWeight: 300 }}>·</span>
        <span>{WEDDING_DATE.format("MM")}</span>
        <span style={{ color: "#d1d5db", fontWeight: 300 }}>·</span>
        <span>{WEDDING_DATE.format("DD")}</span>
      </div>

      {/* 요일 */}
      <div className="wedding-day-of-week" style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginTop: "4px", fontWeight: 500 }}>
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>

      {/* 이미지 */}
      <div className="image-wrapper" style={{ margin: "20px 0 16px" }}>
        <img src={COVER_IMAGE} alt="sample" />
      </div>

      <div className="subtitle" style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#9ca3af" }}>
        Save the date for the wedding of
      </div>

      {/* 신랑 신부 이름 */}
      <div className="names" style={{ margin: "10px 0 24px", fontSize: "20px", fontWeight: 600 }}>
        {GROOM_FULLNAME}
        <div className="divider" style={{ display: "inline-block", margin: "0 10px" }} />
        {BRIDE_FULLNAME}
      </div>

      {/* 일시 및 장소 (크리스탈볼룸 한 줄 고정) */}
      <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", width: "100%" }}>
        <div style={{ fontSize: "19px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01
