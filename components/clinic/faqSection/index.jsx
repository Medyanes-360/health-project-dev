import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Faqs from "@/globalElements/faqs";

export default function FaqSection({ data }) {
  return (
    <ExtraLargePageContainer>
      <div className=" shadow-lg rounded-2xl mt-10 p-5">
        <p className="text-2xl font-medium bg-header-gradient bg-clip-text text-fill-transparent text-primary">
          FAQs
        </p>

        <div className="mt-3">
          <Faqs data={data} />
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
