"use client";
import ButtonComponent from "@/globalElements/Button";
import RangeSlider from "@/globalElements/rangeSlider";
import FiveStars from "@/globalElements/fiveStars";
import { useState } from "react";
import { MotionDiv } from "@/globalElements/motion";
import ExpandingList from "../filterOptionsSidebarComponent/expandingList";
import { AnimatePresence } from "framer-motion";

export const FilterOptionsBarMobile = ({ handleFilterModal, isOpen }) => {
  // Modal tetikleme:
  //   const [isOpen, setIsOpen] = useState(false);
  //   const handleFilterModal = () => {
  //     isOpen ? setIsOpen(false) : setIsOpen(true);
  //   };
  const [bookingScore, setBookingScore] = useState(1);
  const [startY, setStartY] = useState(null);

  // Content'e tıklandığında modal'ın kapanmasını engeller.
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the overlay
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;

    if (startY === null) {
      // Başlangıç pozisyonu
      setStartY(currentY);
      return;
    }

    // Aşağı hareket
    if (currentY - startY > 20) {
      handleFilterModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          // Modal overlay'e tıklandığında modal'ı gizler
          onClick={handleFilterModal}
          className="fixed left-0 w-full h-[100vh] top-0 z-[999999999999] bg-black/80 flex md:hidden items-end justify-center touch-none"
        >
          <MotionDiv
            onClick={handleContentClick}
            initial={{ opacity: 0, y: "80px", x: "0px" }}
            whileInView={{
              x: "0px",
              y: "0px",
              opacity: 1,
            }}
            exit={{ opacity: 0, y: "40px", x: "0px" }}
            transition={{
              duration: 0.2,
            }}
            className="h-4/6 w-full bg-white rounded-t-3xl"
          >
            <div className="relative flex w-full h-full">
              <div className="w-full shadow-lg h-full flex flex-col items-center">
                {/* Head */}
                <div
                  onTouchMove={handleTouchMove}
                  className="w-full flex flex-col items-center justify-center"
                >
                  <div className="mt-4 -mb-1  w-24 h-[5px] bg-black/10 border-black/10 rounded-full"></div>
                  <p className="border-b text-center font-semibold p-4 text-[#212B36] border-b-[#919EAB3D] w-9/12 mb-1">
                    Filters
                  </p>
                </div>
                {/* Body */}
                <div className="h-[420px] no-scrollbar overflow-y-scroll w-full">
                  <div className="my-5 px-5 ">
                    <p className="font-semibold">Price range</p>
                    {/* pure css ile price range verebilmek için iki inputu birleştirmek gerekiyor. bkz: https://stackoverflow.com/questions/4753946/html-slider-with-two-inputs-possible  */}
                    <div className=" ">
                      <RangeSlider
                        minimumValue={0}
                        maximumValue={50000}
                        steps={100}
                        minRangeValueGap={100}
                      />
                    </div>
                  </div>
                  <div className="my-5 ">
                    <ExpandingList title="Country" />
                  </div>
                  <div className="my-5">
                    <ExpandingList title="Popular Filters" />
                  </div>
                  <div className="my-5">
                    <ExpandingList title="Doctors experience, years" />
                  </div>
                  <div className="my-5">
                    <ExpandingList title="Related Procedures" />
                  </div>
                  <div className="my-5">
                    <ExpandingList title="Deposit Policy" />
                  </div>
                  <div className="my-5">
                    <ExpandingList title="Booking Score">
                      <div className="flex px-5 my-2">
                        <FiveStars
                          dynamic
                          rating={bookingScore}
                          setRating={setBookingScore}
                        />
                        <span className="text-sm pl-2">& Up</span>
                      </div>
                    </ExpandingList>
                  </div>
                </div>
                <div className="flex items-center justify-end grow w-full">
                  <ButtonComponent className="border mx-5  py-[11px] font-semibold !text-[15px] w-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 6.00001H16V4.33001C15.9765 3.68982 15.7002 3.08506 15.2316 2.6483C14.7629 2.21153 14.1402 1.9784 13.5 2.00001H10.5C9.85975 1.9784 9.23706 2.21153 8.76843 2.6483C8.2998 3.08506 8.02346 3.68982 8 4.33001V6.00001H3C2.73478 6.00001 2.48043 6.10536 2.29289 6.2929C2.10536 6.48043 2 6.73479 2 7.00001C2 7.26522 2.10536 7.51958 2.29289 7.70711C2.48043 7.89465 2.73478 8.00001 3 8.00001H4V19C4 19.7957 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8.00001H21C21.2652 8.00001 21.5196 7.89465 21.7071 7.70711C21.8946 7.51958 22 7.26522 22 7.00001C22 6.73479 21.8946 6.48043 21.7071 6.2929C21.5196 6.10536 21.2652 6.00001 21 6.00001ZM10 4.33001C10 4.17001 10.21 4.00001 10.5 4.00001H13.5C13.79 4.00001 14 4.17001 14 4.33001V6.00001H10V4.33001ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V8.00001H18V19Z"
                        fill="#212B36"
                      />
                      <path
                        d="M9 17C9.26522 17 9.51957 16.8946 9.70711 16.7071C9.89464 16.5196 10 16.2652 10 16V12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12V16C8 16.2652 8.10536 16.5196 8.29289 16.7071C8.48043 16.8946 8.73478 17 9 17Z"
                        fill="#212B36"
                      />
                      <path
                        d="M15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12V16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17Z"
                        fill="#212B36"
                      />
                    </svg>
                    <p className="pl-2">Clear All</p>
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};
