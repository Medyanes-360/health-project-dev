import QualifiedMedicalDoctors from "@/components/QualifiedMedicalDoctors/QualifiedMedicalDoctors";
import TestimonialCard from "@/components/Testimonial/TestimonialCard";

export default function Home() {
  return (
    <div>
      <TestimonialCard
        img={"/images/image.png"}
        name={"Ahmad hanki"}
        job={"Swoftware eng"}
        starts={4}
        text={
          "erfrger tger ht rh rt hy rt hy tr hy rth tr h r y h rt h rt yh rt yh t rh r ty h rt hy try h trh rth yrt"
        }
      />
      <QualifiedMedicalDoctors />

      
    </div>
  );
}
