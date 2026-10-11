import { useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { Modal } from "../modal"
import { AttendanceInfo } from "./attendance"

/**
 * 식사 정보 안내 컴포넌트입니다.
 */
export const Information1 = () => {
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card" style={{ height: "auto", minHeight: "auto", overflow: "visible" }}>
        <div className="label" style={{ fontSize: "1.15rem", fontWeight: "bold", marginBottom: "6px" }}>
          식사 안내
        </div>
        <div className="content" style={{ fontSize: "1.08rem", lineHeight: "1.8", color: "#222" }}>
          식사시간: 12시 50분 ~ 14시 50분
          <br />
          장소: 지하 1층 연회장 뷔페 아스토
        </div>
      </div>
    </>
  )
}

/**
 * 축의금 계좌번호 안내 컴포넌트입니다.
 * 신랑측, 신부측 계좌번호를 모달로 보여줍니다.
 */
export const Information2 = () => {
  const donationModalState = useState(false)
  const [isGroom, setIsGroom] = useState(true)

  return (
    <>
      <div className="info-card" style={{ height: "auto", minHeight: "auto", overflow: "visible" }}>
        <div className="label" style={{ fontSize: "1.15rem", fontWeight: "bold", marginBottom: "6px" }}>
          마음 전하기
        </div>
        <div className="content" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#333" }}>
          참석이 어려워 직접 축하해주지 못하는
          <br />
          분들을 위해 계좌번호를 기재하였습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%", fontSize: "1.08rem", padding: "10px 0", fontWeight: "bold" }}
          onClick={() => {
            donationModalState[1](true)
            setIsGroom(true)
          }}
        >
          신랑측 계좌번호 보기
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%", fontSize: "1.08rem", padding: "10px 0", fontWeight: "bold" }}
          onClick={() => {
            donationModalState[1](true)
            setIsGroom(false)
          }}
        >
          신부측 계좌번호 보기
        </Button>
      </div>

      {/* 계좌 정보 모달 */}
      <Modal
        modalState={donationModalState}
        className="donation-modal"
        closeOnClickBackground={true}
      >
        <div className="header" style={{ padding: "12px" }}>
          <div className="title" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {isGroom ? "신랑측 계좌번호" : "신부측 계좌번호"}
          </div>
        </div>
        <div className
