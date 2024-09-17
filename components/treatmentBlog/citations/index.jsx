import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

const Citations = () => {
  return (
    <div className="pb-40">
      <ExtraLargePageContainer>
        <div className={"space-y-4"}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAA00] to-[#EF1BC0] text-2xl sm:text-4xl ">
            Citations{" "}
          </h1>

          <ul className="list-disc marker:text-[20px] ">
            <div className="pl-6">
              <li className="font-light">
                Wikipedia. (2021). Veneer
                (dentistry). https://en.m.wikipedia.org/wiki/Veneer_(dentistry)
              </li>
              <li className="font-light">
                ScienceDirect. (2019). Ceramics for
                dentistry. https://www.sciencedirect.com/topics/medicine-and-dentistry/cerec{" "}
              </li>
              <li className="font-light">
                The Lancet. (2017). Healthcare Access and Quality
                Index https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)30818-8/fulltext
              </li>
              <li className="font-light">
                HealthLine. (2017). What to Know Before You Get Dental
                Veneers. https://www.healthline.com/health/dental-veneers#cost{" "}
              </li>
              <li className="font-light">
                Statista. (2021). Average daily rate of hotels in the United
                States https://www.statista.com/statistics/195704/average-hotel-room-rate-in-the-us-since-2005/{" "}
              </li>
              <li className="font-light">
                ADA.Marketplace. Veneers Vs Dentures: Which One is Right for
                You?https://marketplace.ada.org/blog/dental-services/veneers-vs-dentures-which-one-is-right-for-you/{" "}
              </li>
            </div>
          </ul>
        </div>
      </ExtraLargePageContainer>
    </div>
  );
};

export default Citations;
