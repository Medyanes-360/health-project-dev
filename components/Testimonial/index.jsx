import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
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
      name: "Jous Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Nor Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
    {
      stars: 4,
      img: "/assets/images/image.png",
      job: "Software Engineer",
      name: "Mohammad Hanki",
      text: "eferg ertg ertgetre ertgergter rtegegte rtgerge ertgertge ertgertg retgergter retgergter rge",
    },
  ];

  return (
    <div className="py-10 xl:container mx-auto px-4">
      {/* header */}
      <div className="flex justify-between gap-6 items-end border-b-2 border-primary sm:border-none pb-2 sm:pb-0">
        <div className="flex-1 sm:max-w-[50%] min-h-full sm:border-b-2 sm:border-primary">
          <h1 className="text-xl sm:text-3xl whitespace-nowrap">
            Clients <span className="text-primary">Testimonial</span>
          </h1>
        </div>

        <div className="flex-1 sm:w-fit flex flex-col items-end gap-3">
          <h1 className="text-2xl font-bold">Happy</h1>
          <h1 className="text-3xl">Patients</h1>
        </div>
      </div>
      <div className="pt-10"></div>
      {/* Tracker Bölümü */}
      <TestimonialCard data={data} />
    </div>
  );
};

export default Testimonial;
