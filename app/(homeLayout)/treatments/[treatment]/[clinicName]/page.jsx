"use client";
import ClinicPageContainer from "@/containers/clinicPage";
import { notFound, useParams, useSearchParams } from "next/navigation";

const clinicsData = [
  {
    id: 0,
    clinicName: "Adem and Havva Medical Center",
    location: "Istanbul, Turkey",
  },
  {
    id: 1,
    clinicName: "Gökhan CİMŞİR Medical Center",
    location: "Ankara, Turkey",
  },
  {
    id: 2,
    clinicName: "Burak and Leyla Medical Center",
    location: "Istanbul, Turkey",
  },
];

export default function ClinicPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams.get("id")); // clinic ID'sini verir
  console.log(params.clinicName); // clinic Name'i verir

  const clinic = clinicsData.find(
    (clinic) => clinic.id == searchParams.get("id")
  );
  //TODO: id'den gelen clinicle clinicName eşleşiyor mu? eşleşmiyorsa id'si verilen clinic'in url'ine yönlendir.
  //örneğin: /adem-and-havva?id=1 verildi. id=1 gökhan and cimşir medical center'a ait. o zaman
  // /gokhan-and-cimsir/?id=1 adresine yönlendir.
  if (!clinic) {
    notFound();
  }

  return <ClinicPageContainer clinic={clinic} />;
}
