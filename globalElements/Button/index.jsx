export default function ButtonComponent(props) {
  return (
    <button
      onClick={props.onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={`${props.className} py-4 px-7 text-xl w-fit text-white `}
    >
      {title}
    </button>
  );
}
