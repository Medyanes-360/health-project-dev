import CustomButton from "@/globalElements/Button";
import QualifiedMedicalDoctorsCard from "./QualifiedMedicalDoctorsCard";

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
        "You feel the freedom to speak your language with our qualified doctors.",
    },
    {
      icon: "/assets/images/indeterminate_question_box.png", // Resolve icon path
      title: "Personal Assistant",
      description: "You will have a personal assistant to engage more.",
    },
  ];

  return (
    <div className="py-20 font-poppins px-4">
        <div className="space-y-8">
          <h1 className="text-3xl text-center max-w-2xl mx-auto">
            Our Qualified Medical Doctors
          </h1>
          <p className="text-third text-center max-w-2xl mx-auto">
            Here are more reasons why you choose to do business with us
            Medyanes360 is a leading online medical tourism platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
          <div className="w-full flex justify-center">
          <CustomButton
          className="bg-primary rounded-2xl text-white"
            title={"View all doctors"}
            containerClassName={"flex justify-center"}
          />
          </div>
          
        </div>
    </div>
  );
};

export default QualifiedMedicalDoctors;
