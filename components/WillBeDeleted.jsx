"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WillBeDeleted = () => {
  const router = useRouter();
  const session = useSession();
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
    "/dashboard/clinic",
    "/dashboard/admin",
    "/test",
    "/login",
    "/register",
  ];
  const handleSelect = (e) => {
    console.log(e.target.value);
    router.push(e.target.value);
  };
  useEffect(() => {
    if (session.data) console.log(session.data.user);
  });
  return (
    <div className="space-y-2 fixed  top-44 z-[100000]  bg-red-300 left-0 w-fit  flex flex-col">
      <div>
        <p>
          Kullanıcı email:{" "}
          <strong>{session.data && session.data.user.email}</strong>{" "}
        </p>
        <p>
          Kullanıcı Rolü:{" "}
          <strong>{session.data && session.data.user.role}</strong>{" "}
        </p>
      </div>
      <select onChange={handleSelect} className="bg-red-300 min-h-10 ">
        <option selected disabled>
          Linkler
        </option>
        {links.map((link, index) => (
          <option key={index} className="text-black text-center" value={link}>
            {link}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WillBeDeleted;
