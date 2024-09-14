import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";

const TrustedClients = () => {
  const images = [
    {
      src: "/assets/trustedClients/c1.png",
      w: 200,
    },
    {
      src: "/assets/trustedClients/c5.png",
      w: 150,
    },
    {
      src: "/assets/trustedClients/c3.png",
      w: 170,
    },

    {
      src: "/assets/trustedClients/c4.png",
      w: 140,
    },
    {
      src: "/assets/trustedClients/c2.png",
      w: 160,
    },

    {
      src: "/assets/trustedClients/c6.png",
      w: 150,
    },
  ];
  return (
    <ExtraLargePageContainer>
      {/* trusted client logos */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-1">
        {images?.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            width={img.w}
            height={30}
            alt="trusted"
          />
        ))}
      </div>
    </ExtraLargePageContainer>
  );
};

export default TrustedClients;
