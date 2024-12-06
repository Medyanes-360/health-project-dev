"use client";

import React, { useState } from "react";

export default function BeforeAfterPhotoSlider({
  afterImageSrc,
  beforeImageSrc,
}) {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <div
              className="grid place-items-center"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-1 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <div
                    className="
//       pointer-events-none absolute w-8 h-8 self-center bg-white flex justify-center items-center
//       rounded-[50%]
//       left-[calc(50%-18px)]
//       top-[calc(50%-18px)]

//        [&:after]:p-1
//        [&:after]:inline-block
//        [&:after]:content-['']

//        [&:after]:border-l-0
//        [&:after]:border-r-2
//        [&:after]:border-t-0
//        [&:after]:border-b-2

//        [&:after]:border-[#5d5d5d]
//        [&:after]:rotate-[-45deg]
//        [&:before]:p-1
//        [&:before]:inline-block
//        [&:before]:content-['']
//        [&:before]:border-[#5d5d5d]

//        [&:before]:border-l-2
//        [&:before]:border-r-0
//        [&:before]:border-t-2
//        [&:before]:border-b-0
//        [&:before]:rotate-[-45deg]

//       "
                  ></div>
                </button>
              </div>
              <div
                style={{
                  backgroundImage: `url(${beforeImageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
                className="absolute top-0 left-0 z-10 w-full h-full select-none"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${afterImageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="absolute top-0 left-0 w-full h-full select-none"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
