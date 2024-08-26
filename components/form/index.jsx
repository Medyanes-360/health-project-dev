import CardComponent from "@/globalElements/Card";
import CustomInput from "@/globalElements/input";
import Image from "next/image";
import ContactForm from "./contactForm";

const FormSection = () => {
  return (
    <div className="py-20">
      <CardComponent>
        <div className="flex gap-7 items-center">
          <div className="flex-1 w-full aspect-[12/8] relative overflow-hidden">
            {/*right side image */}
            <Image
              src={"/assets/images/unsplash_kpYmswq9ej0.png"}
              fill
              className="object-cover object-center rounded-2xl"
              alt="image"
            />
          </div>
          <div className="flex-1 w-full px-6 py-3 space-y-6">
            {/* started with the Section */}
            <div>
              <h1 className="font-bold text-2xl text-center">
                Contact with us!
              </h1>
              <p className="line-clamp-1 text-sm text-center">
                Please enter the Section to help you to find the best solutions.
              </p>
            </div>
            <div>
              {/* form component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default FormSection;
