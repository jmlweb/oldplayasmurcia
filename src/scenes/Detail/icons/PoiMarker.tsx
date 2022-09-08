const PoiMarker = () => (
  <svg
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
  >
    <path
      d="M55 26a25.014 25.014 0 0 1-15.47 23.12l-8.02 9.19a2 2 0 0 1-3.02 0l-8.02-9.19A25 25 0 1 1 55 26z"
      fill="#3b7ac8"
    />
    <circle cx="30" cy="26" fill="#f9f9f9" r="20" />
    <g fill="#3b7ac8">
      <path d="M40.958 20.032A11.022 11.022 0 0 1 32 31.82V32a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.059A1.974 1.974 0 0 1 30.026 28a7 7 0 1 0-6.974-7.858.985.985 0 0 1-.983.858h-2.013a1.01 1.01 0 0 1-1-1.11 11 11 0 0 1 21.9.142z" />
      <rect height="4" rx="1" width="4" x="28" y="37" />
    </g>
  </svg>
);

export default PoiMarker;
