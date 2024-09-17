import { useState } from "react";

export default function FiveStars({ dynamic = false, rating, setRating }) {
  const [hoveringIndex, setHoveringIndex] = useState(rating);
  if (!dynamic) {
    return (
      <div className="flex items-center ">
        {" "}
        {[...Array(5)].map((elem, index) => {
          return (
            <svg
              key={index + 1}
              style={{
                filter: `${
                  index + 1 <= rating || index + 1 <= hoveringIndex
                    ? " brightness(0) saturate(100%) invert(75%) sepia(34%) saturate(4223%) hue-rotate(358deg) brightness(100%) contrast(105%)"
                    : "none"
                }`,
              }}
              className="  "
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0598 19C15.8999 19.0006 15.7421 18.9629 15.5998 18.89L10.4998 16.22L5.39979 18.89C5.06192 19.0677 4.65238 19.0375 4.34422 18.8122C4.03605 18.5869 3.88302 18.2058 3.94979 17.83L4.94979 12.2L0.829788 8.19999C0.567845 7.93859 0.471673 7.5539 0.579788 7.19999C0.698032 6.83741 1.01221 6.57366 1.38979 6.51999L7.08979 5.68999L9.59979 0.55999C9.76688 0.215 10.1165 -0.00411987 10.4998 -0.00411987C10.8831 -0.00411987 11.2327 0.215 11.3998 0.55999L13.9398 5.67999L19.6398 6.50999C20.0174 6.56366 20.3315 6.82741 20.4498 7.18999C20.5579 7.5439 20.4617 7.92859 20.1998 8.18999L16.0798 12.19L17.0798 17.82C17.1527 18.2028 16.9966 18.5931 16.6798 18.82C16.4987 18.9469 16.2807 19.0102 16.0598 19Z"
                fill="#919EAB"
              />
            </svg>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex">
      {" "}
      {[...Array(5)].map((elem, index) => {
        return (
          <svg
            onMouseEnter={(e) => setHoveringIndex(index + 1)}
            onMouseLeave={(e) => setHoveringIndex(1)}
            key={index + 1}
            style={{
              filter: `${
                index + 1 <= rating || index + 1 <= hoveringIndex
                  ? " brightness(0) saturate(100%) invert(75%) sepia(34%) saturate(4223%) hue-rotate(358deg) brightness(100%) contrast(105%)"
                  : "none"
              }`,
            }}
            onClick={(e) => setRating(index + 1)}
            className="cursor-pointer  "
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0598 19C15.8999 19.0006 15.7421 18.9629 15.5998 18.89L10.4998 16.22L5.39979 18.89C5.06192 19.0677 4.65238 19.0375 4.34422 18.8122C4.03605 18.5869 3.88302 18.2058 3.94979 17.83L4.94979 12.2L0.829788 8.19999C0.567845 7.93859 0.471673 7.5539 0.579788 7.19999C0.698032 6.83741 1.01221 6.57366 1.38979 6.51999L7.08979 5.68999L9.59979 0.55999C9.76688 0.215 10.1165 -0.00411987 10.4998 -0.00411987C10.8831 -0.00411987 11.2327 0.215 11.3998 0.55999L13.9398 5.67999L19.6398 6.50999C20.0174 6.56366 20.3315 6.82741 20.4498 7.18999C20.5579 7.5439 20.4617 7.92859 20.1998 8.18999L16.0798 12.19L17.0798 17.82C17.1527 18.2028 16.9966 18.5931 16.6798 18.82C16.4987 18.9469 16.2807 19.0102 16.0598 19Z"
              fill="#919EAB"
            />
          </svg>
        );
      })}
    </div>
  );
}
