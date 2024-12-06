import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Faqs from "@/globalElements/faqs";

export default function FaqSection() {
  const data = [
    {
      title: "How does hair transplant work?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "What are the methods of hair transplant?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Who are the best candidates for hair transplant?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

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
