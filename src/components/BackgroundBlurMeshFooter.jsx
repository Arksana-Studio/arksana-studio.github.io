"use client";

const BackgroundBlurMesh = (className) => {
  return (
    <div className={""}>
      <svg
        className={"w-full h-96"}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 450"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters={"sRGB"}
          >
            <feGaussianBlur
              stdDeviation="50"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="245"
            ry="27.5"
            cx="361.1565080122514"
            cy="206.81150540438568"
            fill="hsla(222, 47%, 11%, 1.00)"
          ></ellipse>
          <ellipse
            rx="245"
            ry="27.5"
            cx="721.360068581321"
            cy="272.4551447088068"
            fill="hsla(222, 47%, 11%, 1.00)"
          ></ellipse>
          <ellipse
            rx="245"
            ry="27.5"
            cx="-23.13426069779831"
            cy="269.5333779074929"
            fill="hsla(222, 47%, 11%, 1.00)"
          ></ellipse>
        </g>
      </svg>
    </div>
  );
};

export default BackgroundBlurMesh;
