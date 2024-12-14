import ClinicListItem from "./clinicListItem";
import { useState, useEffect } from "react";
import TrustPilotInfo from "./trustPilotInfo";

export default function ClinicList({ maxheight }) {
  const [isLoading, setIsLoading] = useState(false);
  const [clinics, setClinics] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol eden fonksiyon
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchClinics = async (newPage = page) => {
    if (isLoading || !hasMore) return;
    setIsLoading(true); // Yükleme başlıyor

    setTimeout(() => {
      const newClinics = Array(5)
        .fill("")
        .map((_, idx) => `Clinic ${(newPage - 1) * 5 + idx + 1}`);
      setClinics((prev) =>
        newPage === 1 ? newClinics : [...prev, ...newClinics]
      );
      if (newClinics.length < 5) setHasMore(false); // Daha fazla veri yok
      setIsLoading(false); // Yükleme tamamlandı
      setPage(newPage); // Sayfayı güncelle
    }, 1000);
  };

  // İlk veri yüklemesi
  useEffect(() => {
    fetchClinics(1);
  }, []);

  return (
    <div
      style={{
        maxHeight: `${maxheight}px`,
        overflowY: "scroll",
        overflowX: "visible",
      }}
      className={`no-scrollbar flex flex-col items-center ${
        maxheight == 0 ? "!max-h-[720px]" : ""
      }`}
    >
      {clinics.map((clinic, index) => (
        <div key={index}>
          <ClinicListItem />
          {(index + 1) % 3 === 0 && <TrustPilotInfo />}
        </div>
      ))}
      {!hasMore && <div>No more clinics to show.</div>}

      {/* Mobilde Previous/Next */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              if (page > 1) fetchClinics(page - 1);
            }}
            disabled={page === 1 || isLoading}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => fetchClinics(page + 1)}
            disabled={!hasMore || isLoading}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Büyük Ekranda Load More */}
      {!isMobile && hasMore && clinics.length > 0 && !isLoading && (
        <button
          onClick={() => fetchClinics(page + 1)}
          disabled={isLoading}
          className="px-4 py-2 mt-4 bg-primary text-white rounded"
        >
          Load More
        </button>
      )}

      {isLoading && (
        <div className="px-4 py-2 mt-4 bg-primary text-white rounded">Loading...</div>
      )}
    </div>
  );
}
