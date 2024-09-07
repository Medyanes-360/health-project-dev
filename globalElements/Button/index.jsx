import { cn } from "@/lib/utils";

const ButtonComponent = ({ className, title, children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={cn(
        `flex items-center justify-center py-3 px-5 rounded-md text-xl w-fit`,
        className
      )}
    >
      {title ? title : children}
    </button>
  );
};

export default ButtonComponent;
