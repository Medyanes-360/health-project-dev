import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import RecentHairTransplantReviewCard from "./RecentHairTransplantReviewCard";

const data = [
  {
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    operation: "Hair Transplant",
    county: "Saudi Arabia",
    date: "Jan 15, 2823", // here we will use formatter function,
    image: "/assets/images/beforeAfter.png",
    title:
      "Thank you very much to her for her timely and quick help throughout the entire period",
    description:
      "Thank you very much to her for her timely and quick help throughout the entire period Everything went quite well....first of all, of course, thanks to the girl Natalia Bruyaka, who was always in touch and helped solve all the questions that I had along the way...Thank you ",
    hospitalName: "Defa Life",
    rate: 4,
  },
  {
    icon: "/assets/images/image.png",
    rate: 2,
    name: "Ali Kareem",
    operation: "Hair Transplant",
    county: "Turkey",
    date: "Feb 28, 2823",
    image: "/assets/images/beforeAfter.png",
    title: "Amazing experience with great staff",
    description:
      "The whole process was smooth from start to finish. Special thanks to Dr. Omar for his professionalism and constant support. Highly recommend this clinic.",
    hospitalName: "Istanbul Clinic",
  },
  {
    icon: "/assets/images/image.png",
    name: "Sara Al Fahad",
    rate: 4.4,
    operation: "Hair Transplant",
    county: "United Arab Emirates",
    date: "Mar 10, 2823",
    image: "/assets/images/beforeAfter.png",
    title: "Incredible results, beyond my expectations",
    description:
      "The results are amazing, and the staff were very friendly and professional. I am extremely satisfied with the care and outcome. A big thank you to the whole team!",
    hospitalName: "Al Abeer Medical Center",
  },
  {
    icon: "/assets/images/image.png",
    name: "Mohammed Al Sayed",
    rate: 3,
    operation: "Hair Transplant",
    county: "Qatar",
    date: "Apr 5, 2823",
    image: "/assets/images/beforeAfter.png",
    title: "Thankful for the wonderful service",
    description:
      "I couldn’t be happier with the results. The doctor was fantastic, and the staff was always there to help me with every concern. Highly recommend!",
    hospitalName: "Doha Care",
  },
];

const RecentHairTransplantReview = () => {
  const dynamicNumber = 473;
  return (
    <ExtraLargePageContainer className="py-20">
      <div className="xl:container mx-auto px-4 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
          <h1 className="font-bold text-xl sm:text-2xl text-secondary">
            {dynamicNumber} Recent Hair Transplant Reviews
          </h1>

          <p className="text-sm">Check Real Patient Experiences</p>
        </div>

        <div>
          <RecentHairTransplantReviewCard data={data} />
        </div>
      </div>
    </ExtraLargePageContainer>
  );
};

export default RecentHairTransplantReview;
