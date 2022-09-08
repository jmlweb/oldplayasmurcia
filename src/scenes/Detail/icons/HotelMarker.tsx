const HotelMarker = () => (
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
    <g>
      <path
        d="M39 14v24a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V28H25v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10h10V14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"
        fill="#3b7ac8"
      />
    </g>
  </svg>
);

export default HotelMarker;
