"use client";
import FiveStars from "@/globalElements/fiveStars";
import { useGlobalStore } from "@/utils/globalStore";
import { Country } from "country-state-city";
import Image from "next/image";
import { useState } from "react";

export default function PatientReviewsListItem({ review }) {
  const [isFullText, setIsFullText] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);
  const openImageModal = useGlobalStore((state) => state.openImageModal); //zustand store
  const reviewerCountry = Country.getCountryByCode(
    review.user.location.countryIsoCode
  );
  const handleOpenModal = (image) => {
    openImageModal({
      imageSources: review.images,
      imageSrcToShowFirst: image,
    });
  };

  return (
    <div className="flex flex-col pb-3 w-full border-b border-b-[rgba(0,0,0,.24)] mt-3 text-[#04285C] ">
      {/* top */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="bg-[#04285C] h-[44px] w-[44px] rounded-full flex items-center justify-center mr-2 text-[28px] text-white">
            {review.user.name[0]}
          </span>
          <div className="flex text-sm flex-col">
            <p>
              {review.user.name} • {review.treatment.title}
            </p>
            <p className="flex items-center">
              <Image
                className="mr-1"
                width={18}
                height={12}
                alt={reviewerCountry.isoCode}
                src={`/assets/countryFlags/${reviewerCountry.isoCode}.WEBP`}
              />
              {reviewerCountry.name}
            </p>
          </div>
        </div>
        <span>
          {new Date(Number.parseInt(review.createdAt))
            .toDateString()
            .substring(4)}
        </span>
      </div>

      {/* rating */}
      <div className="flex my-3 items-center">
        <FiveStars rating={4} />
        <span className="pl-2 font-medium text-xs">
          Be brave and everything will work out for you!
        </span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#6A778B]">
        {isFullText
          ? review.reviewText
          : review.reviewText
              .substring(0, 200)
              .concat(review.reviewText.length > 200 ? "..." : "")}
        {review.reviewText.length > 200 && (
          <span
            onClick={() => {
              setIsFullText(!isFullText);
            }}
            className="pl-2 text-primary cursor-pointer hover:underline"
          >
            {isFullText ? "Show Less" : "Read More"}
          </span>
        )}
      </p>

      {/* Images */}
      <div className="my-3 flex gap-2">
        {review.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Review image ${index + 1}`}
            width={64}
            height={64}
            className="cursor-pointer transition-transform duration-200 transform hover:scale-105"
            onClick={() => handleOpenModal(image)}
          />
        ))}
      </div>

      {/* Helpful button */}
      <div className="flex items-center justify-end">
        <span
          onClick={() => setIsHelpful(!isHelpful)}
          className={`cursor-pointer select-none flex items-center ${
            isHelpful && "text-primary"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`filter mr-1 ${!isHelpful && "brightness-0"}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ff0000"
          >
            <path d="M15 10L14.014 9.836C13.9902 9.97919 13.9978 10.1259 14.0364 10.2658C14.075 10.4057 14.1436 10.5356 14.2374 10.6464C14.3312 10.7571 14.4481 10.8461 14.5797 10.9072C14.7114 10.9683 14.8548 10.9999 15 11V10ZM4 10V9C3.73478 9 3.48043 9.10536 3.29289 9.29289C3.10536 9.48043 3 9.73478 3 10H4ZM6 21H17.36V19H6V21ZM18.56 9H15V11H18.56V9ZM15.987 10.164L16.792 5.329L14.82 5L14.014 9.836L15.987 10.164ZM14.82 3H14.606V5H14.82V3ZM11.277 4.781L8.763 8.555L10.427 9.665L12.943 5.891L11.277 4.781ZM7.93 9H4V11H7.93V9ZM3 10V18H5V10H3ZM20.302 18.588L21.502 12.588L19.542 12.196L18.342 18.196L20.302 18.588ZM8.763 8.555C8.67165 8.69192 8.54692 8.80417 8.40178 8.88179C8.25665 8.95942 8.09459 9.00002 7.93 9V11C8.42387 11 8.91009 10.878 9.3455 10.6449C9.78092 10.4119 10.1521 10.0749 10.426 9.664L8.763 8.555ZM16.792 5.329C16.8398 5.04254 16.8246 4.74911 16.7475 4.46911C16.6704 4.18911 16.5333 3.92926 16.3456 3.70762C16.1579 3.48598 15.9242 3.30787 15.6608 3.18567C15.3973 3.06347 15.1104 3.00011 14.82 3V5L16.792 5.329ZM18.56 11C18.708 10.9999 18.8541 11.0327 18.9879 11.096C19.1217 11.1592 19.2397 11.2514 19.3336 11.3658C19.4274 11.4802 19.4947 11.614 19.5306 11.7576C19.5664 11.9012 19.571 12.0509 19.542 12.196L21.502 12.588C21.589 12.1528 21.5783 11.7038 21.4708 11.2733C21.3633 10.8427 21.1617 10.4414 20.8804 10.0982C20.599 9.75501 20.2451 9.4785 19.844 9.28859C19.443 9.09869 19.0048 9.00012 18.561 9L18.56 11ZM17.36 21C18.0536 21 18.7258 20.7597 19.2622 20.32C19.7986 19.8802 20.166 19.2743 20.302 18.588L18.342 18.196C18.2878 18.4643 18.1473 18.7099 17.9422 18.8946C17.7371 19.0793 17.4789 19.1942 17.202 19.224L17.36 21ZM12.943 5.891C13.0374 5.75669 13.1065 5.60305 13.1468 5.43854C13.1871 5.27403 13.1978 5.10207 13.1783 4.93281C13.1588 4.76355 13.1095 4.59991 13.0332 4.45048C12.9569 4.30105 12.8549 4.16902 12.733 4.061L11.067 5.17C11.1547 5.24562 11.2298 5.3355 11.2885 5.43553C11.3473 5.53555 11.3887 5.64432 11.4105 5.7585C11.4323 5.87268 11.4342 5.99067 11.416 6.10663C11.3977 6.22259 11.3596 6.33466 11.303 6.437L12.943 5.891Z" />
          </svg>
          {isHelpful ? "Thanked" : "Helpful"}
        </span>
      </div>
    </div>
  );
}
