import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import Link from "next/link";
import CategoriesDisplayItem from "@/components/blog/blogHomePage/GridItem/CategoriesDisplayItem";
import {
  categoryItem,
  blogCardData,
  topBlog,
} from "@/data/componentData/blogs";

export default function CategoriesDisplay() {
  return (
    <ExtraLargePageContainer>
      <div className="mb-[2000px] mt-[22px] flex flex-col gap-6 md:gap-0">
        <Image
          src="/assets/blogs/img1.jpg"
          alt="doctor"
          width={200}
          height={200}
          className="h-[123px] object-cover object-center w-full rounded-[11px] md:hidden"
          sizes="(max-width: 768px) 100vw, 200px"
        />
        {/*mobile menu */}
        <div class="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-[62px] overflow-y-scroll font-poppins text-sm flex items-center justify-start gap-5  md:hidden">
          <Link
            href="#"
            className="whitespace-nowrap rounded bg-[#52B8AB] py-1 px-6 text-white"
          >
            All
          </Link>
          {categoryItem.map((item, index) => (
            <Link
              href="#"
              key="index"
              className="text-[#6A778B] whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          {/*Left*/}
          <div className="md:basis-[20%] hidden md:block">
            <div className="flex flex-col justify-between h-full">
              <div className="px-4 flex flex-col gap-5">
                <div className="text-center flex items-center justify-center bg-[#52B8AB] rounded h-[28px] py-4 font-semibold font-inter mb-4 text-white">
                  All Categories
                </div>
                {categoryItem.map((item, index) => (
                  <div
                    className="flex items-center font-poppins text-sm"
                    key={index}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/blogs/arrow-right.png"
                        alt="arrow-right"
                        width={18}
                        height={22}
                      />
                      <Link
                        href="#"
                        key={index}
                        className="text-[#6A778B] whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div className="w-full text-end text-sm text-[#090909]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              {/*alt*/}
              <div className="border-[#F9F9F9] rounded-3xl py-3 w-full px-4 pb-[29px] shadow">
                <h1 className="font-semibold text-lg leading-[32px]">
                  Top blog
                </h1>
                <hr class="h-px mt-[10px] mb-3 bg-gray-200 border-0 opacity-60" />
                <div className="space-y-3">
                  {topBlog.map((item, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <Image
                            src={item.imageSrc}
                            alt={item.altText}
                            width={0}
                            height={0}
                            className="object-contain max-w-[12px] size-3"
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                          <div className="font-poppins text-sm leading-[22px]">
                            {item.title}
                          </div>
                        </div>
                        <div className="text-end font-medium text-[10px] text-[#9199A3]">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*Right*/}
          <div className="md:basis-[80%] w-full">
            {/*grid*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2">
              {blogCardData.map((item, index) => (
                <CategoriesDisplayItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
}
