import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";

const Comment = () => {
  const comments = [
    {
      title: "Article Author",
      name: "Anna Leonova",
      image: "/assets/images/Article1.png",
    },
    {
      title: "Article Author",
      name: "John Doe",
      image: "/assets/images/Article.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center font-poppins">
      {/* Comment Section */}
      <div className="max-w-[1200px] w-full h-auto flex flex-col p-6 gap-[24px] justify-between rounded-[24px] bg-white border border-[#D9D9D91F] shadow-[0px_12px_24px_-4px_#919EAB1F] ">
        <div className="flex flex-col md:flex-row justify-between">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-4 md:mb-0"
            >
              <Image
                src={comment.image}
                alt={comment.name}
                width={54}
                height={54}
                className="rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-[16px] font-semibold leading-[24px] text-left">
                  {comment.title}
                </h1>
                <p className="text-[14px] font-normal leading-[24px] text-left">
                  {comment.name}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/assets/images/calendar-2.png"
              alt="Calendar"
              width={54}
              height={54}
            />
            <div className="ml-4 text-[#52B8AB] text-[15px] leading-[21px] text-left font-medium">
              <p>Updated: 05.11.2021</p>
              <p>Minutes to read: 9 minutes</p>
            </div>
          </div>
        </div>

        {/* Article Content Section */}
        <MotionDiv
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
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="rounded-3xl p-6 bg-[#D9D9D921]"
        >
          <p className="text-[16px] font-normal leading-[24px] text-left">
            Restorative dentistry is a fast-developing field worldwide: inspired
            by celebrities and influencers, men and women dream of perfect
            teeth. Famous people choose dental veneers in Mexico to shine on red
            carpets while you can shine in your life, too. Everybody has a
            chance to look like a star: installing veneers is the easiest and
            fastest way to get a brilliant smile. The process is pretty simple:
            a professional dentist puts a thin layer of enamel on the front
            tooth surface to improve its shape, color and hide damages. Fix
            dental imperfections fast – all you need is to find a proper clinic
            and an experienced doctor to manage the process. Mexico is a
            well-known destination for medical tourism. Patients from the USA,
            Canada, the UK visit the country every year, looking for affordable
            and high-quality medical assistance. Mexico has developed its
            dentistry field to a highly professional level. About 150,000+
            dentists work here, and 93% of them are with a bachelor’s degree.
            Patients will find well-reputed clinics in Cancun, Tijuana, and
            Playa del Carmen.
          </p>
        </MotionDiv>

        <div className="flex gap-3">
          <Image
            src={"/assets/images/note-text.png"}
            alt="note"
            width={24}
            height={24}
          />
          <h1 className="font-medium text-[15px] leading-5 text-[#52B8AB]">
            Keep reading the article to explore:
          </h1>
        </div>

        <MotionDiv
          initial={{
            opacity: 0,
          }}
          whileInView={{
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
          className="rounded-3xl bg-[#D9D9D921] p-6 text-[16px]"
        >
          <ul className="list-disc list-inside">
            <li>
              What are the prices for different types of veneers in Mexico?
            </li>
            <li>How much can you save in Mexico?</li>
            <li>
              What clinics do provide special prices for veneer installation?
            </li>
          </ul>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Comment;
