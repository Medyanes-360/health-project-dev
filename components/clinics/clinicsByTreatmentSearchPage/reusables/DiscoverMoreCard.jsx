import ButtonComponent from "@/globalElements/Button";
import CardComponent from "@/globalElements/Card";
import Image from "next/image";
import { useState } from "react";

const DiscoverMoreCardContent = ({ data }) => {
  const {
    clinicName,
    location,
    description,
    clinicIcon,
    docIcon,
    docName,
    docExperience,
    clinicImages, // array of url image strings
    stars,
    serviceName,
    price,
  } = data;
  const [image, setImage] = useState(clinicImages[0]);
  const [activeTab, setActiveTab] = useState("clinic");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const clickHandler = (e) => {
    setOpenPanel(e.target.dataset.overviewtabid);
  };

  return (
    <>
      {/* {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg space-y-4 max-w-sm w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {activeTab === "clinic" && "Clinic Overview"}
                {activeTab === "price" && "Price Information"}
                {activeTab === "doctors" && "Doctor Details"}
                {activeTab === "reviews" && "Reviews"}
              </h2>
              <button onClick={closeModal} className="text-xl">
                x
              </button>
            </div>
            <div>
              {activeTab === "clinic" && (
                <div>
                  <h3 className="font-semibold">Clinic: {clinicName}</h3>
                  <p>{description}</p>
                  <p>Location: {location}</p>
                </div>
              )}
              {activeTab === "price" && (
                <div>
                  <h3 className="font-semibold">Price: ${price}</h3>
                  <p>Service: {serviceName}</p>
                </div>
              )}
              {activeTab === "doctors" && (
                <div>
                  <h3 className="font-semibold">Doctor: {docName}</h3>
                  <p>{docExperience} years of experience</p>
                </div>
              )}
              {activeTab === "reviews" && (
                <div>
                  <h3 className="font-semibold">Reviews</h3>
                  <p>Rating: {stars}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}

      {/* Main Card */}
      <div className="py-4">
        <CardComponent className="!p-0 !rounded-2xl !shadow">
          <div className="space-y-5">
            {/* <div className="bg-white-dark p-5 flex justify-between items-center gap-3 rounded-t-2xl">
              <button
                onClick={clickHandler}
                data-overviewtabid="0"
                className={`${
                  openPanel == 0 && "bg-emerald-400 !text-black "
                }  bg-white w-full py-1 text-center rounded-md`}
                type="button"
              >
                Takeaways
              </button>
              <button
                onClick={clickHandler}
                data-overviewtabid="1"
                className={`${
                  openPanel == 1 && "bg-emerald-400 !text-black "
                }  bg-white w-full py-1 text-center rounded-md`}
              >
                Price
              </button>
              <button
                onClick={clickHandler}
                data-overviewtabid="2"
                className={`${
                  openPanel == 2 && "bg-emerald-400 !text-black "
                }  bg-white w-full py-1 text-center rounded-md`}
              >
                Doctors
              </button>
              <button
                onClick={clickHandler}
                data-overviewtabid="3"
                className={`${
                  openPanel == 3 && "bg-emerald-400 !text-black "
                }  bg-white w-full py-1 text-center rounded-md`}
              >
                Reviews
              </button>
            </div> */}

            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 p-8 h-full">
              <div className="w-full aspect-square overflow-hidden relative">
                <Image
                  src={image}
                  alt="image"
                  fill
                  className="object-cover object-center rounded-2xl"
                />
              </div>

              <div className="w-full aspect-square flex flex-col justify-between space-y-6">
                <div className="flex  items-center gap-2">
                  <Image
                    src={docIcon}
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
                  <Image
                    src={docIcon}
                    width={50}
                    height={50}
                    className="object-cover object-center rounded-full overflow-hidden"
                    alt="clickIcon"
                  />
                  <div className="space-y-2">
                    <h1 className="text-sm font-bold lg:font-bold">
                      {docName}
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Image
                        src="/assets/images/timer.png"
                        alt="img"
                        width={20}
                        height={20}
                      />
                      <p className="text-primary">
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

              <div className="w-full aspect-square flex flex-col justify-between">
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
        </CardComponent>
      </div>
    </>
  );
};

export default DiscoverMoreCardContent;
