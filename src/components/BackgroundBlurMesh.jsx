const BackgroundBlurMesh = () => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 800 450"
      id="bbblurry"
      opacity="1"
      xmlns="http://www.w3.org/2000/svg"
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
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="41"
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
        <ellipse rx="175.5" ry="98.5" cx="590.7" cy="201.7" fill="#0f172a"></ellipse>
        <ellipse rx="175.5" ry="98.5" cx="4.87" cy="178.79" fill="#0f172a"></ellipse>
        <ellipse rx="175.5" ry="98.5" cx="843.91" cy="287.12" fill="#0f172a"></ellipse>
        <ellipse rx="175.5" ry="98.5" cx="219.39" cy="262.99" fill="#0f172a"></ellipse>
        <ellipse rx="175.5" ry="98.5" cx="329.69" cy="-41.05" fill="#0f172a"></ellipse>
      </g>
    </svg>
  );
};

export default BackgroundBlurMesh;
