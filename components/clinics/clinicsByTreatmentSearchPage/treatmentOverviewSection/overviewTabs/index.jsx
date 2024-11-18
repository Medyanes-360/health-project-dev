"use client";

import { useState } from "react";
import PanelOne from "./overviewTabPanels/panelOne";
import PanelTwo from "./overviewTabPanels/panelTwo";
import PanelThree from "./overviewTabPanels/panelThree";
import PanelFour from "./overviewTabPanels/panelFour";
import PanelFive from "./overviewTabPanels/panelFive";
import PanelSix from "./overviewTabPanels/panelSix";

const data = {
  patientsRecommend: "76",
  rehabilitationDuration: "1 Day",
  beforeAndAfterPhotosCount: 48,
  bookimedFees: 0,
  surgeryTime: "4 Hours",
  anestesiaType: "Local Anesteshia",
  verifiedPatientReviewsCount: 471,
  stayInCountryDuration: "3 Days",
  bestPrice: 1500,
  processedRequestCount: 110449,
};
export default function OverviewTabs({ data }) {
  const overview = data;
  const [openPanel, setOpenPanel] = useState(0);
  const clickHandler = (e) => {
    setOpenPanel(e.target.dataset.overviewtabid);
  };

  return (
    <div className="overflow-hidden">
      <div className="mb-4   no-scrollbar overflow-scroll ">
        <div className="flex py-3 flex-nowrap w-full -mb-px text-sm font-medium text-center">
          <button
            onClick={clickHandler}
            data-overviewtabid="0"
            className={`${
              openPanel == 0 && "!border-b-primary !text-black "
            }  inline-block   text-sm text-nowrap  p-4 border-b-[3px] border-b-transparent text-black-disabled rounded-t-lg`}
            type="button"
          >
            Takeaways
          </button>

          <button
            onClick={clickHandler}
            data-overviewtabid="1"
            className={`${
              openPanel == 1 && "!border-b-primary !text-black "
            }   inline-block text-sm  text-nowrap  p-4 border-b-[3px] border-b-transparent text-black-disabled rounded-t-lg`}
            type="button"
          >
            Related procedures & Costs
          </button>

          <button
            onClick={clickHandler}
            data-overviewtabid="2"
            className={`${
              openPanel == 2 && "!border-b-primary !text-black "
            }   inline-block text-sm text-nowrap   p-4 border-b-[3px] border-b-transparent text-black-disabled rounded-t-lg`}
            type="button"
          >
            How it works
          </button>

          <button
            onClick={clickHandler}
            data-overviewtabid="3"
            className={`${
              openPanel == 3 && "!border-b-primary !text-black "
            }   inline-block text-sm  text-nowrap  p-4 border-b-[3px] border-b-transparent text-black-disabled rounded-t-lg`}
            type="button"
          >
            What to expect
          </button>

          <button
            onClick={clickHandler}
            data-overviewtabid="4"
            className={`${
              openPanel == 4 && "!border-b-primary !text-black "
            }    inline-block text-sm  text-nowrap  p-4 border-b-[3px] border-b-transparent text-black-disabled  rounded-t-lg`}
            type="button"
          >
            Benefits
          </button>

          <button
            onClick={clickHandler}
            data-overviewtabid="5"
            className={`${
              openPanel == 5 && "!border-b-primary !text-black "
            }    inline-block text-sm text-nowrap   p-4 border-b-[3px] border-b-transparent text-black-disabled  rounded-t-lg`}
            type="button"
          >
            Payment
          </button>
        </div>
      </div>
      <div>
        <div
          className={`${openPanel == 0 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelOne data={overview.takeAways} />
        </div>
        <div
          className={`${openPanel == 1 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelTwo data={overview.relatedProceduresAndCosts} />
        </div>
        <div
          className={`${openPanel == 2 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelThree data={overview.howItworks} />
        </div>
        <div
          className={`${openPanel == 3 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelFour data={overview.whatToExpect} />
        </div>
        <div
          className={`${openPanel == 4 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelFive data={overview.benefits} />
        </div>
        <div
          className={`${openPanel == 5 ? "block" : "hidden"} animate-fadeIn`}
        >
          <PanelSix />
        </div>
      </div>
    </div>
  );
}
