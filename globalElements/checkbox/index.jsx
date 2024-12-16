export const Checkbox = (props) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="hidden peer" />
      <span className=" transition-all duration-100 w-5 h-5 bg-white border-2 rounded-md flex items-center justify-center peer-checked:bg-[#637381] border-[#637381]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="-10,0,280,240"
          fill="#FFFFFF"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M19.28125,5.28125l-10.28125,10.28125l-4.28125,-4.28125l-1.4375,1.4375l5,5l0.71875,0.6875l0.71875,-0.6875l11,-11z"></path>
            </g>
          </g>
        </svg>
      </span>
    </label>
  );
};
