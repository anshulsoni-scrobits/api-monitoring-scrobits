import React from "react";
const Sidebar = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <div className="sidebar">
        <div>
          <svg
            id="dash"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
              fill="#0075FF"
            />
            <path
              d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
              fill="#0075FF"
            />
            <path
              d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
              fill="#0075FF"
            />
            <path
              d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
              fill="#0075FF"
            />
          </svg>
          <button id="Dashboard" type="button">
            Dashboard
          </button>
        </div>
        <br></br>
        <div>
          <svg
            id="addp"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 4.63998L6.31997 2.44998C3.92997 1.27998 1.96997 2.46998 1.96997 5.08998V19.93C1.96997 21.07 2.91997 22 4.07997 22H11.5C12.05 22 12.5 21.55 12.5 21V7.40998C12.5 6.35998 11.71 5.10998 10.75 4.63998ZM8.96997 13.75H5.49997C5.08997 13.75 4.74997 13.41 4.74997 13C4.74997 12.59 5.08997 12.25 5.49997 12.25H8.96997C9.37997 12.25 9.71997 12.59 9.71997 13C9.71997 13.41 9.38997 13.75 8.96997 13.75ZM8.96997 9.74998H5.49997C5.08997 9.74998 4.74997 9.40998 4.74997 8.99998C4.74997 8.58998 5.08997 8.24998 5.49997 8.24998H8.96997C9.37997 8.24998 9.71997 8.58998 9.71997 8.99998C9.71997 9.40998 9.38997 9.74998 8.96997 9.74998Z"
              fill="white"
            />
            <path
              d="M22 18.04V19.5C22 20.88 20.88 22 19.5 22H14.97C14.43 22 14 21.57 14 21.03V18.87C15.07 19 16.2 18.69 17.01 18.04C17.69 18.59 18.56 18.92 19.51 18.92C20.44 18.92 21.31 18.59 22 18.04Z"
              fill="white"
            />
            <path
              d="M22 15.05V15.06C21.92 16.37 20.85 17.42 19.51 17.42C18.12 17.42 17.01 16.29 17.01 14.92C17.01 16.45 15.6 17.68 14 17.37V12C14 11.36 14.59 10.88 15.22 11.02L17.01 11.42L17.49 11.53L19.53 11.99C20.02 12.09 20.47 12.26 20.86 12.51C20.86 12.52 20.87 12.52 20.87 12.52C20.97 12.59 21.07 12.67 21.16 12.76C21.62 13.22 21.92 13.89 21.99 14.87C21.99 14.93 22 14.99 22 15.05Z"
              fill="white"
            />
          </svg>
          <button id="add_project" type="button">
            Add Project
          </button>
        </div>
        <br></br>
        <div>
          <svg
            id="log-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="#E5E5E5" />
            <rect
              width="1440"
              height="1024"
              transform="translate(-41 -920)"
              fill="#111315"
            />
            <rect x="-41" y="-920" width="230" height="1024" fill="#1A1D1F" />
            <path
              d="M16.3135 8.0625L20.2499 12L16.3135 15.9375"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75 12H20.2472"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button id="logout" type="button">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
