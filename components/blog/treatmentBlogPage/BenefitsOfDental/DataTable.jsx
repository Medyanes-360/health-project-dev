const DataTable = ({ data }) => {
  return (
    <div className="grid grid-cols-5 text-start rounded-2xl overflow-hidden">
      {/* Header Row */}
      <div className="bg-[#ECE4FF] px-4 text-black py-5">Veneer Type</div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#ECE4FF] px-4 py-5 text-black">
          {item.veneerType}
        </div>
      ))}

      {/* Composite Veneers Row */}
      <div className="bg-[#FFFFFF] px-4 py-5">Composite Veneers</div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#FFFFFF] px-4 py-5">
          {item.compositeVeneers}
        </div>
      ))}

      {/* Porcelain Veneers Row */}
      <div className="bg-[#FFFFFF] px-4 py-5">Porcelain Veneers</div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#FFFFFF] px-4 py-5">
          {item.porcelainVeneers}
        </div>
      ))}

      {/* Lumineers Row */}
      <div className="bg-[#FFFFFF] px-4 py-5">Lumineers</div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#FFFFFF] px-4 py-5">
          {item.Lumineers}
        </div>
      ))}

      {/* Full Set of 16 Veneers Row */}
      <div className="bg-[#FFFFFF] px-4 py-5">Full Set of 16 Veneers</div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#FFFFFF] px-4 py-5">
          {item.fullSetOf16veneers}
        </div>
      ))}
    </div>
  );
};

export default DataTable;
