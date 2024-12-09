// Eski card componenti
// function CardComponent({
//   children,
//   className,
//   customRef,
//   ...props
// }) {
//   return (
//     <div
//       className={`
//       w-full h-full shadow-md  rounded-2xl p-4 ${className} // global csste .card sınıfına çevrildi
//       `}
//       {...props}
//     >
//       <div className="flex flex-col gap-5">{children}</div> // global csste .card-children sınıfına çevrildi
//     </div>
//   );
// }

// İlerde card component yazılırsa diye şu anda hiçbir şey render etmeyen component
export default function CardComponent() {
  return null; 
}
