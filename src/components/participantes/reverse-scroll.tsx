import Image from "next/image";

export default function ReverseScroll() {
  return (
    <div className="w-full inline-flex flex-nowrap group">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse group-hover:paused">
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse1.png" alt="Facebook" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse2.png" alt="Disney" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse3.png" alt="Airbnb" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse4.png" alt="Apple" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse5.png" alt="Spark" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse6.png" alt="Samsung" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse3.png" alt="Quora" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse4.png" alt="Sass" />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse group-hover:paused"
        aria-hidden="true"
      >
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse1.png" alt="Facebook" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse2.png" alt="Disney" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse3.png" alt="Airbnb" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse4.png" alt="Apple" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse5.png" alt="Spark" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse6.png" alt="Samsung" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse3.png" alt="Quora" />
        </li>
        <li className="transform-gpu transition-transform hover:scale-110">
          <img src="/home/participantes/Ellipse4.png" alt="Sass" />
        </li>
      </ul>
    </div>
  );
}
