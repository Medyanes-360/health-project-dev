import Image from "next/image";
import Link from "next/link";

const ContactUsBandComponent = () => {
  return (
    <section className="flex justify-between">
      <div className="flex bg-red-500">
        <Image
          src="/assets/icons/stethescope.svg"
          alt="icon"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          {" "}
          <h2>Looking for professional & trusted medical healthcore? </h2>
          <p>Don&apos;t hesitate to contact us.</p>
        </div>
      </div>
      <Link href="/become-a-partner">Become a Partner </Link>
    </section>
  );
};
export default ContactUsBandComponent;
