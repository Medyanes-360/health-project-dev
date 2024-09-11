import { useRef, useState } from "react";
export default function RangeSlider({
  minimumValue = 0, // inputların gidebileceği min değer
  maximumValue = 100, // inputların gidebileceği max değer
  steps = 1, // inputların kaçar kaçar artacağı
  minRangeValueGap = 0, // inputlar arasında en az ne kadar fark olabilir? örneğin gap=1000 ise inputların arasındaki fark max 1000 olabilir. (3000-4000 gibi.)
}) {
  const [minValue, setMinValue] = useState(minimumValue);
  const [maxValue, setMaxValue] = useState(maximumValue);

  const minInput = useRef(null);
  const maxInput = useRef(null);
  const rangeSpan = useRef(null);
  const minValSpan = useRef(null);
  const maxValSpan = useRef(null);

  const rangeFill = () => {
    rangeSpan.current.style.left =
      (minInput.current.value / minInput.current.max) * 100 + "%";
    rangeSpan.current.style.right =
      100 - (maxInput.current.value / maxInput.current.max) * 100 + "%";
  };

  const setMinValueOutput = (value) => {
    setMinValue(value);
    minValSpan.current.innerHTML = value + "$";
  };
  const setMaxValueOutput = (value) => {
    setMaxValue(value);
    maxValSpan.current.innerHTML = value + "$";
  };

  const changeHandler = (e) => {
    if (e.target == minInput.current) {
      if (maxValue - e.target.value > minRangeValueGap) {
        setMinValueOutput(e.target.value);
        minInput.current.style.zIndex = "2";
        maxInput.current.style.zIndex = "1";
      } else {
        setMinValueOutput(maxValue - minRangeValueGap);
        minInput.current.style.zIndex = "2";
        maxInput.current.style.zIndex = "1";
      }
    } else {
      if (e.target.value - minValue > minRangeValueGap) {
        setMaxValueOutput(e.target.value);
        minInput.current.style.zIndex = "1";
        maxInput.current.style.zIndex = "2";
      } else {
        setMaxValueOutput(parseInt(minValue) + parseInt(minRangeValueGap));
        minInput.current.style.zIndex = "1";
        maxInput.current.style.zIndex = "2";
      }
    }

    rangeFill();
  };

  return (
    <div className="relative flex flex-col overflow-visible m-auto items-center justify-center w-[95%]">
      <div
        className={`rounded-2xl  relative w-full h-12 bg-white flex m-auto justify-center items-center`}
      >
        <div className={`rounded-2xl  w-full h-[6px]  relative bg-[#dddddd] `}>
          <span
            ref={rangeSpan}
            className={`rounded-2xl h-full absolute left-0 right-0  bg-primary `}
          ></span>

          <input
            className="absolute w-full h-0  appearance-none pointer-events-none bg-none  top-[50%] -translate-y-[50%]
            hover:[&::-webkit-slider-thumb]:h-6
            hover:[&::-webkit-slider-thumb]:w-6
            hover:[&::-webkit-slider-thumb]:transition-all
            hover:[&::-webkit-slider-thumb]:duration-100
            hover:[&::-webkit-slider-thumb]:ease-out
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:mb-0
            [&::-webkit-slider-thumb]:rounded-[50%]
            [&::-webkit-slider-thumb]:shadow-[0px_4px_12px_0px_#0000005c]
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:rounded-[50%]
            [&::-moz-range-thumb]:shadow-[0px_4px_12px_0px_#0000005c]
            [&::-moz-range-thumb]:appearance-none
            
            [&::-moz-range-thumb]:mt-[30%]
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:cursor-pointer



            
            
          "
            ref={minInput}
            type="range"
            min={minimumValue}
            max={maximumValue}
            value={minValue}
            onChange={changeHandler}
            step={steps}
          />
          <input
            className="absolute w-full h-0 appearance-none pointer-events-none bg-none  top-[50%] -translate-y-[50%]
            hover:[&::-webkit-slider-thumb]:h-6
            hover:[&::-webkit-slider-thumb]:w-6
            hover:[&::-webkit-slider-thumb]:transition-all
            hover:[&::-webkit-slider-thumb]:duration-100
            hover:[&::-webkit-slider-thumb]:ease-out
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:mb-0
            [&::-webkit-slider-thumb]:rounded-[50%]
            [&::-webkit-slider-thumb]:shadow-[0px_4px_12px_0px_#0000005c]
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:rounded-[50%]
            [&::-moz-range-thumb]:shadow-[0px_4px_12px_0px_#0000005c]
            [&::-moz-range-thumb]:appearance-none
            
            [&::-moz-range-thumb]:mt-[30%]
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:cursor-pointer



            
            
          "
            ref={maxInput}
            type="range"
            min={minimumValue}
            max={maximumValue}
            value={maxValue}
            onChange={changeHandler}
            step={steps}
          />
        </div>
      </div>
      <div className="relative w-full flex justify-between items-center">
        {" "}
        <span ref={minValSpan} className={`text-xs text-gray-600`}>
          0$
        </span>
        <span ref={maxValSpan} className={`text-xs text-gray-600`}>
          50000$
        </span>
      </div>
    </div>
  );
}
