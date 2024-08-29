import { cn } from "@/lib/utils";

export default function CardComponent({ children, className }) {
  return (
    <div
      className={cn(
        "w-full h-full shadow-md shadow-third rounded-2xl p-4",
        className
      )}
    >
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
