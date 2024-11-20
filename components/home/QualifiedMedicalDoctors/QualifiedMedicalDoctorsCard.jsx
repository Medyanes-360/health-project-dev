import Image from "next/image";
import CardComponent from "@/globalElements/Card";

const QualifiedMedicalDoctorsCard = ({ icon, title, description }) => {
  return (
    <CardComponent>
      <div className="flex flex-col gap-5">
        <Image
          src={icon}
          height={30}
          width={30}
          alt="icon"
          className="object-cover object-center"
        />
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-third text-lg">{description}</p>
      </div>
    </CardComponent>
  )
}

export default QualifiedMedicalDoctorsCard;
