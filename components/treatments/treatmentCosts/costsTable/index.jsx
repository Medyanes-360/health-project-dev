export default function CostsTable() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table class="w-full  text-sm text-center rtl:text-right ">
        <thead class="text-xs bg-[#F4F6F8] text-[#637381]   uppercase  ">
          <tr>
            <th scope="col" class="px-6 py-3 font-semibold"></th>
            <th scope="col" class="px-6 py-3 font-semibold">
              Turkey
            </th>
            <th scope="col" class="px-6 py-3 font-semibold">
              Mexico
            </th>
            <th scope="col" class="px-6 py-3 font-semibold ">
              United States of America
            </th>
          </tr>
        </thead>
        <tbody className="text-black ">
          <tr class="bg-white border-b   hover:bg-gray-50 ">
            <th
              scope="row"
              class="px-6 py-4 font-normal  text-left whitespace-nowrap "
            >
              FUE hair transplant
            </th>
            <td class="px-6 py-4">from $1671</td>
            <td class="px-6 py-4">from $4000</td>
            <td class="px-6 py-4">
              {" "}
              <span className="bg-[#36B37E29] text-[#1B806A] py-0.5 px-2 rounded-md">
                from $4000
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              class="px-6 py-4 font-normal text-left whitespace-nowrap "
            >
              FUE hair transplant{" "}
            </th>
            <td class="px-6 py-4">from $1671</td>
            <td class="px-6 py-4">from $4000</td>
            <td class="px-6 py-4">
              {" "}
              <span className="bg-[#36B37E29] text-[#1B806A] py-0.5 px-2 rounded-md">
                from $4000
              </span>
            </td>
          </tr>
          <tr class="bg-white border-bhover:bg-gray-50 ">
            <th
              scope="row"
              class="px-6 py-4 font-normal text-left  whitespace-nowrap "
            >
              FUE hair transplant{" "}
            </th>
            <td class="px-6 py-4">from $1671</td>
            <td class="px-6 py-4">from $4000</td>
            <td class="px-6 py-4">
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
          </tr>{" "}
        </tfoot>
      </table>
    </div>
  );
}
