"use client";
import { useState } from "react";
import DepartmentCard from "./departmentCard";
import FeatureCard from "./featureCard";
import ExtraLargePageContainer from "@/containers/largePageContainer";

const propsData = [
  {
    categoryname: "Dental Treatments",
    icon: "https://fontawesome.com/icons/tooth?style=solid",
    subcategories: [
      "Dental Implants",
      "Teeth Whitening",
      "Orthodontics (Braces)",
      "Cosmetic Dentistry",
      "Root Canal Treatment",
      "Veneers",
      "Crowns and Bridges",
      "Dentures",
      "Periodontics",
      "Pediatric Dentistry",
      "Dental Bonding",
      "Emergency Dental Care",
      "Invisalign (Clear Aligners)",
      "Sedation Dentistry",
      "Oral Surgery",
    ],
  },
  {
    categoryname: "Aesthetic Surgery",
    icon: "https://fontawesome.com/icons/scalpel?style=solid",
    subcategories: [
      "Facelift",
      "Rhinoplasty (Nose Job)",
      "Breast Augmentation",
      "Liposuction",
      "Tummy Tuck (Abdominoplasty)",
      "Eyelid Surgery (Blepharoplasty)",
      "Breast Reduction",
      "Buttock Augmentation",
      "Chin Augmentation",
      "Neck Lift",
      "Otoplasty (Ear Surgery)",
      "Arm Lift (Brachioplasty)",
      "Body Contouring",
      "Gynecomastia Surgery",
      "Laser Skin Resurfacing",
    ],
  },
  {
    categoryname: "Hair Transplant",
    icon: "https://fontawesome.com/icons/hairbrush?style=solid",
    subcategories: [
      "Follicular Unit Transplantation (FUT)",
      "Follicular Unit Extraction (FUE)",
      "Direct Hair Implantation (DHI)",
      "Scalp Micropigmentation",
      "Hairline Lowering Surgery",
      "Beard Transplant",
      "Eyebrow Transplant",
      "Hair Restoration Medication",
      "Platelet-Rich Plasma (PRP) Therapy",
      "Non-Surgical Hair Restoration",
      "Hair Transplant for Women",
      "Post-Transplant Care",
      "Hair Loss Treatment Consultations",
      "Hair Thinning Solutions",
      "Alopecia Treatments",
    ],
  },
  {
    categoryname: "Orthopedic Surgery",
    icon: "https://fontawesome.com/icons/bone?style=solid",
    subcategories: [
      "Hip Replacement",
      "Knee Replacement",
      "Spine Surgery",
      "Shoulder Surgery",
      "Arthroscopy",
      "Sports Injuries Treatment",
      "Joint Replacement Surgery",
      "Hand Surgery",
      "Foot and Ankle Surgery",
      "Osteotomy",
      "Ligament Reconstruction",
      "Fracture Repair",
      "Cartilage Repair",
      "Spine Fusion Surgery",
      "Orthopedic Trauma Surgery",
    ],
  },
  {
    categoryname: "Cosmetic Dermatology",
    icon: "https://material.io/resources/icons/?icon=face&style=baseline",
    subcategories: [
      "Botox Injections",
      "Dermal Fillers",
      "Laser Hair Removal",
      "Chemical Peels",
      "Microdermabrasion",
      "Acne Scar Treatment",
      "Skin Tightening",
      "Pigmentation Treatment",
      "Rosacea Treatment",
      "Cryotherapy",
      "Eczema and Psoriasis Treatment",
      "Stretch Mark Removal",
      "Wart Removal",
      "Mole Removal",
      "Sun Damage Treatment",
    ],
  },
  {
    categoryname: "Bariatric Surgery",
    icon: "https://fontawesome.com/icons/weight-scale?style=solid",
    subcategories: [
      "Gastric Bypass Surgery",
      "Sleeve Gastrectomy",
      "Adjustable Gastric Banding",
      "Biliopancreatic Diversion with Duodenal Switch (BPD/DS)",
      "Intragastric Balloon",
      "Metabolic Surgery",
      "Revisional Bariatric Surgery",
      "Minimally Invasive Bariatric Surgery",
      "Weight Loss Consultations",
      "Nutritional Counseling",
      "Post-Operative Care",
      "Body Contouring after Weight Loss",
      "Obesity Management",
      "Bariatric Endoscopy",
      "Weight Loss Medications",
    ],
  },
  {
    categoryname: "Cardiovascular Treatments",

    icon: "https://fontawesome.com/icons/heartbeat?style=solid",
    subcategories: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Angioplasty and Stenting",
      "Heart Valve Repair/Replacement",
      "Pacemaker Implantation",
      "Atrial Fibrillation Treatment",
      "Cardiac Catheterization",
      "Electrophysiology Studies",
      "Heart Transplant",
      "Peripheral Vascular Disease Treatment",
      "Hypertension Management",
      "Endovenous Laser Therapy (EVLT)",
      "Congestive Heart Failure Management",
      "Cardiovascular Consultations",
      "Cardiac Rehabilitation",
      "Risk Assessment and Prevention",
    ],
  },
  {
    categoryname: "Oncology",
    icon: "https://fontawesome.com/icons/ribbon?style=solid",
    subcategories: [
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy",
      "Targeted Therapy",
      "Hormone Therapy",
      "Surgery for Cancer Removal",
      "Breast Cancer Treatment",
      "Prostate Cancer Treatment",
      "Lung Cancer Treatment",
      "Colorectal Cancer Treatment",
      "Leukemia Treatment",
      "Melanoma Treatment",
      "Palliative Care",
      "Clinical Trials",
      "Cancer Screening and Diagnostics",
    ],
  },
  {
    categoryname: "Fertility Treatments",
    icon: "https://fontawesome.com/icons/baby?style=solid",
    subcategories: [
      "In Vitro Fertilization (IVF)",
      "Intracytoplasmic Sperm Injection (ICSI)",
      "Egg Donation",
      "Sperm Donation",
      "Embryo Transfer",
      "Preimplantation Genetic Testing (PGT)",
      "Fertility Preservation",
      "Surrogacy",
      "Fertility Consultations",
      "Uterine Transplant",
      "Egg Freezing",
      "Male Fertility Treatments",
      "Hormone Therapy for Fertility",
      "Ovulation Induction",
      "Fertility Preservation for Cancer Patients",
    ],
  },
  {
    categoryname: "GeneralSurgery",
    icon: "https://material.io/resources/icons/?icon=health_and_safety&style=baseline",
    subcategories: [
      "Appendectomy",
      "Hernia Repair",
      "Gallbladder Removal",
      "Colon Resection",
      "Cholecystectomy",
      "Thyroid Surgery",
      "Abdominal Surgery",
      "Laparoscopic Surgery",
      "Prostate Surgery",
      "Weight Loss Surgery",
      "Surgical Biopsy",
      "Skin Cancer Removal",
      "Emergency Surgery",
      "Robotic Surgery",
      "Minimally Invasive Surgery",
    ],
  },
];

const MostPopularVacanciesSection = () => {
  const data = propsData;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <ExtraLargePageContainer className=" ">
        <div className="   border-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-5  ">
          {data.slice(0, 4).map((feature, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <FeatureCard active={activeIndex == index} data={feature} />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
          {data[activeIndex].subcategories
            .slice(0, 6)
            .map((category, index) => {
              return <DepartmentCard key={index} data={category} />;
            })}

          {data[activeIndex].subcategories
            .slice(6, 10)
            .map((category, index) => {
              return (
                <DepartmentCard
                  className="
                 hidden md:block"
                  key={index}
                  data={category}
                />
              );
            })}

          {data[activeIndex].subcategories
            .slice(10, 12)
            .map((category, index) => {
              return (
                <DepartmentCard
                  className="
                 hidden lg:block"
                  key={index}
                  data={category}
                />
              );
            })}
        </div>
      </ExtraLargePageContainer>
    </section>
  );
};
export default MostPopularVacanciesSection;
