import ReverseScroll from "./reverse-scroll";
import Scroll from "./scroll";
import Title from "./title";

export default function Participantes() {
  return (
    <div className="py-52 space-y-20">
      <Title />
      <div>
        <Scroll />
        <ReverseScroll />
        <Scroll />
      </div>
    </div>
  );
}
