export default function CardComponent({ children }) {
  return (
    <div className="w-full h-full shadow-md shadow-third rounded-2xl p-4">
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
