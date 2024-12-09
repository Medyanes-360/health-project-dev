//import CardComponent from "@/globalElements/Card";
import Image from "next/image";
import ContactForm from "./contactForm";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";

const ContanctFormSection = () => {
  return (
    <div className="bg-primary/30 lg:bg-transparent mb-20 py-8 lg:py-0">
      <ExtraLargePageContainer>
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
          className="grid lg:grid-cols-2 gap-4 items-center lg:shadow-2xl rounded-3xl"
        >
          <MotionDiv
            initial={{
              x: "-100px", // Start from outside the left edge
              opacity: 0,
            }}
            whileInView={{
              x: "0px",
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
            className="hidden relative span-1 lg:flex w-full h-full  rounded-l-3xl !p-0 "
          >
            {/*left side image */}
            <Image
              src={"/assets/images/unsplash_kpYmswq9ej0.png"}
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "1.5rem ",
                borderBottomLeftRadius: "1.5rem ",
              }}
              alt="image"
            />
          </MotionDiv>
          <MotionDiv
            initial={{
              x: "100px", // Start from outside the right edge
              opacity: 0,
            }}
            whileInView={{
              x: "0px",
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
            className="col-span-1 span w-full flex flex-col px-8 py-3 rounded-r-3xl gap-8"
          >
            {/* started with the Section */}
            <div className="flex flex-col">
              <h1 className="text-[38px] text-center font-poppins">
                Contact with us!
              </h1>
              <p className="line-clamp-1 text-sm text-center">
                Please enter the Section to help you to find the best solutions.
              </p>
            </div>

            {/* form component */}
            <ContactForm />
          </MotionDiv>
        </MotionDiv>
      </ExtraLargePageContainer>
    </div>
  );
};

export default ContanctFormSection;
