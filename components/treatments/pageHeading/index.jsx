import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function PageHeading({ data }) {
  const { lastUpdateDate, title } = data;

  return (
    <ExtraLargePageContainer className="flex mt-6   justify-between items-center">
      <h1 className="text-xl font-bold bg-header-gradient bg-clip-text text-fill-transparent text-primary">
        Best Clinics And Costs For {title} In 2024
      </h1>
      <span className="text-sm">
        Last updated:{" "}
        {new Date(Number.parseInt(lastUpdateDate)).toDateString().substring(4)}
      </span>
    </ExtraLargePageContainer>
  );
}
