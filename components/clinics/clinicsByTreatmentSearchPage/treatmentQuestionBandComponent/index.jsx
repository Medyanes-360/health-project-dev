import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import ButtonComponent from "@/globalElements/Button";

export default function TreatmentQuestionBandComponent({ data }) {
  const { text, question, options } = data;
  //     bandTestQuestion: {
  //   text: "Take a test to find the best Dental Implant treatment for you",
  //   question: "How many teeth would you like to replace?",
  //   options: ["1", "2", "Multiple", "Full Mouth"],
  // },
  return (
    <ExtraLargePageContainer>
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
          <div className="h-full font-medium font-inter w-full md:py-10 py-3  flex flex-col  md:flex-row  justify-between items-start md:items-center">
            <div className="flex text-white flex-col items-center justify-center w-full">
              <p>{text}</p>
              <p className="text-sm my-3.5">{question}</p>
              <div className="flex">
                {options.map((option, index) => {
                  return (
                    <ButtonComponent
                      key={index}
                      className="bg-[#EAEAEA]  !text-xs mr-1.5 text-primary"
                      title={option}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ExtraLargePageContainer>
  );
}
