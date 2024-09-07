import RelatedArticlesCard from "./RelatedArticlesCard";

const data = [
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. adwdwef wefcwefdwe fwefdwedfw wefwfdwef wfwfwfwfdw An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. adwdwef wefcwefdwe fwefdwedfw wefwfdwef wfwfwfwfdw An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. adwdwef wefcwefdwe fwefdwedfw wefwfdwef wfwfwfwfdw An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. adwdwef wefcwefdwe fwefdwedfw wefwfdwef wfwfwfwfdw An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    createdAt: "5 mins ago",
    seen: "245",
  },
  {
    image: "/assets/images/beforeAfter.png",
    description:
      "Hair Transplant Success Story, ‘It took 7 hours with a lunch break. An anesthetic injection was the most painful part of the procedure.",
    icon: "/assets/images/image.png",
    name: "Ahmad Hanki",
    CreatedAt: "5 mins ago",
    seen: "245",
  },
];

const RelatedArticles = () => {
  return (
    <div className="pb-20">
      <div className="xl:container mx-auto px-4 space-y-8">
        <h1 className="font-bold text-xl sm:text-2xl text-secondary">
          Related Articles
        </h1>

        <div>
          <RelatedArticlesCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
