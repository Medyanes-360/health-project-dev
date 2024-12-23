import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import HeaderSectionSearchInput from "./searchInput";
import { MotionDiv } from "@/globalElements/motion";

const HeaderSection = () => {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(/assets/images/home-hero-image.png)",
        maxHeight: "80vh",

        margin: "auto",
      }}
      // background'u sayfanın tümüne yaymak için width full.
      className="min-w-full   "
    >
      <div
        // section backgroundu image'ı tutmak için var. aşağıdaki div'de ise backgroundun üstüne yaptığımız color filterı var.
        style={{
          background:
            "linear-gradient(90deg, rgba(177, 201, 251, 0.6) 0%, rgba(46, 174, 203, 0.03) 46.74%, rgba(46, 174, 203, 0.03) 55.76%, rgba(227, 255, 218, 0.6) 100%)",
        }}
        className=" h-full "
      >
        {/* component'ın max-widthini xl'a ayarlayan container:  */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <ExtraLargePageContainer className="h-full   py-16 sm:py-auto    text-center flex flex-col justify-center items-center">
            <h1 className="w-3/4 text-lg sm:text-6xl   font-medium leading-[2rem] sm:leading-[4rem]">
              {" "}
              World&apos;s Best Advanced <br /> Cross-Border Care
            </h1>
            <p className="sm:mt-6 sm:mb-8 my-3  text-xs sm:text-lg">
              Find The Best Hospitals and Doctors Across the world
            </p>
            <HeaderSectionSearchInput />
          </ExtraLargePageContainer>
        </MotionDiv>
      </div>
    </section>
  );
};
export default HeaderSection;
