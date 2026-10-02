import { Cover } from "./component/cover"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { STATIC_ONLY } from "./env"

/**
 * 메인 애플리케이션 컴포넌트입니다.
 * 초대장의 각 섹션을 조합하여 화면을 구성합니다.
 *
 * @returns {JSX.Element} 애플리케이션 화면
 */
function App() {
  return (
{/* 배경 애니메이션 효과 (예: 꽃잎 내리기) */}

{/* 메인 커버 섹션 */}

{/* 모시는 글 섹션 */}

{/* 갤러리 섹션 */}

{/* 오시는 길 및 안내 정보 섹션 */}

{!STATIC_ONLY && (

{/* 방명록 섹션 */}
)}

)
}
export default App
