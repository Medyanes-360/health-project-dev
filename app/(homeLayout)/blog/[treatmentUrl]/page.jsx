import TreatmentBlogPageContainer from "@/containers/blog/treatmentBlogPage";
import { redirect } from "next/navigation";

export default function TreatmentBlogPage({ params }) {
  const treatmentBlogData = treatmentBlogsData.find(
    (blogData) => blogData.treatment.url == params.treatmentUrl
  );
  // eğer böyle bir treatmentBlogData yoksa blog ana sayfasına yönlendir:
  if (!treatmentBlogData) {
    redirect("/blog");
  }

  return <TreatmentBlogPageContainer treatmentblogdata={treatmentBlogData} />;
}

// yukarıdaki container'a gönderilecek data, buradan gidecek:
const treatmentBlogsData = [
  {
    id: 0,
    treatment: {
      id: 0,
      title: "Hair Transplant",
      fullTitle: "Hair Transplant",
      url: "hair-transplant",
    },
    // blogData buradan aşağısına gelecek.

    blogText: "örnek blog text data",
    image: "/örnek-blog-image.png",
    // şeklinde. blog sayfasında kullanacağımız entity'nin bilgileri.
  },
];
