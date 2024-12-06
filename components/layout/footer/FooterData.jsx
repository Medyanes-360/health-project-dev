import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";
import Link from "next/link";

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

          <div className="space-y-3 flex flex-col ">
            <p className="mb-1">Partner </p>
            <Link href="#" className="font-thin hover:text-primary">
              Become a partner
            </Link>
            <Link href="#" className="font-thin hover:text-primary">
              Partner login
            </Link>
          </div>

          <div className="space-y-3 flex flex-col">
            <p className="mb-1">Patient Safety </p>
            <Link href="#" className="font-thin hover:text-primary">
              Legal documentation
            </Link>
          </div>

          <div className="space-y-3 flex flex-col">
            <p className="mb-1">Patient</p>
            <Link href="#" className="font-thin hover:text-primary">
              Clinics
            </Link>
            <Link href="#" className="font-thin hover:text-primary">
              Doctors
            </Link>
            <Link href="#" className="font-thin hover:text-primary">
              Medical Consultant
            </Link>
          </div>

          <div className="space-y-3 flex flex-col">
            <p className="mb-1">About us</p>
            <Link href="#" className="font-thin hover:text-primary">
              How it works?
            </Link>
            <Link href="#" className="font-thin hover:text-primary">
              Our medical team
            </Link>
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
