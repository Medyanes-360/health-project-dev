"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClinicPage() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    // each second count=count-1
    const interval = setInterval(() => {
      setCount((updatedCount) => updatedCount - 1);
    }, 1000);
    // if count===0 redirect

    count == 0 && redirect(`/clinics`);

    // always clear the timeers in return function
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <>
      <p className="text-4xl my-10 text-center">
        This page cannot be found. Redirecting to homepage in {" " + count}
        {count > 1 ? " seconds" : " second"}.
      </p>
    </>
  );
}
