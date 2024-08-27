import DepartmentCard from "./departmentCard";
import FeatureCard from "./featureCard";

const propsData = {
  features: [
    { id: 1, title: "Clinics", quantity: "659", img: "clinicsIcon.svg" },
    { id: 2, title: "Doctors", quantity: "4234", img: "doctorsIcon.svg" },
    { id: 3, title: "Patients", quantity: "3847154", img: "patientsIcon.svg" },
    { id: 4, title: "Solutions", quantity: "2447", img: "solutionsIcon.svg" },
  ],
  departments: [
    {
      id: 1,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 2,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 3,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 4,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 5,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 6,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 7,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 8,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 9,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 10,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 11,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
    {
      id: 12,
      title: "Cardiology",
      quantity: "28200",
      url: "/departments/cardiology",
    },
  ],
};

const MostPopularVacanciesSection = () => {
  const data = propsData;
  return (
    <section>
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <div className="  xl:container mx-auto">
        <div className="grid grid-cols-4 gap-6 mt-5 ">
          {data.features.map((feature, index) => {
            return <FeatureCard key={index} data={feature} />;
          })}
        </div>

        <div className="grid grid-cols-4 gap-6 mt-5 ">
          {data.departments.map((department, index) => {
            return <DepartmentCard key={index} data={department} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default MostPopularVacanciesSection;
