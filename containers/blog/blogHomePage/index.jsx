"use client";
import CategoriesDisplay from "@/components/blog/blogHomePage/CategoriesDisplay";
import BreadCrumbComponent from "@/globalElements/breadcrumb";

export default function BlogHomePageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <CategoriesDisplay />
    </>
  );
}
