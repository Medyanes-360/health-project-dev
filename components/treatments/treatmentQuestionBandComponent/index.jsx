import ButtonComponent from "@/globalElements/Button";

export default function TreatmentQuestionBandComponent() {
  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:
          "url(/assets/images/contactUsBandBackgroundImage.jpeg)",
      }}
      className="rounded-2xl mt-5 overflow-hidden "
    >
      <div
        // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
        style={{
          background:
            "linear-gradient(325.39deg, rgba(82, 184, 171,.85) 6.94%, rgba(82, 184, 171,.85) 94.28%)",
        }}
        className="bg-primary-light h-full flex justify-center"
      >
        <div className="h-ful font-medium font-inter w-full md:py-10 py-3 px-4 xl:container mx-auto flex flex-col  md:flex-row  justify-between items-start md:items-center">
          <div className="flex text-white flex-col items-center justify-center w-full">
            <p>
              Take a test to find the best value-for-money Hair transplant
              option
            </p>
            <p className="text-sm my-3.5">
              What area would you like to improve with a hair transplant?
            </p>
            <div className="flex">
              <ButtonComponent
                className="bg-[#EAEAEA]  text-sm mr-1.5 text-primary"
                title="Upper Part Of The Head"
              />
              <ButtonComponent
                className="bg-[#EAEAEA]  text-sm mx-1.5 text-primary"
                title="Temples"
              />
              <ButtonComponent
                className="bg-[#EAEAEA]  text-sm mx-1.5 text-primary"
                title="Beard Or Mustache"
              />
              <ButtonComponent
                className="bg-[#EAEAEA]  text-sm ml-1.5 text-primary"
                title="Other"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
