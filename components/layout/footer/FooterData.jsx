import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";

const FooterData = () => {
  return (
    <div className="w-full pt-5">
       <h1 className="text-center text-4xl text-white mb-10">
        Medyanes<span className="text-primary">360</span>
       </h1>
      <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-12 text-fourth">
        <div className="flex gap-7 flex-col lg:flex-row text-center lg:text-start">
          <div className="space-y-4 flex-1 ">
            {/* logo */}

            {/* location */}
            <p>Şirin mahallesi Sancaktepe/ Istanbul</p>
            {/* phone */}
            <h1 className="text-lg overflow-visible whitespace-nowrap">
              Call: (321) 428 321 3902
            </h1>
          </div>

          <div className="space-y-3 flex-1 ">
            <p className="mb-1">Partner </p>
            <p className="font-thin">Became a partner</p>
            <p className="font-thin">Partner login </p>
          </div>

          <div className="space-y-3 flex-1">
            <p className="mb-1">Patient Safety </p>
            <p className="font-thin">Legal documantation</p>
          </div>

          <div className="space-y-3 flex-1">
            <p className="mb-1">Patient</p>
            <p className="font-thin">Clinics</p>
            <p className="font-thin">Doctors</p>
            <p className="font-thin">Medical Consultant</p>
          </div>

          <div className="space-y-3 flex-1">
            <p className="mb-1">About us</p>
            <p className="font-thin">How it works?</p>
            <p className="font-thin">Our medical team</p>
          </div>
        </div>

        {/* button */}
        <div className="w-full lg:w-fit">
          <ButtonComponent
            title="Request a call"
            className="text-fourth bg-primary !rounded-2xl !text-xl mx-auto lg:mx-0 whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterData;