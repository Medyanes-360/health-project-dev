import dynamic from "next/dynamic";
// import TestimonialCard from "./TestimonialCard";

const TestimonialText = () => {
  const data = [
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Ahmad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
  ];

  // Dinamik olarak yüklenen carousel bileşeni
  const TestimonialCarousel = dynamic(() => import("./TestimonialCard"), {});

  return (
    <div className="py-10 xl:container mx-auto">
      {/* header */}
      <div className="flex justify-between gap-6 max-w-[99vw] overflow-hidden">
        <div className="max-w-[50%] min-h-full border-b-2 border-primary">
          <h1 className="text-3xl">
            Clients <span className="text-primary">Testimonial</span>
          </h1>
        </div>

        <div className="flex flex-col items-end gap-3">
          <h1 className="text-2xlfont-bold">Happy</h1>
          <h1 className="text-3xl">Patients</h1>
        </div>
      </div>
      <div className="pt-10"></div>
      {/* Tracker Bölümü */}
      <TestimonialCarousel data={data} />
    </div>
  );
};

export default TestimonialText;
