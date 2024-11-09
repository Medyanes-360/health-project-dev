import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { Country } from "country-state-city";

const data = {
  treatment: {
    id: 4,
    title: "Hair Transplant",
    fullTitle: "Fue Hair Transplant ",
    url: "hair-transplant",
  },
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
      <div className="bg-white p-10 shadow-[0px_12px_24px_-4px_#919EAB1F] rounded-3xl gap-4 flex flex-col mb-60">
        <div className="flex items-center">
          <h1 className="text-2xl text-primary">Coutries for treatment</h1>
        </div>
        <div className="flex flex-col gap-2">
          {data.locations.map((location, i) => {
            return (
              <div key={i} className="">
                <Link
                  href={`/clinics/${data.treatment.url}?country=${location.countryIsoCode}&state=${location.stateIsoCode}`}
                  className="p-4 md:p-6 bg-[#f9f9f9] hover:bg-third/10 transition-all duration-200 rounded-3xl flex flex-col"
                >
                  {data.treatment.title} in{" "}
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
