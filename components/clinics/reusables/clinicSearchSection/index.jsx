"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import FilteredClinicsMainComponent from "./filteredClinicsMainComponent";
import FilterOptionsSidebarComponent from "./filterOptionsSidebarComponent";
import { useEffect, useRef, useState } from "react";

export default function ClinicSearchSection() {
  const sidebarRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  //sidebar'ın size'ına göre mainComponent'ın max height'ını değiştiriyoruz:
  useEffect(() => {
    if (!sidebarRef.current) return;
    setSidebarHeight(
      sidebarRef.current && sidebarRef.current.getBoundingClientRect().height
    );
    // sidebar size'ı değiştiğinde haber ver:
    const resizeObserver = new ResizeObserver(() => {
      setSidebarHeight(
        sidebarRef.current && sidebarRef.current.getBoundingClientRect().height
      );
    });
    resizeObserver.observe(sidebarRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  return (
    <ExtraLargePageContainer className="my-10 gap-3 !relative flex">
      <FilterOptionsSidebarComponent sidebarRef={sidebarRef} />
      <FilteredClinicsMainComponent maxheight={sidebarHeight} />
    </ExtraLargePageContainer>
  );
}
