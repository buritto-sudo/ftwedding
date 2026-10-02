import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info" style={{ display: "block", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div className="transportation-icon-wrapper" style={{ margin: 0 }}>
              <BusIcon className="transportation-icon" />
            </div>
            <div className="heading" style={{ margin: 0, fontWeight: "bold" }}>대중교통</div>
          </div>
          
          <div className="content" style={{ textAlign: "left", lineHeight: "1.6", width: "100%", wordBreak: "keep-all" }}>
            <div style={{ marginBottom: "8px" }}>
              <b>* 리무진버스</b>
              <br />
              5001번 (40분 소요) 보람병원 입구 하차, 도보 5분
            </div>
            <div>
              <b>* KTX</b>
              <br />
              · 청량리역 - 태화강역 (2시간 10분), 택시 10분
              <br />
              · 서울역 - 울산역 (2시간 30분), 택시 40분 소요
            </div>
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info" style={{ display: "block" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div className="transportation-icon-wrapper" style={{ margin: 0 }}>
              <CarIcon className="transportation-icon" />
            </div>
            <div className="heading" style={{ margin: 0, fontWeight: "bold" }}>자가용 및 주차 안내</div>
          </div>
          
          <div className="content" style={{ textAlign: "left", lineHeight: "1.6", width: "100%", wordBreak: "keep-all" }}>
            네이버 지도, 카카오내비, 티맵 이용
            <br />
            <b>르엘컨벤션웨딩홀</b> 검색
            <br />
            <br />
            <b>[본관 주차장]</b>
            <br />
            · 롯데백화점, 롯데호텔, 별관 주차장
            <br />
            &nbsp;&nbsp;(뷔페에서 주차권 발급)
            <br />
            <br />
            <b>[대체 주차장 안내]</b>
            <br />
            · <b>제1대체</b> : 극동(이어도)주차장
            <br />
            &nbsp;&nbsp;도보 3분 / 뷔페에서 주차권 발급
            <br />
            &nbsp;&nbsp;울산 남구 달삼로 82
            <br />
            <br />
            · <b>제2대체</b> : 공구월드 상가 옆 공영주차장
            <br />
            &nbsp;&nbsp;도보 7분 / 주말 무료
            <br />
            &nbsp;&nbsp;울산 남구 갈밭로 16
            <br />
            <br />
            · <b>제3대체</b> : 삼산동 1공영주차장
            <br />
            &nbsp;&nbsp;도보 7분 / 주말 무료
            <br />
            &nbsp;&nbsp;울산 남구 삼산동 1622-3
            <br />
            <br />
            · <b>제4대체</b> : 농수산물 하이파킹 유료주차장
            <br />
            &nbsp;&nbsp;도보 7분 / 뷔페에서 주차권 발급
            <br />
            &nbsp;&nbsp;울산 남구 삼산동 1622-1
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
