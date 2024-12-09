import ButtonComponent from "@/globalElements/Button";
//import CardComponent from "@/globalElements/Card";
import Image from "next/image";

export default function Clinic({ data }) {
  const {
    clinicName,
    location,
    description,
    centerImage,
    centerIcon,
    docIcon,
    docName,
    docExperience,
    clinicImages,
    stars,
    serviceName,
    price,
    accreditations,
  } = data;

  return (
    <div className="card rounded-t-none rounded-b-2xl !p-0 !m-0">
      <div className="card-children">
        <div className="space-y-5">
          {" "}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 p-8 h-full">
            <div className="w-full aspect-square overflow-hidden relative">
              <Image
                src={centerImage}
                alt="image"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>

            <div className="w-full flex flex-col justify-between space-y-6">
              <div className="flex  items-center gap-2">
                <Image
                  src={centerIcon}
                  width={50}
                  height={50}
                  className="object-cover object-center rounded-full overflow-hidden"
                  alt="clickIcon"
                />
                <div className="space-y-2">
                  <h1 className=" text-sm font-bold lg:font-bold">
                    {clinicName}
                  </h1>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/images/location.png"
                      alt="img"
                      width={20}
                      height={20}
                    />
                    <p className="text-primary"> {location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className=" text-[12px] font-semibold">{description}</p>
              </div>

              <div className="flex items-center gap-2">
                <h1 className="font-inter text-[12px] font-normal leading-[14.52px] text-left ">
                  Accreditations:
                </h1>
                <div className="flex gap-4 items-center">
                  {accreditations.map((item, index) => (
                    <Image
                      src={item}
                      alt={item}
                      width={30}
                      height={30}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={docIcon}
                  width={50}
                  height={50}
                  className="object-cover object-center rounded-full overflow-hidden"
                  alt="clickIcon"
                />

                <div className="space-y-2">
                  <h1 class="font-poppins text-[14px] font-semibold leading-[22px] text-center">
                    {docName}
                  </h1>
                  <div className="flex gap-1 items-center">
                    <Image
                      src="/assets/images/timer.png"
                      alt="img"
                      width={20}
                      height={20}
                    />
                    <p class="font-poppins text-[10px] font-semibold leading-[22px] text-center">
                      {docExperience} years of experience
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[12px]">Surgeons portfolio</p>
                <div className="w-full flex items-center justify-between gap-[1px]">
                  {clinicImages?.map((img, i) => (
                    <div
                      onClick={() => {
                        setImage(img);
                      }}
                      key={i}
                      className="w-full h-24 relative overflow-hidden cursor-pointer"
                    >
                      <Image
                        className="object-cover object-center rounded-2xl"
                        src={img}
                        fill
                        alt="alt"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full  flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-[#FFAA00] text-4xl ">
                      ★
                    </span>
                  ))}

                  <p className="text-xl">{stars}</p>
                </div>
                <p className="text-center">{serviceName}</p>
                <div className="flex flex-col justify-center gap-1 w-full text-center">
                  <p>
                    <span className="text-red-500 font-bold text-3xl">
                      ${price}
                    </span>
                  </p>
                  <p>pre package</p>
                </div>
              </div>

              <div className="w-full space-y-3">
                <ButtonComponent
                  className={
                    "!bg-primary !rounded-md !text-fourth !w-full !text-lg"
                  }
                  title={"Get A Free Quote"}
                />
                <ButtonComponent
                  className={
                    "!text-primary !rounded-md !bg-[#EAEAEA] !w-full !text-lg"
                  }
                  title={"Message Us"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
