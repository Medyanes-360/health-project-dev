import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";

const FooterData = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center gap-12 text-fourth">
        <div className="flex gap-7">
          <div className="space-y-4 flex-1">
            {/* logo */}
            <Image
              alt="company logo"
              width={140}
              height={24}
              src="/assets/images/company_logo_white.png"
            />
            {/* location */}
            <p>Şirin mahallesi Sancaktepe/ Istanbul</p>
            {/* phone */}
            <h1 className="text-lg overflow-visible whitespace-nowrap">Call: (321) 428 321 3902</h1>
          </div>

          <div className="space-y-3 flex-1">
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
        <div className="">
            <ButtonComponent
            title ="Request a call"
            className="text-fourth bg-primary rounded-2xl"

            />
        </div>
      </div>
    </div>
  );
};

export default FooterData;
