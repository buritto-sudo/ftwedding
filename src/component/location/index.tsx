import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 주소 정보만 표시합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <LazyDiv className="card location">
      <h2 className="english">Location</h2>
      <div className="addr">
        {LOCATION}
        <div className="detail">{LOCATION_ADDRESS}</div>
      </div>
      <Map />
    </LazyDiv>
  )
}
