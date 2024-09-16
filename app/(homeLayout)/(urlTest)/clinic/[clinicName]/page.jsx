export default function ClinicPage({ params }) {
  console.log(params.clinicName);
  // aslında clinic'in unique url'i. database'de findByUrl ile arayarak bu url'e sahip clinic'i getir diyebiliriz
  // encodeURI(title) - decodeURI() yapabilir miyiz? encodeuri-decodeuri fonksiyonlarında bazı karakterlerde
  // sorun çıkıyor diye hatırlıyorum. ama denenebilir, artısı database'de clinicler için url propu eklememek olur en fazla.

  return <></>;
}
