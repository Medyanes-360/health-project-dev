"use client";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const box = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at 265px 265px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function AssistantBox() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      className="fixed bottom-0 right-0 z-[500000] w-[300px] h-[300px]"
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={
          "p-2 absolute bottom-0 right-0 rounded-2xl w-[300px] h-[300px] bg-white"
        }
        variants={box}
      >
        {/* assistant header */}
        <div className="bg-white-dark text-center">
          <p>Asistan</p>
        </div>
        {/* Assistant body */}
        <div className="py-2">
          <p>Some Message</p>
          <div className="w-[90%] my-1 rounded-md m-auto text-center bg-black/20 ">
            Category 1 Seçiniz
          </div>
          <div className="w-[90%] my-1 rounded-md m-auto text-center bg-black/20 ">
            category 1
          </div>
          <div className="w-[90%] my-1 rounded-md m-auto text-center bg-black/20 ">
            category 1
          </div>
        </div>
      </motion.div>

      <button
        className={
          " absolute bottom-[10px] right-[10px] w-[50px] h-[50px] rounded-full bg-transparent"
        }
        onClick={() => toggleOpen()}
      >
        <AssistantSVG />
      </button>
    </motion.nav>
  );
}

const AssistantSVG = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M213.333333 554.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z"
          fill="#FFA726"
        ></path>
        <path
          d="M810.666667 554.666667m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z"
          fill="#FFA726"
        ></path>
        <path
          d="M832 405.333333c0-270.933333-640-177.066667-640 0v213.333334c0 177.066667 142.933333 320 320 320s320-142.933333 320-320V405.333333z"
          fill="#FFB74D"
        ></path>
        <path
          d="M512 64C311.466667 64 149.333333 226.133333 149.333333 426.666667v72.533333L192 533.333333v-64l448-209.066666 192 209.066666v64l42.666667-34.133333V426.666667c0-170.666667-121.6-362.666667-362.666667-362.666667z"
          fill="#FF5722"
        ></path>
        <path
          d="M661.333333 554.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
          fill="#784719"
        ></path>
        <path
          d="M362.666667 554.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
          fill="#784719"
        ></path>
        <path
          d="M917.333333 512c-12.8 0-21.333333 8.533333-21.333333 21.333333v-149.333333c0-187.733333-153.6-341.333333-341.333333-341.333333h-149.333334c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333h149.333334c164.266667 0 298.666667 134.4 298.666666 298.666667v213.333333c0 12.8 8.533333 21.333333 21.333334 21.333334s21.333333-8.533333 21.333333-21.333334v42.666667c0 83.2-66.133333 149.333333-149.333333 149.333333H512c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h234.666667c106.666667 0 192-85.333333 192-192v-106.666667c0-12.8-8.533333-21.333333-21.333334-21.333333z"
          fill="#757575"
        ></path>
        <path
          d="M917.333333 469.333333h-21.333333c-23.466667 0-42.666667 19.2-42.666667 42.666667v85.333333c0 23.466667 19.2 42.666667 42.666667 42.666667h21.333333c23.466667 0 42.666667-19.2 42.666667-42.666667v-85.333333c0-23.466667-19.2-42.666667-42.666667-42.666667z"
          fill="#37474F"
        ></path>
        <path
          d="M512 810.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
          fill="#37474F"
        ></path>
      </g>
    </svg>
  );
};
