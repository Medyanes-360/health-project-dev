import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import CardComponent from "@/globalElements/Card";
import Image from "next/image";

const HowBookimedHelps = () => {
  const data = [
    {
      title: "Great choice among 1200+ clinics",
      description:
        "Bookimed cooperates with top medical centers in 50 countries. And we can pick the best one precisely for your medical needs.",
      icon: "/assets/images/home-hashtag.png",
    },
    {
      title: "Bookimed expert",
      description: "Searching for a doctor or a clinic?",
      icon: "/assets/images/heart.png",
    },
    {
      title: "24/7 complete guidance",
      description:
        "Bookimed cooperates with top medical centers in 50 countries. And we can pick the best one precisely for your medical needs.",
      icon: "/assets/images/clock.png",
    },
    {
      title: "No fees",
      description:
        "Bookimed cooperates with top medical centers in 50 countries. d we can pick the best one precisely for your medical needs.",
      icon: "/assets/images/card-tick.png",
    },
  ];
  return (
    <div className="pb-20">
      <ExtraLargePageContainer >
        <h1 className="mb-7 font-bold text-xl sm:text-2xl">
          How <span className="text-primary">Bookimed</span> Can Help You
        </h1>

        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {data.map((items, i) => (
            <ContentCard key={i} data={items} />
          ))}
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default HowBookimedHelps;

const ContentCard = ({ data }) => {
  const { description, icon, title } = data;

  return (
    <CardComponent className={"!w-full !h-full !rounded-2xl"}>
      <div className="space-y-3">
        <Image src={icon} alt="icon" width={70} height={70} />
        <h1 className="text-xl sm:text-2xl">{title}</h1>

        <p>{description}</p>
      </div>
    </CardComponent>
  );
};
