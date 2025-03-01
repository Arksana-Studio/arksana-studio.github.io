const MiddleBlur = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 450"
      opacity="1"
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
            stdDeviation="255"
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
          rx="90"
          ry="90"
          cx="400"
          cy="215"
          fill="hsla(222, 47%, 11%, 1.00)"
        ></ellipse>
      </g>
    </svg>
  );
};

export default MiddleBlur;
