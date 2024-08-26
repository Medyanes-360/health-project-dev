import CardComponent from "@/globalElements/Card"
import Image from "next/image"

const QualifiedMedicalDoctorsCard = ({icon, title, description}) => {
  return (
    <CardComponent>
        <div className="flex flex-col gap-5">
            <Image src={icon} height={30} width={30} alt="icon" className="object-cover object-center" />
            <h1 className="text-3xl font-bold">
                {title}
            </h1>
            <p className="text-third text-xl">
                {description }
            </p>
        </div>
    </CardComponent>
  )
}

export default QualifiedMedicalDoctorsCard