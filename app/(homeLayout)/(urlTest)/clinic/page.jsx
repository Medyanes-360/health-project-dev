export default function ClinicPage() {
  return (
    <>
      /Clinic Route. user will be redirected to /clinics when this route is
      visited
    </>
  );
}

// Bookimed'de /clinic için bir index dosyası oluşturulmamış. /clinic url'ine gidildiğinde 404 dönüyor.
// bu sayfada eğer /clinic'e gelinirse /clinics'e (global arama sayfasına) redirect yap denilebilir.
