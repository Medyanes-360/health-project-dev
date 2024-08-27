import HeaderSectionSearchInput from "./searchInput";

const HeaderSection = () => {
  const popularSuggestions = [
    "Oncology",
    "Endocrinology",
    "Infertility",
    "Mental Health",
    "Cardiology",
  ];
  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(/assets/images/home-hero-image.png)",
        height: "60vh",

        margin: "auto",
        position: "static",
      }}
      // background'u sayfanın tümüne yaymak için width full.
      className="min-w-full  "
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
        <div className="h-full  xl:container mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="w-3/4 text-6xl">
            {" "}
            World&apos;s Best Advanced <br /> Cross-Border Care
          </h1>
          <p className="mt-6 mb-8 text-lg">
            Find The Best Hospitals and Doctors Across the world
          </p>
          <HeaderSectionSearchInput
            data={{ suggestions: popularSuggestions }}
          />
        </div>
      </div>
    </section>
  );
};
export default HeaderSection;
