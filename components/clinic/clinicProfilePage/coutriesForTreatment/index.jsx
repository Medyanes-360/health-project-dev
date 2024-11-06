import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { Country } from "country-state-city";

const data = {
  treatment: "Hair transplant",
  locations: [
    {
      countryIsoCode: "TR",
      stateIsoCode: "34",
    },
    {
      countryIsoCode: "DE",
      stateIsoCode: "BE",
    },
  ],
};

export default function CoutriesForTreatment() {
  return (
    <ExtraLargePageContainer>
      {/* Heading: */}
      <div className="bg-white p-10 shadow rounded-3xl gap-4 flex flex-col">
        <div className="flex items-center">
          <h1 className="text-2xl text-primary">Coutries for treatment</h1>
        </div>
        <div className="flex flex-col gap-2">
          {data.locations.map((location, i) => {
            return (
              <div
                key={i}
                className="p-4 md:p-6 bg-[#f9f9f9] rounded-3xl flex flex-col"
              >
                <Link
                  // Treatment ismini link için dönüştürür
                  href={`/clinics/${data.treatment
                    .replace(/\s+/g, "-")
                    .toLowerCase()}?country=${location.countryIsoCode}&state=${
                    location.stateIsoCode
                  }`}
                  className=""
                >
                  {data.treatment} in{" "}
                  {/* Ülkenin koduna göre ülke ismini getirir */}
                  {Country.getCountryByCode(location.countryIsoCode).name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
