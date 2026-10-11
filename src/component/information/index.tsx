import { useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { Modal } from "../modal"
import { AttendanceInfo } from "./attendance"

export const Information1 = () => {
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card" style={{ height: "auto", overflow: "visible" }}>
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

export const Information2 = () => {
  const donationModalState = useState(false)
  const [isGroom, setIsGroom] = useState(true)

  return (
    <>
      <div className="info-card" style={{ height: "auto", overflow: "visible" }}>
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
        <div className="content" style={{ padding: "8px 12px" }}>
          {(isGroom ? GROOM_INFO : BRIDE_INFO)
            .filter(({ account }) => !!account)
            .map(({ relation, name, account }) => (
              <div
                className="account-info"
                key={relation}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ textAlign: "left", flex: 1 }}>
                  <div className="name" style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#111", marginBottom: "4px" }}>
                    <span className="relation" style={{ color: "#666", marginRight: "4px" }}>{relation}</span> {name}
                  </div>
                  <div style={{ fontSize: "1.12rem", fontWeight: "bold", color: "#222" }}>{account}</div>
                </div>
                <Button
                  className="copy-button"
                  style={{ fontSize: "0.95rem", fontWeight: "bold", padding: "8px 12px", marginLeft: "8px", whiteSpace: "nowrap" }}
                  onClick={async () => {
                    if (account) {
                      try {
                        await navigator.clipboard.writeText(account)
                        alert(account + "\n복사되었습니다.")
                      } catch {
                        alert("복사에 실패했습니다.")
                      }
                    }
                  }}
                >
                  복사하기
                </Button>
              </div>
            ))}
        </div>
        <div className="footer" style={{ padding: "12px" }}>
          <Button
            buttonStyle="style2"
            className="bg-light-grey-color text-dark-color"
            style={{ fontSize: "1.05rem", padding: "8px 20px" }}
            onClick={() => donationModalState[1](false)}
          >
            닫기
          </Button>
        </div>
      </Modal>
    </>
  )
}

export const Information = () => {
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information" style={{ height: "auto", overflow: "visible" }}>
          <Information1 />
        </LazyDiv>
        <LazyDiv className="card information" style={{ height: "auto", overflow: "visible" }}>
          <Information2 />
        </LazyDiv>
      </>
    )
  }

  return (
    <LazyDiv className="card information" style={{ height: "auto", overflow: "visible" }}>
      <Information1 />
      <Information2 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
