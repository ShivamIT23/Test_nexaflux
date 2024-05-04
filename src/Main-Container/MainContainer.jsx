import MainDesc from "./MainDesc";
import MainImg from "./MainImg";
import MainHeading from "./MainHeading";
import MainMsg from "./MainMsg";

export default function MainContainer() {
  return (
    <div className="MainContainer">
        <MainHeading />
        <MainMsg />
        <MainImg />
        <MainDesc />
    </div>
  )
}
