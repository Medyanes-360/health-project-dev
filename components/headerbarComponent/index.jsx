import Image from "next/image";
import Link from "next/link";

const HeaderbarComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        {" "}
        <Image
          alt="company logo"
          width={100}
          height={50}
          src="/assets/images/company_logo.png"
        />
        <div className="ml-5">Select component </div>
      </div>
      <div className="flex">
        <p> five stars---- 5.0 Rating</p>
        <Link className="ml-5" href="/become-a-partner">
          Become a Partner
        </Link>
      </div>
    </div>
  );
};
export default HeaderbarComponent;
