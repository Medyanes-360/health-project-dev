import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import DentalTreatmentDropDown from "../dentalTreatmentDropDown";
import AdditionalServicesDropdown from "../additionalServicesDropdown";

export default function AboutClinic() {
  const data = {
    main_heading: "Hungary, Budapest",
    sub_heading_1: "PM dental crown in Implant4Life by Smilefactory",
    sub_heading_2: "About the clinic",
    text: "Implant4Life by Smilefactory, a private medical center in Budapest, Hungary, specializes in Dental Treatment and Maxillofacial Surgery. The clinic integrates advanced digital technologies and was awarded the All-on-4.",
    hrefText: "Read more",
    sub_heading_3: "Highlights",
    text_1: "2015 Year of foundation",
    text_2: "3 doctors",
    sub_heading_4: "Accepted payment method",
    text_3: "Cash",
    text_4: "3 doctors",
    sub_text:
      "No payment is needed now. You will be charged directly at the clinic when you arrive.",
    hrefText_1: "View more information",
  };
  return (
    <>
      <section data-v-5b0e0b05="">
        <h2 class="font-semibold text-xl mb-4">
          Implant4Life by Smilefactory: more details about the clinic
        </h2>{" "}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center">
            <Image
              src="/assets/clinic/location.svg"
              alt="Location Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-[#52B8AB] font-bold">{data.main_heading}</p>{" "}
          </div>
        </div>
        <div class="py-5 space-y-4">
          <p>
            Implant4Life by Smilefactory, located in Budapest, Hungary, features
            a state-of-the-art facility that combines advanced dental technology
            with a warm, welcoming atmosphere, ensuring top-quality dental care.
          </p>
          <h3 class="text-xl ">Implantology Expertise</h3>
          <p>
            The expert team at Smilefactory specializes in implantology,
            offering permanent solutions for missing teeth. The clinic uses the
            latest techniques and high-quality implants to ensure new teeth
            look, feel, and function like natural ones. The implant services aim
            to improve oral health, boost confidence, and provide lasting
            results.
          </p>
          <h3 class="text-xl ">Oral Surgery Services</h3>
          <ul class="list-disc pl-5">
            <li>Wisdom teeth extractions</li>
            <li>Corrective jaw surgeries</li>
            <li>Other complex dental surgeries</li>
          </ul>
          <p>
            The medical team prioritizes patient safety and comfort, using
            cutting-edge technology and precise techniques for optimal outcomes.
          </p>
          <h3 class="text-xl ">Comprehensive Dental Care</h3>
          <p>
            In addition to implantology and oral surgery, Smilefactory offers a
            full range of dental services, including preventive care,
            restorative treatments, cosmetic dentistry, and orthodontics,
            covering all dental needs under one roof.
          </p>
          <h3 class="text-xl">Preventive and Cosmetic Services</h3>
          <p>
            Preventive care services, such as regular check-ups and cleanings,
            maintain oral health, while cosmetic dentistry helps patients
            achieve their ideal smile.
          </p>
          <h3 class="text-xl ">Patient Care</h3>
          <p>
            Patient care is a top priority. The experienced and compassionate
            team ensures treatments are tailored to individual needs and strives
            to make visits as comfortable and stress-free as possible.
          </p>
          <h3 class="text-xl ">Commitment to Excellence</h3>
          <p>
            The clinic upholds the highest dental care standards, welcoming new
            and returning patients with exceptional service.
          </p>
          <h3 class="text-xl ">Additional Services</h3>
        </div>
        <AdditionalServicesDropdown />
      </section>
    </>
  );
}
