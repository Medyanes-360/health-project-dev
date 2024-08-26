import TestimonialCard from "./TestimonialCard";

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
  ];

  return (
    <div className="py-10">
        <div className="flex justify-between gap-6">
          <div className="w-[50%] min-h-full border-b-2 border-primary">
            <h1 className="text-3xl">
              Clients <span className="text-primary">Testimonial</span>
            </h1>
          </div>

          <div className="flex flex-col items-end gap-3">
            <h1 className="text-2xlfont-bold">Happy</h1>
            <h1 className="text-3xl">Patients</h1>
          </div>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.map(({ img, job, name, stars, text }, i) => (
              <TestimonialCard
                img={img}
                job={job}
                name={name}
                stars={stars}
                text={text}
                key={i}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default TestimonialText;
