import { createElement as h } from "react"
import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"

export default function App() {
  return h(
    "div",
    { className: "background" },
    h(BGEffect),
    h(
      "div",
      { className: "card-view" },
      h(LazyDiv, { className: "card-group" }, h(Cover), h(Invitation)),
      h(LazyDiv, { className: "card-group" }, h(Gallery)),
      h(LazyDiv, { className: "card-group" }, h(Location)),
      h(LazyDiv, { className: "card-group" }, h(Information))
    )
  )
}
