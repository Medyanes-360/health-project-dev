import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
import GetFreeConsolationForm from "./getFreeConsolationForm";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import { MotionDiv } from "@/globalElements/motion";
import Link from "next/link";

const data = [
  {
    country: "Hair transplant in Poland",
    countryCode: "PL",
  },
  {
    country: "Hair transplant in Germany",
    countryCode: "DE",
  },
  {
    country: "Hair transplant in Spain",
    countryCode: "ES",
  },
  {
    country: "Hair transplant in Republic of Korea",
    countryCode: "KR",
  },
  {
    country: "Hair transplant in Mexico",
    countryCode: "MX",
  },
  {
    country: "Hair transplant in Thailand",
    countryCode: "TH",
  },
  {
    country: "Hair transplant in Turkey",
    countryCode: "TR",
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

const GetFreeConsolation = ({ data, socialMedia }) => {
  return (
    <ExtraLargePageContainer className="pb-20">
      <>
        <h1 className="font-bold text-xl sm:text-2xl text-secondary mb-5 text-center">
          Get a free consolation
        </h1>

        <div className="flex flex-col md:flex-row">
          <FormText data={data} socialMedia={socialMedia} />
          <GetFreeConsolationForm />
        </div>
      </>
    </ExtraLargePageContainer>
  );
};

export default GetFreeConsolation;


const FormText = ({ data, socialMedia }) => {
  return (
    <MotionDiv
      initial={{
        x: "-50px",
        opacity: 0,
      }}
      whileInView={{
        x: "0",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="flex-col text-fourth  flex items-center py-5 sm:py-0 relative  h-auto md:h-[650px] sm:flex-row "
    >
      <div className="flex flex-col items-start justify-center gap-20 md:w-6/12 bg-primary h-[650px] md:h-full w-[45%] p-8   md:rounded-l-2xl rounded-tl-[20px] md:rounded-tr-[0px] rounded-tr-[20px] rounded-br-none rounded-bl-none  !w-full  ">
        <h1 className="font-lexend text-sm font-semibold leading-[44px] tracking-[-0.015em] ">
          Countries for treatment
        </h1>

        <div className="w-full space-y-3 z-50 ">
          {data?.map(({ country, countryCode }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image
                src={"/assets/images/sms.png"}
                alt="img"
                width={30}
                height={30}
                className="rotate-90"
              />
              <Link
                href={`/clinics/treatment?country=${countryCode}`}
                className="font-poppins text-[20px] font-light leading-[28px]"
              >
                {country}
              </Link>
            </div>
          ))}
        </div>

        <div className="space-y-3 z-50">
          <div className="flex gap-4 items-center justify-center ">
            <hr className="w-[21.71px] h-0 gap-0 border-t-[1.36px] border-solid border-[#FFFFFF] opacity-1  "></hr>

            <p className="font-lexend text-[10.86px] font-normal leading-[16.29px]">
              Bizimle iletişime geçin:
            </p>
          </div>
          <div className="flex gap-1 ">
            {socialMedia?.map(({ Img, id }) => (
              <Link
                key={id}
                className="w-10 h-10 rounded-md grid place-content-center p-2 bg-[#FFFFFF14] cursor-pointer"
                href="/"
              >
                <Img className="w-6 h-6 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute z-0  w-full h-full inset-0 flex justify-end">
        <div className="grid grid-cols-2 gap-4 h-fit rotate-[45deg]">
          {Array(4)
            ?.fill({})
            .map((_, i) => (
              <div key={i} className="w-20 h-20 rounded-xl bg-white/10" />
            ))}
        </div>
      </div>
    </MotionDiv>
  );
};

