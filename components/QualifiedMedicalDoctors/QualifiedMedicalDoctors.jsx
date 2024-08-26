import Container from "../container";
import CustomButton from "../CustomButton";
import QualifiedMedicalDoctorsCard from "./QualifiedMedicalDoctorsCard";

const QualifiedMedicalDoctors = () => {
  const data = [
    {
      icon: "/images/verified_user.png",
      title: "Safety Documantary",
      description:
        "You have right tot read all documantation and ask anything to us.",
    },
    {
      icon: "/images/mystery.png",
      title: "Hospital visibility",
      description: "You are able to check and be sure the about service.",
    },
    {
      icon: "/images/globe.png",
      title: "More than 7+ languages",
      description:
        "You feel the freedom to speak your language with our qualified doctors.",
    },
    {
      icon: "/images/indeterminate_question_box.png",
      title: "Personal Assistant",
      description: "You will have a personal assistant to engage more.",
    },
  ];
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-8">
          <h1 className="text-3xl text-center max-w-2xl mx-auto">
            Our Qualified Medical Doctors
          </h1>
          <p className="text-third text-center max-w-2xl mx-auto">
            Here are more reasons why you choose to do business with us
            Medyanes360 is a leading online medical tourism platform.
          </p>

          <div className="grid grid-cols-4 gap-7">
            {data.map((item, i) => {
              return (
                <QualifiedMedicalDoctorsCard
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  key={i}
                />
              );
            })}
          </div>

          <CustomButton
            title={"View all doctors"}
            containerClassName={"flex justify-center"}
          />
        </div>
      </Container>
    </div>
  );
};

export default QualifiedMedicalDoctors;
