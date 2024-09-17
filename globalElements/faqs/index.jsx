import CardComponent from "@/globalElements/Card";
import ExpandingQuestions from "./expand";

const Faqs = ({ data }) => {
  return (
    <div className="">
      <CardComponent className={"!p-0"}>
        {data?.map(({ description, title }, i) => (
          <ExpandingQuestions key={i} description={description} title={title} />
        ))}
      </CardComponent>
    </div>
  );
};

export default Faqs;
