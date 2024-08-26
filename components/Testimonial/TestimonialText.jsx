import Container from "../container";

const TestimonialText = () => {
  return (
    <div className="py-10">
      <Container>
        <div className=" flex justify-between gap-6 ">
          <div className="w-[50%] min-h-full border-b-2 border-primary">
            <h1 className="text-3xl ">
              Clients <span className="text-primary"> Testimonial</span>
            </h1>
          </div>

          <div className="flex flex-col items-end gap-3 ">
            <h1 className="text-2xl font-poppinsMedium">Happy</h1>
            <h1 className="text-3xl">Patients</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialText;
