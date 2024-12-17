import CustomButton from "@/globalElements/Button";
import QualifiedMedicalDoctorsCard from "./QualifiedMedicalDoctorsCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";

const QualifiedMedicalDoctors = () => {
  const data = [
    {
      icon: "/assets/images/verified_user.png", // Resolve icon path
      title: "Safety Documantary",
      description:
        "You have right to read all documentation and ask anything to us.",
    },
    {
      icon: "/assets/images/mystery.png", // Resolve icon path
      title: "Hospital visibility",
      description: "You are able to check and be sure about the service.",
    },
    {
      icon: "/assets/images/globe.png",
      title: "More than 7+ languages",
      description:
        "You feel the freedom to speak your languages with our qualified doctors.",
    },
    {
      icon: "/assets/images/indeterminate_question_box.png", // Resolve icon path
      title: "Personal Assistant",
      description: "You will have a personal assistant to engage more.",
    },
  ];

  return (
    <ExtraLargePageContainer className="py-20 font-poppins">
      <div className="space-y-8">
        <MotionDiv
          className="space-y-8"
          initial={{
            y: "10px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          <h1 className="text-3xl sm:text-center max-w-2xl mx-auto">
            Our Qualified Medical Doctors
          </h1>
          <p className="text-third sm:text-center max-w-2xl mx-auto">
            Here are more reasons why you choose to do business with us
            Medyanes360 is a leading online medical tourism platform.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
          {data?.map((item, i) => {
            return (
              <MotionDiv
                initial={{
                  opacity: 0,
                }}
                whileInView={{
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
                key={i}
              >
                <QualifiedMedicalDoctorsCard
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                />
              </MotionDiv>
            );
          })}
        </div>
        <MotionDiv
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="w-full flex justify-center"
        >
          <CustomButton
            className="bg-primary rounded-2xl text-white w-full sm:w-fit"
            title={"View all doctors"}
            containerClassName={"flex justify-center"}
          />
        </MotionDiv>
      </div>
    </ExtraLargePageContainer>
  );
};

export default QualifiedMedicalDoctors;
