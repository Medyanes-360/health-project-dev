const CustomButton = ({
  title,
  onClick,
  type = "button",
  className="",
  containerClassName,
  ...props
}) => {
  return (
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
  );
};

export default CustomButton;
