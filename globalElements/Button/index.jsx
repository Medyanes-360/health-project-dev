const CustomButton = ({
  title,
  onClick,
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={`w-full  ${containerClassName}`}>
      <button
        onClick={onClick}
        {...props}
        className={`bg-primary py-4 px-7 text-xl w-fit text-white rounded-full`}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
