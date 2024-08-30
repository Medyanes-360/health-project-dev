import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";

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
    <div className="w-full space-y-10 pb-6 xl:container mx-auto">
      <div className="flex items-center justify-center lg:justify-start gap-4">
        {images?.map((Icon) => (
          <div key={Icon.id} className="bg-fourth/30 p-3 rounded-full">
            <Icon.Img className="text-fourth text-xl" />
          </div>
        ))}
      </div>
      <p className="font-light text-fourth hidden lg:block">
        © 2024 Medyanes, All Rights Reserved
      </p>
    </div>
  );
};

export default SocialMedia;
