import Title from "./Title"
import HeaderImg from "./HeaderImg"
import HeaderPages from "./HeaderPages"
import HeaderLink from "./HeaderLink"

export default function Header() {
  return (
    <div className="Header-Header">
      <div className="WebInfo">
        <HeaderImg />
        <Title />
      </div>
        <HeaderPages />
        <HeaderLink />
    </div>
  )
}
