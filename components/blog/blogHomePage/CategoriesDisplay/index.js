import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "Aroma Therapy", value: 2 },
  { name: "Audio Massage", value: 5 },
  { name: "Medical", value: 3 },
  { name: "Physiotherapy", value: 4 },
  { name: "Reiki", value: 1 },
  { name: "Sanitize", value: 8 },
  { name: "Sanitize", value: 9 },
  { name: "Sanitize", value: 6 },
  { name: "Sanitize", value: 7 },
];

export default function CategoriesDisplay() {
  return (
    <ExtraLargePageContainer>
      <div className="mb-[2000px] mt-[22px] flex flex-col gap-3 md:gap-0">
        <Image
          src="/assets/blogs/img1.jpg"
          alt="doctor"
          width={200}
          height={200}
          className="h-[123px] object-cover object-center w-full rounded-[11px] md:hidden"
          sizes="(max-width: 768px) 100vw, 200px"
        />
        {/*mobile menu buraya gelecek*/}
        <div className="hidden md:flex flex-row h-screen gap-10">
          {/*Left*/}
          <div className="basis-[22%]">
            <div className="text-center flex items-center justify-center bg-[#52B8AB] rounded h-[28px] py-4 font-semibold font-inter mb-4 text-white">
              <h1>All Categories</h1>
            </div>
            <div>
              {items.map((item, index) => (
                <div className="flex justify-between items-center font-poppins text-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/blogs/arrow-right.png"
                      alt="arrow-right"
                      width={18}
                      height={18}
                    />
                    <Link href="#" key={index} className="text-[#6A778B]">
                      {item.name}
                    </Link>
                  </div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          {/*Right*/}
          <div className="basis-3/4 bg-red-500"></div>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
