import Image from "next/image";

export default function FilteredClinicsMainComponent() {
  return (
    <div className="ml-2 border flex-1">
      {[...Array(5)].map((elem, index) => (
        <div key={index}>
          <Image
            className="h-full w-full"
            alt=""
            src="/assets/mocks/mockImage.svg"
            height={100}
            width={100}
          />
        </div>
      ))}
    </div>
  );
}
