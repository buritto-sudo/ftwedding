import { Cover } from "./component/cover"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { STATIC_ONLY } from "./env"
function App() {
return (
{!STATIC_ONLY && (

)}

)
}
export default App
