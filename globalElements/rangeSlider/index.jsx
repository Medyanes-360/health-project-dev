import { useRef, useState } from "react";
import styles from "./styles.module.css";
export default function RangeSlider({
  minimumValue,
  maximumValue,
  steps,
  minRangeValueGap,
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
    <div className={styles.sliderWrapper}>
      <div className={`${styles.sliderContainer}`}>
        <div className={`${styles.slider}`}>
          <span ref={rangeSpan} className={`${styles.rangeSpan}`}></span>

          <input
            className={`${styles.maxInput} ${styles.rangeInput}`}
            ref={minInput}
            type="range"
            min={minimumValue}
            max={maximumValue}
            value={minValue}
            onChange={changeHandler}
            step={steps}
          />
          <input
            className={`${styles.maxInput} ${styles.rangeInput}`}
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
      <div className={styles.valuesWrapper}>
        {" "}
        <span ref={minValSpan} className={`${styles.minValSpan}`}>
          0$
        </span>
        <span ref={maxValSpan} className={`${styles.maxValSpan}`}>
          50000$
        </span>
      </div>
    </div>
  );
}
