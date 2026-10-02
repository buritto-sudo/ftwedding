import {
  BRIDE_FULLNAME,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대 메시지와 혼주 정보를 제공하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 모시는 글 섹션
 */
export const Invitation = () => {
  return (
    <>
      <LazyDiv className="card invitation">
        <h2 className="english">Invitation</h2>

        <div className="break" />

        {/* 초대 문구 */}
        <div className="content">우주를 한 사람으로 축소하고</div>
        <div className="content">그 한 사람을 신으로 확대하면</div>
        <div className="content">그것이 바로 사랑이기에</div>
        <div className="break" />
        <div className="content">서로가 서로의 온 우주가 되어준 두 사람이</div>
        <div className="content">이제 평생을 함께할 약속을 맺으려 합니다</div>
        <div className="content">귀한 걸음 하시어 저희의 새로운 시작을</div>
        <div className="break" />
        <div className="content">따뜻한 축복으로 밝혀주시면</div>
        <div className="content">더없는 기쁨이 되겠습니다.</div>

        <div className="break" />

        {/* 혼주 및 신랑 정보 */}
        <div className="name">
          {GROOM_FATHER} · {GROOM_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{GROOM_TITLE}</span>
          </span>{" "}
          {GROOM_FULLNAME}
        </div>
        {/* 혼주 및 신부 정보 */}
        <div className="name">
          {BRIDE_FATHER} · {BRIDE_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{BRIDE_TITLE}</span>
          </span>{" "}
          {BRIDE_FULLNAME}
        </div>
      </LazyDiv>
    </>
  )
}
