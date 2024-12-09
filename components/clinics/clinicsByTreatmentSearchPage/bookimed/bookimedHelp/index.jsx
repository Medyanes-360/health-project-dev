import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
//import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";
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
      <ExtraLargePageContainer>
        <MotionDiv
          initial={{
            scale: "90%",
            opacity: 0,
          }}
          whileInView={{
            scale: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className="mb-7 font-bold text-xl sm:text-2xl">
            How <span className="text-primary">Bookimed</span> Can Help You
          </h1>
        </MotionDiv>

        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {data.map((items, i) => (
            <MotionDiv
              key={i}
              initial={{
                y: "30px",
                opacity: 0,
              }}
              whileInView={{
                y: "0",

                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3 * (i + 1),
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <ContentCard data={items} />
            </MotionDiv>
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
    <div className={"card !w-full !h-full !rounded-2xl"}>
      <div className="card-children">
        <div className="space-y-3">
          <Image src={icon} alt="icon" width={70} height={70} />
          <h1 className="text-xl sm:text-2xl">{title}</h1>

          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
