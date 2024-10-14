"use client";
import BreadCrumbComponent from "@/globalElements/breadcrumb";

export default function BlogHomePageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <p className="text-3xl">
        Bloglar için home page. Burada son yazılar, popüler yazılar ,editörün
        seçtikleri gibi şeyler olabilir.
      </p>
    </>
  );
}
