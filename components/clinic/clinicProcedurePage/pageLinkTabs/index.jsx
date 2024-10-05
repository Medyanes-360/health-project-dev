"use client";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";
import { useState } from "react";

export default function PageLinkTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ExtraLargePageContainer className="mt-6 py-3">
      <div className="flex px-6 justify-between">
        <span
          onClick={() => {
            setActiveTabIndex(0);
          }}
        >
          <Link
            href="#overviewSection"
            className={`${
              activeTabIndex == 0 && "!border-b-primary !text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            Overview
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(1);
          }}
        >
          <Link
            href="#beforeAndAfterPhotosSection"
            onClick={() => {
              setActiveTabIndex(1);
            }}
            className={`${
              activeTabIndex == 1 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200  text-[#9199A3] `}
          >
            Before & After Photos
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(2);
          }}
        >
          <Link
            href="#programDetailsSection"
            onClick={() => {
              setActiveTabIndex(2);
            }}
            className={`${
              activeTabIndex == 2 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            Program Details
          </Link>
        </span>{" "}
        <span
          onClick={() => {
            setActiveTabIndex(3);
          }}
        >
          <Link
            href="#howItWorksSection"
            onClick={() => {
              setActiveTabIndex(3);
            }}
            className={`${
              activeTabIndex == 3 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            How It Works
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(4);
          }}
        >
          <Link
            href="#reviewsSection"
            scroll={true}
            onClick={() => {
              setActiveTabIndex(4);
            }}
            className={`${
              activeTabIndex == 4 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            Reviews
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(5);
          }}
        >
          <Link
            href="#locationSection"
            onClick={() => {
              setActiveTabIndex(5);
            }}
            className={`${
              activeTabIndex == 5 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            Location{" "}
          </Link>
        </span>
        <span
          onClick={() => {
            setActiveTabIndex(6);
          }}
        >
          <Link
            href="#faqSection"
            onClick={() => {
              setActiveTabIndex(6);
            }}
            className={`${
              activeTabIndex == 6 && "border-b-primary text-[#212B36]"
            } py-3 border-b-2 cursor-pointer border-b-transparent  font-semibold text-sm hover:text-[#212B36] transition-all duration-200 text-[#9199A3] `}
          >
            FAQ{" "}
          </Link>
        </span>
      </div>
    </ExtraLargePageContainer>
  );
}
