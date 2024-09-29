import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import BestClinicsCards from "./BestClinicsCards";

const BestClinics = () => {
    const data = [
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : '  Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3.4
        },
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Carmen Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : '  Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Carmen Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : '  Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
        {
            city:'ISTANBUL',
            clinicName : ' Playa del Carmen Bokanova Dental Center',
            img:'/assets/images/waiting.png',
            rate:3
        },
    ]
  return (
    <div className="relative w-full h-full py-10">
      <div className="absolute w-full h-full inset-0">
        <Image
          alt="image"
          src={"/assets/images/private-clinic-design-build-aspect-ratio.jpg"}
          fill
          className="object-cover object-center"
        />
        <div className="w-full h-full bg-[#29504DB0] z-10"/>
      </div>
      <div className="absolute w-full h-full inset-0">
        <div className="w-full h-full bg-[#29504DB0] z-10"/>
      </div>
       we start here


      <div className="relative z-10">
        <ExtraLargePageContainer className={'space-y-4'}>
            <h1 className="text-fourth font-bold text-xl sm:text-2xl">
                Best Clinics
            </h1>

            <div>
                <BestClinicsCards data={data} />
            </div>
        </ExtraLargePageContainer>
      </div>
    </div>
  );
};

export default BestClinics;
