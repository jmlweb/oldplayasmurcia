const CampingMarker = () => (
  <svg
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
  >
    <path
      d="M55 26a25.014 25.014 0 0 1-15.47 23.12l-8.02 9.19a2 2 0 0 1-3.02 0l-8.02-9.19A25 25 0 1 1 55 26z"
      fill="#3b7ac8"
    />
    <path d="M14 38a20 20 0 1 1 32 0l-1 1H15z" fill="#f9f9f9" />
    <path d="M46 38a20 20 0 0 1-32 0z" fill="#513b34" />
    <path
      d="M30 17.38a1 1 0 0 1-.86-.491l-2-3.38a1 1 0 1 1 1.72-1.018L30 14.416l1.14-1.925a1 1 0 0 1 1.72 1.018l-2 3.38a1 1 0 0 1-.86.491z"
      fill="#8f5c4a"
    />
    <g data-name="Over Outlines">
      <path d="M44 38H16l14-23.62z" fill="#56b38f" />
      <path
        d="M38 38a13.024 13.024 0 0 1-8-12 13.024 13.024 0 0 1-8 12z"
        fill="#48826b"
      />
    </g>
    <g data-name="Outer Lines">
      <path
        d="M30 35a1 1 0 0 1-1-1V24a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
        fill="#48826b"
      />
    </g>
  </svg>
);

export default CampingMarker;
