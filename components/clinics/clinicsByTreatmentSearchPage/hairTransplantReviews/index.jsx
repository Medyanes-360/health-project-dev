import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import HairTransplantReviewsCard from "./HairTransplantReviewsCard";

const HairTransplantReviews = () => {
  const data = [
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Jous Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Nor Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Mohammad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
  ];

  return (
    <ExtraLargePageContainer className="pb-20 space-y-6">
      {/* header */}
      <div className="flex items-center justify-between gap-5">
        <h1 className="font-bold text-xl sm:text-2xl text-secondary">
          Recent Hair Transplant Reviews
        </h1>
        <p>Check Real Patient Experience</p>
      </div>
      {/* Tracker Bölümü */}
      <HairTransplantReviewsCard data={data} />
    </ExtraLargePageContainer>
  );
};

export default HairTransplantReviews;
