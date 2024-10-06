import Image from "next/image";

const TrustedClients = () => {
  const images = [
    {
      src: "/assets/images/l4.svg",
      w: 100,
      text: "Excellent Patient Experience & Service Quality",
    },
    {
      src: "/assets/images/l3.svg",
      w: 100,
      text: "High Security and Quality Standards",
    },

    {
      src: "/assets/images/l2.svg",
      w: 100,
      text: "Best Medical Startup in Europe",
    },

    {
      src: "/assets/images/l1.svg",
      w: 100,
      text: "Best Medical Tourism Practice",
    },
  ];
  return (
    <div className="py-10">
      {/* trusted client logos */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center gap-8 lg:gap-1">
        {images?.map((img, i) => (
          <div key={i} className="space-y-4 mx-auto">
            <Image
              src={img.src}
              width={img.w}
              height={30}
              alt="trusted"
              className="mx-auto"
            />
            <p className="text-center max-w-[200px] text-fourth font-light">
              {img.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
