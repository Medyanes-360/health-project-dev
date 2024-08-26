import Image from "next/image"

const QualifiedMedicalDoctorsCard = ({icon, title, description}) => {
  return (
    <div className="w-full h-full shadow-md shadow-third rounded-2xl p-4">
        <div className="flex flex-col gap-5">
            <Image src={icon} height={30} width={30} alt="icon" className="object-cover object-center" />
            <h1 className="text-3xl font-poppinsMedium">
                {title}
            </h1>
            <p className="text-third text-xl">
                {description }
            </p>
        </div>
    </div>
  )
}

export default QualifiedMedicalDoctorsCard