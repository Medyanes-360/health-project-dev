import { cn } from "@/lib/utils";

const ButtonComponent = (props) => {
  return (
    <button
      onClick={props.onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={cn(
        `flex items-center justify-center py-3 px-5 rounded-md text-xl w-fit`,
        props.className
      )}
    >
      {props.title ? props.title : props.children}
    </button>
  );
};

export default ButtonComponent;
