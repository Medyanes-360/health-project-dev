import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Faqs from "@/globalElements/faqs";

export default function FaqSection() {
  const data = [
    {
      title: "How does hair transplant work?",
      description:
        "Hair transplant helps to renovate the balded areas with healthy growing hair.During the procedure, the doctor replaces the grafts from the hair-breading part of the scalp to a balded area. In 2-3 weeks, the planted hair falls out, but the follicle stays in the same place.In 8-12 months, the healthy, natural-looking and permanent hair starts growing.",
    },
    {
      title:
        "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
      description:
        "wfwehwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
    },
    {
      title: "wfwerlkgwerfjw]fhj wfe",
      description:
        "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe wfwerlkgwerfjwenrfgjkwegfwjwfhj wfe",
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
