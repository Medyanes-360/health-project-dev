import ButtonComponent from "@/globalElements/Button";
import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <div className="w-full flex flex-col bg-red-100 py-10 items-center justify-center">
      <p>
        <>Dashboard Ana sayfası</>
      </p>
      <Link href="/dashboard/clinic">
        {" "}
        <ButtonComponent
          className={"!bg-primary !rounded-md !text-fourth !w-full !text-lg"}
          title={"Click To redirect to /dashboard/clinic"}
        />
      </Link>
    </div>
  );
}
