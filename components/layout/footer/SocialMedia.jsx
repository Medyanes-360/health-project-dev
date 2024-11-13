import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import Link from "next/link";

const SocialMedia = () => {
  const images = [
    {
      Img: IconInstagram,
      id: 1,
    },
    {
      Img: IconFacebook,
      id: 2,
    },
    {
      Img: IconLinkedin,
      id: 3,
    },
  ];
  return (
    <div className="w-full space-y-10 pt-10 pb-6">
      <div className="flex items-center justify-center lg:justify-center gap-4">
        {images?.map((Icon) => (
          <Link key={Icon.id} href={Icon.link || "#"} passHref>
            <div className="bg-fourth/30 p-3 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-fourth/50">
              <Icon.Img className="text-fourth text-xl" />
            </div>
          </Link>
        ))}
      </div>
      <p className="text-fourth text-center tracking-wider">
        © 2024 Medyanes, All Rights Reserved
      </p>
    </div>
  );
};

export default SocialMedia;
