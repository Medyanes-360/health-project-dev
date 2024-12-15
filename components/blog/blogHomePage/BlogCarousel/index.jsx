("use-client");
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { GoArrowRight } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

export const BlogCarousel = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/1.jpg"
          title="Aesthetic Tourism"
          date="1 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/4.jpg"
          title="Aesthetic Tourism"
          date="2 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/2.jpg"
          title="Aesthetic Tourism"
          date="3 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/3.jpg"
          title="Aesthetic Tourism"
          date="4 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/4.jpg"
          title="Aesthetic Tourism"
          date="5 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/1.jpg"
          title="Aesthetic Tourism"
          date="6 Sep, 2021"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageSrc="/assets/blogs/crousel/3.jpg"
          title="Aesthetic Tourism"
          date="7 Sep, 2021"
        />
      ),
    },
  ];

  return (
    <ExtraLargePageContainer>
      <CustomCarousel cards={cards} offset={2} showArrows={false} />
    </ExtraLargePageContainer>
  );
};
const CustomCarousel = (props) => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className="w-full h-[497px] mt-[50px] mb-[40px] text-center bg-[#e4eeed] rounded-3xl hidden md:block">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
};
const Card = ({ imageSrc, title, date }) => {
  return (
    <div className="flex items-center rounded-xl relative w-[321px] h-[406px] overflow-hidden select-none">
      <Image
        src={imageSrc}
        width={600}
        height={600}
        alt="carousel"
        className="!object-fill cursor-pointer w-full h-full"
        quality={100}
      />
      <div className="absolute text-white bottom-0 flex flex-col items-center justify-start gap-[15px] px-4 w-full h-[105px]">
        <div className="flex items-center gap-3 font-poppins">
          <h1 className="text-sm uppercase py-[4.5px] px-[9px] rounded-xl text-black bg-[#FFC759]">
            {title}
          </h1>
          <div className="flex items-center gap-[4px]">
            <IoCalendarOutline />
            <p className="text-sm">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-[6px] self-start pl-[20px] w-full">
          <Link href="#" className="text-xs font-lexend">
            Read More
          </Link>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};
