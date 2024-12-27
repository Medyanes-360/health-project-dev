"use client";
export const Toggle = (props) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        {...props}
        checked={props.value}
        name={props.name}
        type="checkbox"
        className="sr-only peer"
      />
      <div className="relative w-[33px] h-[20px] bg-[#919EAB7A] rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#F9FAFB] after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-[#F9FAFB] after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-[#12A52A]"></div>
    </label>
  );
};
