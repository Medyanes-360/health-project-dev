import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import IconFacebook from "@/public/assets/icons/FaceBook";
import Image from "next/image";

const BookimedCeoAssurance = () => {
  return (
    <div className="pb-20 ">
      <div className="bg-[#E7F0FA] py-10">
        <ExtraLargePageContainer>
          <h1 className="mb-7 font-bold text-xl sm:text-2xl">
            Bookimed Editorial Policy
          </h1>

          <div className="flex gap-4">
            <div className="space-y-3">
              <div className="min-w-[50px]">
                <Image
                  src={"/assets/images/image.png"}
                  alt="image"
                  width={50}
                  height={50}
                  className="object-center object-cover rounded-full"
                />
              </div>

              <div className="cursor-pointe bg-white w-fit p-1">
                <IconFacebook
                  width={25}
                  height={25}
                  className="bg-black-light/30 text-black"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-lg underline">Bulent Cihantimur</h1>
              <p className="text-third">
                nfo about the clinic, its success rates, doctors, before-after
                photos, prices & packages is provided by the clinic
                representative via personal cabinet. The quality of info,
                communications, and client service is managed by our co-founder
                personally — to bring the very best for every user. All the
                content meets the highest international standards and aims to
                provide the complete data about available medical options for
                your informative decision-making.
              </p>
            </div>
          </div>
        </ExtraLargePageContainer>
      </div>
    </div>
  );
};

export default BookimedCeoAssurance;
