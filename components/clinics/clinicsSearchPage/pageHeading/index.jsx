"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { Country, State } from "country-state-city";
import { useSearchParams } from "next/navigation";

export default function PageHeading() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const getLocation = () => {
    const country = Country.getCountryByCode(searchParams.get("country"));
    const state = State.getStateByCodeAndCountry(
      searchParams.get("state"),
      searchParams.get("country")
    );
    console.log(searchParams.get("country"));

    if (state) {
      return `${state.name}, ${country.name}`;
    } else if (country) {
      return country.name;
    } else return "";
  };
  return (
    <ExtraLargePageContainer>
      <p className="text-3xl text-primary font-semibold">
        Best Clinics {getLocation() == "" ? "Globally" : "in " + getLocation()}{" "}
        {new Date().getFullYear()}
      </p>
    </ExtraLargePageContainer>
  );
}
