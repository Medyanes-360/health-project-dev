import Link from "next/link";

const WillBeDeleted = () => {
  const links = [
    "/",
    "/blog",
    "/blog/hair-transplant",
    "/clinics",
    "/clinics/hair-transplant",
    "/clinic",
    "/clinic/adem-and-havva-medical-center",
    "/clinic/adem-and-havva-medical-center/hair-transplant",
    "/doctor",
    "/doctor/doctor-url",
    "/doctors",
    "/dashboard",
    "/test",
    "/login",
    "/register",
  ];
  return (
    <div className="space-y-2 flex flex-col">
      {links.map((link) => (
        <Link className="text-black text-center" href={link}>
          {link}
        </Link>
      ))}
    </div>
  );
};

export default WillBeDeleted;
