export default function CardComponent({
  children,
  className,
  customRef,
  ...props
}) {
  return (
    <div
      className={`
      w-full h-full shadow-md  rounded-2xl p-4 ${className}
      `}
      {...props}
    >
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
