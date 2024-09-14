import CardComponent from "@/globalElements/Card";
import ExpandingQuestions from "./expand";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const data = [
  {
    title: "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
    description:
      "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
  },
  {
    title: "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
    description:
      "wfwehwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfewfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe",
  },
  {
    title: "wfwerlkgwerfjw]fhj wfe",
    description:
      "wfwerlkgwerfjwenrfgjkwegfwj fwef wej fwefhwfh wegfweh feh wfhj wfe wfwerlkgwerfjwenrfgjkwegfwjwfhj wfe",
  },
];

const Faqs = () => {
  return (
    <div className="pb-20">
      <ExtraLargePageContainer className="space-y-6">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-bold text-xl sm:text-2xl text-secondary">Faqs</h1>
          <p>Articles</p>
        </div>

        <div>
          <CardComponent>
            {data?.map(({ description, title }, i) => (
              <ExpandingQuestions
                key={i}
                description={description}
                title={title}
              />
            ))}
          </CardComponent>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default Faqs;
