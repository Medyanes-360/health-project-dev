import CardComponent from "@/globalElements/Card";
import Image from "next/image";

const TestimonialCard = ({ stars, text, img, name, job }) => {
  const starsArray = Array.from({ length: stars });
  // card component
  return (
    <CardComponent>
      <div className="flex flex-col gap-5 justify-center ">
        <div className="flex gap-2 flex-wrap items-center">
          {/* starts */}
          {starsArray.map((i, index) => (
            <div key={index} className="text-lg">
              ⭐
            </div>
          ))}
        </div>

        <div>
          <p>{text}</p>
        </div>

        <div className="flex justify-between gap-3 items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={img}
              className="object-cover object-center rounded-full"
              width={40}
              height={40}
              alt="picture"
            />
            <div className="space-y-2">
              <h1 className="font-bold text-lg ">{name}</h1>
              <p className="font-light">{job}</p>
            </div>
          </div>
          <Image
            src={"/assets/images/Group.png"}
            className="object-cover object-center rounded-full"
            width={30}
            height={30}
            alt="que"
          />
        </div>
      </div>
    </CardComponent>
  );
};

export default TestimonialCard;
