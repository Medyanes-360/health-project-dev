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
    highlights: [
      { title: "2015 Year of foundation", text: "Year of foundation" },
      { title: "3 doctors", text: "Number of doctors" },
    ],

    sections: [
      {
        heading: "Implantology Expertise",
        content:
          "The expert team at Smilefactory specializes in implantology, offering permanent solutions for missing teeth. The clinic uses the latest techniques and high-quality implants to ensure new teeth look, feel, and function like natural ones. The implant services aim to improve oral health, boost confidence, and provide lasting results.",
      },
      {
        heading: "Oral Surgery Services",
        content:
          "The medical team prioritizes patient safety and comfort, using cutting-edge technology and precise techniques for optimal outcomes.",
        list: [
          "Wisdom teeth extractions",
          "Corrective jaw surgeries",
          "Other complex dental surgeries",
        ],
      },
      {
        heading: "Comprehensive Dental Care",
        content:
          "In addition to implantology and oral surgery, Smilefactory offers a full range of dental services, including preventive care, restorative treatments, cosmetic dentistry, and orthodontics, covering all dental needs under one roof.",
      },
      {
        heading: "Preventive and Cosmetic Services",
        content:
          "Preventive care services, such as regular check-ups and cleanings, maintain oral health, while cosmetic dentistry helps patients achieve their ideal smile.",
      },
      {
        heading: "Patient Care",
        content:
          "Patient care is a top priority. The experienced and compassionate team ensures treatments are tailored to individual needs and strives to make visits as comfortable and stress-free as possible.",
      },
      {
        heading: "Commitment to Excellence",
        content:
          "The clinic upholds the highest dental care standards, welcoming new and returning patients with exceptional service.",
      },
    ],
  };

  return (
    <>
      <hr className="mt-8 mb-8"></hr>
      <section data-v-5b0e0b05="">
        <h2 className="font-poppins text-lg font-semibold leading-6 mb-4">
          Implant4Life by Smilefactory: more details about the clinic
        </h2>{" "}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center mt-4">
            <Image
              src="/assets/clinic/location.svg"
              alt="Location Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-[#52B8AB] font-poppins text-base font-semibold leading-6">
              {data.main_heading}
            </p>{" "}
          </div>
        </div>
        <div className="pt-5 space-y-2">
          <p className="font-poppins text-sm font-normal leading-6">
            {data.text}
          </p>

          {data.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-poppins text-sm font-normal leading-6">
                {section.heading}
              </h3>
              <p className="font-poppins text-sm font-normal leading-6">
                {section.content}
              </p>
              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, listIndex) => (
                    <li
                      key={listIndex}
                      className="font-poppins text-sm font-normal leading-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <h3 className="font-poppins text-sm font-normal leading-6 mb-8">
          Additional Services
        </h3>
        <AdditionalServicesDropdown />
      </section>
    </>
  );
}
