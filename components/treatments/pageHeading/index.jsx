export default function PageHeading({ data }) {
  const { lastUpdateDate, title } = data;

  return (
    <div className="flex mt-6   justify-between items-center">
      <h1 className="text-xl font-bold">
        Best Clinics And Costs For {title} In 2024
      </h1>
      <span className="text-sm">
        Last updated: {new Date(Number(lastUpdateDate)).toLocaleDateString()}
      </span>
    </div>
  );
}
