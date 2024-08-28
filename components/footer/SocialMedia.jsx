import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";

const SocialMedia = () => {
  const images = [
    {
      Img: IconInstagram,
    },
    {
      Img: IconFacebook,
    },
    {
      Img: IconLinkedin,
    },
  ];
  return (
    <div className="w-full space-y-10 pb-6 xl:container mx-auto">
      <div className="flex items-center gap-4">
        {images.map((Icon, i) => (
          <div className="bg-fourth/30 p-3 rounded-full">
            <Icon.Img className="text-fourth text-xl" />
          </div>
        ))}
      </div>
      <p className="font-light text-fourth">
        © 2024 Medyanes, All Rights Reserved
      </p>
    </div>
  );
};

export default SocialMedia;
