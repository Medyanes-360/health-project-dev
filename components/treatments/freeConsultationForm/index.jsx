import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
import GetFreeConsolationForm from "./getFreeConsolationForm";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";

const data = [
  {
    country: "Hair transplant in Poland",
  },
  {
    country: "Hair transplant in Germany",
  },
  {
    country: "Hair transplant in Spain",
  },
  {
    country: "Hair transplant in Republic of korea",
  },
  {
    country: "Hair transplant in Mexico",
  },
  {
    country: "Hair transplant in Thailand",
  },
  {
    country: "Hair transplant in Turkey",
  },
];

const socialMedia = [
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
  {
    Img: WhatsappIcon,
    id: 3,
  },
];

const arr4 = [{}, {}, {}, {}];

const GetFreeConsolation = () => {
  return (
    <div className="pb-20">
      <ExtraLargePageContainer>
        <h1 className="font-bold text-xl sm:text-2xl text-secondary mb-5 text-center">
          Get a free consolation
        </h1>

        <div className="flex flex-col sm:flex-row">
          <FormText />
          <GetFreeConsolationForm />
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default GetFreeConsolation;

const FormText = () => {
  return (
    <div className="bg-primary px-5  text-fourth flex-1 rounded-l-2xl flex items-center py-5 sm:py-0 relative ">
      <div className="space-y-10 mx-auto">
        <h1 className="text-xl sm:text-2xl">Countries for treatment</h1>

        <div className="w-full space-y-3">
          {data?.map(({ country }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image
                src={"/assets/images/sms.png"}
                alt="img"
                width={30}
                height={30}
              />
              <p className="text-2xl">{`${country}`}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p>Bizimle iletişime geçin:</p>

          <div className="flex gap-1">
            {socialMedia?.map(({ Img, id }) => (
              <div
                key={id}
                className="w-10 h-10 rounded-md grid place-content-center p-2 bg-primary-dark/40 cursor-pointer"
              >
                <Img className="w-6 h-6 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute z-0  w-full h-full inset-0 flex justify-end">
        <div className="grid grid-cols-2 gap-4 h-fit rotate-[45deg]">
          {arr4?.map((_, i) => (
            <div key={i} className="w-20 h-20 rounded-xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
};
