"use client";
import { useRef, useState } from "react";

export default function BeforeAfterPhotoSlider({
  width,
  containerclassname,
  afterImageSrc,
  beforeImageSrc,
}) {
  const foregroundImgRef = useRef(null);
  const sliderButtonRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);
  const changeHandler = (e) => {
    const sliderPos = e.target.value;
    setSliderValue(sliderPos);
    if (foregroundImgRef.current && sliderButtonRef.current) {
      foregroundImgRef.current.style.width = `${sliderPos}%`;
      sliderButtonRef.current.style.left = `calc(${sliderPos}% - 18px)`;
    }
  };

  return (
    <div
      className={`${containerclassname}   !relative   h-full border-2 border-white `}
    >
      <div
        style={{
          backgroundImage: `url(${beforeImageSrc})`,
          backgroundSize: `${width} 100%`,
        }}
        className="   absolute top-0 left-0 w-full h-full bg-no-repeat "
      ></div>
      <div
        ref={foregroundImgRef}
        style={{
          backgroundImage: `url(${afterImageSrc})`,

          backgroundSize: `${width} 100%`,
        }}
        className=" w-[50%]  absolute top-0 left-0  h-full bg-no-repeat "
      ></div>
      <input
        type="range"
        min="1"
        value={sliderValue}
        onChange={changeHandler}
        max="100"
        className=" hover:bg-[rgba(242, 242, 242, 0.1)]  absolute appearance-none w-full h-full m-0 flex justify-center items-center bg-transparent outline-none transition-all duration-700
        
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-1
    [&::-webkit-slider-thumb]:h-full
    [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:w-1 
    [&::-moz-range-thumb]:h-full 
    [&::-moz-range-thumb]:bg-white
    [&::-moz-range-thumb]:cursor-pointer
    
    
    
    
    "
        step={0.1}
      />
      <div
        style={{}}
        ref={sliderButtonRef}
        class="
      pointer-events-none  absolute w-8 h-8 self-center  bg-white flex justify-center items-center
      rounded-[50%]
      left-[calc(50%-18px)]
      top-[calc(50%-18px)]
      

       [&:after]:p-1
       [&:after]:inline-block
       [&:after]:content-['']
       
       [&:after]:border-l-0
       [&:after]:border-r-2
       [&:after]:border-t-0
       [&:after]:border-b-2
       
       [&:after]:border-[#5d5d5d]
       [&:after]:rotate-[-45deg]
       [&:before]:p-1
       [&:before]:inline-block
       [&:before]:content-['']
       [&:before]:border-[#5d5d5d]
       
       [&:before]:border-l-2
       [&:before]:border-r-0
       [&:before]:border-t-2
       [&:before]:border-b-0
       [&:before]:rotate-[-45deg]

      "
      ></div>
    </div>
  );
}
