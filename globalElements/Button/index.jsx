const ButtonComponent = (props) => {
  return (
    <button
      onClick={props.onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={` flex items-center justify-center py-1 px-1 rounded-md text-base w-fit    ${props.className} `}
    >
      {props.title}
    </button>
  );
};

export default ButtonComponent;
