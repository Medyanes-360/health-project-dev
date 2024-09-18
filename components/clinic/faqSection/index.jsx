import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Faqs from "@/globalElements/faqs";

export default function FaqSection({ data }) {
  return (
    <ExtraLargePageContainer className="shadow-[0px_12px_48px_0px_#BCBCBC1F;] rounded-xl p-8">
      <p className="text-2xl font-medium bg-header-gradient bg-clip-text text-fill-transparent text-primary">
        FAQs
      </p>

      <div className="mt-3">
        <Faqs data={data} />
      </div>
    </ExtraLargePageContainer>
  );
}
