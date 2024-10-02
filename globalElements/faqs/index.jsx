import CardComponent from "@/globalElements/Card";
import ExpandingQuestions from "./expand";

const Faqs = ({ data }) => {
  return (
    <div className="">
      <CardComponent>
        {data?.map(({ description, title }, i) => (
          <ExpandingQuestions
            index={i}
            key={i}
            description={description}
            title={title}
          />
        ))}
      </CardComponent>
    </div>
  );
};

export default Faqs;
