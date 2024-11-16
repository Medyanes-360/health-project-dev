export default function CostsTable({ data }) {
  const { treatmentTypesAndCosts } = data;

  //TODO: data nasıl ayarlanacak? direk ülkeye göre mi girilecek yoksa minimum fiyatları mı çekiyoruz?
  // eğer minimum fiyatları çekiyorsak col sayısı 3'ten fazla mı oalcak?
  // row ve col sayısı sabit mi?

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full  text-sm text-center rtl:text-right ">
        <thead className="text-xs bg-[#F4F6F8] text-[#637381]   uppercase  ">
          <tr>
            <th
              scope="col"
              className="md:px-6 px-[0.5rem] py-3 font-semibold"
            ></th>

            <th scope="col" className="md:px-6 px-[0.5rem] py-3 font-semibold">
              Turkey
            </th>
            <th scope="col" className="md:px-6 px-[0.5rem] py-3 font-semibold">
              Mexico
            </th>
            <th scope="col" className="md:px-6 px-[0.5rem] py-3 font-semibold ">
              United States of America
            </th>
          </tr>
        </thead>
        <tbody className="text-black text-sm ">
          <tr className="bg-white border-b   hover:bg-gray-50 ">
            <th
              scope="row"
              className=" md:px-6 px-[0.5rem] py-4 font-normal  text-left whitespace-normal md:whitespace-nowrap"
            >
              FUE hair <br></br> transplant
            </th>
            <td className="md:px-6 px-[0.1rem] py-4">
              from <br /> $1671
            </td>
            <td className="md:px-6 px-[0.1rem] py-4">
              from <br /> $4000
            </td>
            <td className="md:px-6 px-[0.1rem] py-4">
              {" "}
              <span className="bg-[#36B37E29] text-[#1B806A] py-0.5 px-2 rounded-md">
                from $4000
              </span>
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="md:px-6 px-[0.5rem] py-4 font-normal  text-left whitespace-normal md:whitespace-nowrap"
            >
              FUE hair <br></br> transplant{" "}
            </th>
            <td className="md:px-6 px-[0.5rem] py-4">
              from <br /> $1671
            </td>
            <td className="md:px-6 px-[0.5rem] py-4">
              from <br /> $4000
            </td>
            <td className="md:px-6 px-[0.5rem] py-4">
              {" "}
              <span className="bg-[#36B37E29] text-[#1B806A] py-0.5 px-2 rounded-md">
                from $4000
              </span>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-normal text-left  whitespace-nowrap md:px-6 px-[0.5rem] py-4 font-normal  text-left whitespace-normal md:whitespace-nowrap "
            >
              FUE hair <br></br> transplant{" "}
            </th>
            <td className="md:px-6 px-[0.5rem] py-4">
              from <br /> $1671
            </td>
            <td className="md:px-6 px-[0.5rem] py-4">
              from <br /> $4000
            </td>
            <td className="md:px-6 px-[0.5rem] py-4">
              <span className="bg-[#36B37E29] text-[#1B806A] py-0.5 px-2 rounded-md">
                from $4000
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="relative">
            <td colSpan={4} className="p-4 text-xs text-black text-left ">
              The total cost is calculated individually. It may range depending
              on your medical issue, doctor&apos;s qualification, procedure
              complexity and related complications (if they occur). You’ll get
              the exact price for a plastic surgery procedure after a
              consultation with a doctor.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
