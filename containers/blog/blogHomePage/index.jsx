"use client";
import { BlogCarousel } from "@/components/blog/blogHomePage/BlogCarousel";
import CategoriesDisplay from "@/components/blog/blogHomePage/CategoriesDisplay";
import BreadCrumbComponent from "@/globalElements/breadcrumb";

export default function BlogHomePageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <BlogCarousel />
      <CategoriesDisplay />
    </>
  );
}
