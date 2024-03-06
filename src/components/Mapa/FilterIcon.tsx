import React from "react";

function FilterIconDeactive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="18"
      fill="none"
      viewBox="0 0 47 18"
    >
      <g filter="url(#filter0_b_137_1316)">
        <rect width="47" height="18" fill="#0077C2" rx="9"></rect>
      </g>
      <circle cx="13.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <circle cx="23.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <circle cx="33.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <defs>
        <filter
          id="filter0_b_137_1316"
          width="161.8"
          height="132.8"
          x="-57.4"
          y="-57.4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="28.7"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_137_1316"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_137_1316"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

function FilterIconActive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="18"
      fill="none"
      viewBox="0 0 47 18"
    >
      <g filter="url(#filter0_b_136_849)">
        <rect
          width="47"
          height="18"
          fill="#2A5DAD"
          fillOpacity="0.3"
          rx="9"
        ></rect>
      </g>
      <circle cx="13.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <circle cx="23.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <circle cx="33.5" cy="9.5" r="2.5" fill="#fff"></circle>
      <defs>
        <filter
          id="filter0_b_136_849"
          width="161.8"
          height="132.8"
          x="-57.4"
          y="-57.4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="28.7"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_136_849"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_136_849"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export { FilterIconDeactive, FilterIconActive };
