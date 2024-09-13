import Image from "next/image";

const data = {
  patientsRecommend: "76",
  rehabilitationDuration: "1 Day",
  beforeAndAfterPhotosCount: 48,
  bookimedFees: 0,
  surgeryTime: "4 Hours",
  anestesiaType: "Local Anesteshia",
  verifiedPatientReviewsCount: 471,
  stayInCountryDuration: "3 Days",
  bestPrice: 1500,
  requestProcessed: 110449,
};
export default function PanelOne({ data }) {
  const {
    patientsRecommend,
    rehabilitationDuration,
    beforeAndAfterPhotosCount,
    bookimedFees,
    surgeryTime,
    anestesiaType,
    verifiedPatientReviewsCount,
    stayInCountryDuration,
    bestPrice,
    processedRequestCount,
  } = data;
  return (
    <div className="animate-fadeIn grid grid-cols-3 grid-flow-row gap-3  text-xs ">
      {/* thumbsUpIcon */}
      {/* rankingIcon */}
      {/* cameraIcon */}
      {/* likeIcon */}
      {/* creativeCommonsIcon */}
      {/* homeIcon */}
      {/* dollarSquareIcon */}
      {/* documentLikeIcon */}
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/thumbsUpIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">Patients Recommend - {patientsRecommend}</p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/thumbsUpIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">Surgery Time - {surgeryTime}</p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image src="/assets/icons/homeIcon.svg" alt="" width={24} height={24} />
        <p className="font-medium ">
          Stay In The Country - {stayInCountryDuration}
        </p>
      </div>

      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/rankingIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">
          Rehabilitation - {rehabilitationDuration}
        </p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/rankingIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">Anesteshia - {anestesiaType}</p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/dollarSquareIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">Best Price - {bestPrice}</p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/cameraIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">
          Before & After Photos - {beforeAndAfterPhotosCount}
        </p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/creativeCommonsIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">
          Verified Patients Review - {verifiedPatientReviewsCount}
        </p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image
          src="/assets/icons/documentLikeIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <p className="font-medium ">
          Requests Processed - {processedRequestCount}
        </p>
      </div>
      <div className="col-span-1 flex items-center gap-2.5">
        <Image src="/assets/icons/likeIcon.svg" alt="" width={24} height={24} />
        <p className="font-medium ">Bookimed Fees - {bookimedFees}</p>
      </div>
    </div>
  );
}
