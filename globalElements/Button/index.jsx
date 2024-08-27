const CustomButton = ({
  title,
  onClick,
  type = "button",
  className="",
  containerClassName,
  ...props
}) => {
  return (
<<<<<<< Updated upstream
    <div className={`w-full  ${containerClassName}`}>
      <button
        onClick={onClick}
        type={type}
        {...props}
        className={`bg-primary py-4 px-7 text-xl w-fit text-white rounded-full ${className}`}
      >
        {title}
      </button>
    </div>
=======
    <button
      onClick={props.onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={` flex items-center justify-center py-3 px-5 rounded-md text-xl w-fit    ${props.className} `}
    >
      {props.title}
    </button>
>>>>>>> Stashed changes
  );
};

export default CustomButton;
