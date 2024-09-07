import MedicalAssessmentCard from "./MedicalAssessmentCard";

const data = [
  {
    docName: "Leyla Arvas",
    icon: "/assets/images/image.png",
    location: "Turkey, Istanbul",
    reviews: 70,
    image: "/assets/images/unsplash_kpYmswq9ej0.png",
    description:
      "Dr. Leyla Arvas specializes in Hair Transplant techniques such as FUE, DHI, and robotic surgery.She received microsurgery training internationally, including in Taiwan, Tokyo, and Barcelona.Dr. Arvas is a Certified VASER Trainer skilled in body sculpting and hair restoration.She is an active participant in medical communities and fluent in English and Turkish.",
  },
  {
    docName: "Leyla Arvas",
    icon: "/assets/images/image.png",

    location: "Turkey, Ankara",
    reviews: 70,
    image: "/assets/images/unsplash_kpYmswq9ej0.png",
    description:
      "Dr. Leyla Arvas specializes in Hair Transplant techniques such as FUE, DHI, and robotic surgery.She received microsurgery training internationally, including in Taiwan, Tokyo, and Barcelona.Dr. Arvas is a Certified VASER Trainer skilled in body sculpting and hair restoration.She is an active participant in medical communities and fluent in English and Turkish.",
  },
  {
    docName: "Leyla Arvas",
    location: "Turkey, Ankara",
    icon: "/assets/images/image.png",

    reviews: 70,
    image: "/assets/images/unsplash_kpYmswq9ej0.png",
    description:
      "Dr. Leyla Arvas specializes in Hair Transplant techniques such as FUE, DHI, and robotic surgery.She received microsurgery training internationally, including in Taiwan, Tokyo, and Barcelona.Dr. Arvas is a Certified VASER Trainer skilled in body sculpting and hair restoration.She is an active participant in medical communities and fluent in English and Turkish.",
  },
  {
    docName: "Leyla Arvas",
    location: "Turkey, Istanbul",
    icon: "/assets/images/image.png",

    reviews: 70,
    image: "/assets/images/unsplash_kpYmswq9ej0.png",
    description:
      "Dr. Leyla Arvas specializes in Hair Transplant techniques such as FUE, DHI, and robotic surgery.She received microsurgery training internationally, including in Taiwan, Tokyo, and Barcelona.Dr. Arvas is a Certified VASER Trainer skilled in body sculpting and hair restoration.She is an active participant in medical communities and fluent in English and Turkish.",
  },
];

const MedicalAssessment = () => {
  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-4 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <h1 className="font-bold text-xl sm:text-2xl text-secondary">
            Get a Medical Assessment For Hair Transplant
          </h1>

          <p className="text-sm">Select your export</p>
        </div>

        <div>
          <MedicalAssessmentCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default MedicalAssessment;
