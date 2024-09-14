import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import React from "react";

const BookimedEditorialPolicy = () => {
  return (
    <div className="pb-20">
      <ExtraLargePageContainer >
        <h1 className="mb-7 font-bold text-xl sm:text-2xl">
          Bookimed Editorial Policy
        </h1>
        <div className="px-6 py-3">
          <p className="my-5">
            Bookimed, a leading global medical tourism platform, is committed to
            helping clients looking for Hair transplant by offering expert
            assistance and trustworthy medical solutions for every situation.
            Smart automatic ranking system is used to compose transparent clinic
            listings, meticulously maintained by a data scientist using AI for
            accuracy. The platform guarantees authenticity by publishing reviews
            from real patients after their treatments. Bookimed offers
            comprehensive medical solutions, with updates from clinics to ensure
            trustworthiness. The content about Hair transplant, crafted by
            experienced medical authors and reviewed by specialists, adheres to
            Bookimed"s Editorial Guidelines, reflecting the platform"s
            commitment to delivering high-quality and clear health information.
            For more details or inquiries, feel free to contact us at
            marketing@bookimed.com or learn more about us and our mission here.
          </p>
          <h1 className="my-5 text-xl sm:text-2xl text-primary">
            Hair transplant Bookimed Medical Advisory Board expert
          </h1>

          <div className="flex gap-4">
            <div className="min-w-[50px]">
              <Image
                src={"/assets/images/image.png"}
                alt="image"
                width={50}
                height={50}
                className="object-center object-cover rounded-full"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-lg underline">Bulent Cihantimur</h1>
              <p className="text-third">
                The consistency, accuracy of data, and adherence to the highest
                standards of medical writing is proved by the Bookimed Medical
                Advisory Board expert — Doctor Bulent Cihantimur. Doctor B. is a
                top-rated plastic surgeon from Turkey with over 20 years of
                practice. Ranked among 50 best world’s plastic surgeons. Author
                of 8 innovative plastic surgery methods. Dr. Cihantimur has a
                wide range of experience and expertise, including breast
                augmentation and reconstruction, body contouring, facial
                rejuvenation, and rhinoplasty. Is a member of 7 professional
                American, Turkish and international associations. Cooperates
                with Bookimed from 2020 and arranges training trips for the
                Bookimed’s coordinators to his clinics. The Medical Advisory
                Board expert is a verified credible medical professional with
                solid theoretical background and practical experience in the
                field. The expert provides support related to medical content
                accuracy for medical writers and performs educational workshops
                to Bookimed coordinators serving patient requests. The medical
                content creation under the expert’s control follows rigorous and
                well-established procedure to be informative, trustworthy, and
                transparent and making Bookimed.com a credible source of
                evidence-based health information.
              </p>
            </div>
          </div>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default BookimedEditorialPolicy;
