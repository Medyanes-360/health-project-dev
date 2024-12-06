import ClinicsByTreatmentSearchPageContainer from "@/containers/clinics/clinicsByTreatmentSearchPage";
import { notFound } from "next/navigation";

export default function ClinicsByTreatmentSearchPage({ params }) {
  // findByUrl: let treatment = await fetch(`https://ourApi/treatments/${params.treatmentId}`).then(
  // (res) => res.json()

  const currentTreatment = treatmentsData.find(
    (elem) => elem.url == params.treatmentUrl
  );
  //treatment'i fetchledik, eğer treatment yoksa? :
  if (!currentTreatment) {
    notFound();
  }

  return <ClinicsByTreatmentSearchPageContainer treatment={currentTreatment} />;
}

const treatmentsData = [
  {
    id: 4,
    title: "Hair Transplant", // treatment'ın kısa ismi. Sayfada gösterilecek olan title
    fullTitle: "Hair Transplant", // treatment'ın tam ismi.
    url: "hair-transplant", //treatment'ın unique url'i. buttona eklendiğinde gönderileceği sayfa bilgisi burada yazar
    lastUpdateDate: "1709758800000", // treatments/hair-transplant'taki infoların en son ne zaman güncellendiği bilgisi.
    overview: {
      //treatment hakkında sayfada gösterilecek bilgiler
      takeAways: {
        patientsRecommend: 76,
        rehabilitationDuration: "1 Day",
        beforeAndAfterPhotosCount: 48,
        bookimedFees: 0,
        surgeryTime: "4 Hours",
        anestesiaType: "Local Anesthesia",
        verifiedPatientReviewsCount: 471,
        stayInCountryDuration: "3 Days",
        bestPrice: 1500,
        processedRequestCount: 110449,
      },
      relatedProceduresAndCosts: {
        title: "All-on-4 Dental Implants - from 1651$",
        text: "This therapy restores a full set of teeth using four implants per jaw, offering durability, comfort, and a natural look.",
      },
      howItworks: {
        title: "How to find best offer with Bookimed?",
        texts: [
          {
            text: "Discover options on the website: deals, clinics, and doctors.",
          },
          {
            text: "Select your favorites.",
          },
          {
            text: "Share photos or describe your issue.",
          },
          {
            text: "Send a request.",
          },
          {
            text: "Receive free offers for your needs with prices and details.",
          },
        ],
      },
      whatToExpect: {
        title: "Step-by-Step Roadmap",

        items: [
          {
            color: "#F22F46",
            day: "Day 1",
            listItems: [
              "Arrival in the country, VIP transfer to the 4* hotel.",
              "Rest and acclimatize to the new environment.",
            ],
          },
          {
            color: "#6F88FF",
            day: "Day 2",
            listItems: [
              "Visit to the dental clinic for initial consultation.",
              "Meet the dental surgeon and discuss the procedure.",
              "Undergo necessary medical tests and dental scans.",
            ],
          },
          {
            color: "#12A52A",
            day: "Day 3",
            listItems: [
              "Preparation for the All-on-4 Dental Implants procedure.",
              "Procedure under local anesthesia, lasting about 2-3 hours.",
              "Implants are placed in the jawbone.",
            ],
          },
        ],
      },
      benefits: [
        {
          svg: "/assets/icons/like-outlined.svg",
          text: "100% free, non-binding assessment of your case after photos download.",
        },
        {
          svg: "/assets/icons/note.svg",
          text: "Instant FREE personalized offers to make the right choice.",
        },
        {
          svg: "/assets/icons/binocular.svg",
          text: "Expert guidance in choosing the perfect Dental Treatment doctor and clinic.",
        },
        {
          svg: "/assets/icons/gift.svg",
          text: "Special packages and exclusive prices for our patients.",
        },
        {
          svg: "/assets/icons/calender.svg",
          text: "24/7 Bookimed guidance at no cost, guaranteed.",
        },
        {
          svg: "/assets/icons/search.svg",
          text: "Hassle-free translation of your medical documents for clinics.",
        },
        {
          svg: "/assets/icons/multi.svg",
          text: "Multilingual staff — no language barrier with Bookimed coordinator.",
        },
      ],
      payment: {
        text: "Bookimed ensures transparent and secure payments. Patients pay at the clinic with no additional fees.",
        titleTop: "Available Payment Methods:",
        titleBottom: "How to Secure an Appointment:",
        svgs: [
          "/assets/icons/visa.svg",
          "/assets/icons/paypal.svg",
          "/assets/icons/mastercard.svg",
        ],
        listItems: ["Documents: Passport and ticket copies.", "OR", "Deposit:"],
        nestedListItems: [
          {
            title: "Deposit",
            subItems: [
              "Bookimed deposit: $200 or €200.",
              "Clinic deposit: Pay a set percentage in advance.",
            ],
          },
        ],
      },
      reviewerId: 3949919,
    },
    costsOverview: {
      minimum: 1500,
      maximum: 4793,
      treatmentTypesAndCosts: [
        {
          type: "FUE Hair Transplant",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1671 },
            { country: "MX", minCost: 4000 },
            { country: "US", minCost: 4000 },
          ],
        },
        {
          type: "FUE Hair Transplant",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1671 },
            { country: "MX", minCost: 4000 },
            { country: "US", minCost: 4000 },
          ],
        },
        {
          type: "FUE Hair Transplant",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1671 },
            { country: "MX", minCost: 4000 },
            { country: "US", minCost: 4000 },
          ],
        },
      ],
    },
    bandTestQuestion: {
      text: "Take a test to find the best value-for-money Hair transplant option",
      question: "What area would you like to improve with a hair transplant?",
      options: [
        "Upper Part Of The Head",
        "Temples",
        "Beard Or Mustache",
        "Other",
      ],
    },
  },
  {
    id: 0,
    title: "Breast Augmentation",
    url: "breast-augmentation",
    lastUpdateDate: "1709758800000",
    overview: {
      takeAways: {
        patientsRecommend: 83,
        rehabilitationDuration: "2 Days",
        beforeAndAfterPhotosCount: 64,
        bookimedFees: 0,
        surgeryTime: "2.5 Hours",
        anestesiaType: "General Anesthesia",
        verifiedPatientReviewsCount: 390,
        stayInCountryDuration: "7 Days",
        bestPrice: 3200,
        processedRequestCount: 78124,
      },
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
      reviewerId: 4012345,
    },
    costsOverview: {
      minimum: 3200,
      maximum: 6000,
      treatmentTypesAndCosts: [
        {
          type: "Silicone Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 3200 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8000 },
          ],
        },
        {
          type: "Silicone Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 3200 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8000 },
          ],
        },
        {
          type: "Silicone Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 3200 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8000 },
          ],
        },
      ],
    },
    bandTestQuestion: {
      text: "Find the best Breast Augmentation option for you",
      question: "What type of implants would you prefer?",
      options: ["Silicone", "Saline", "Don't Know Yet", "Other"],
    },
  },
  {
    id: 1,
    title: "Rhinoplasty",
    url: "rhinoplasty",
    lastUpdateDate: "1709758800000",
    overview: {
      takeAways: {
        patientsRecommend: 88,
        rehabilitationDuration: "1 Week",
        beforeAndAfterPhotosCount: 52,
        bookimedFees: 0,
        surgeryTime: "3 Hours",
        anestesiaType: "General Anesthesia",
        verifiedPatientReviewsCount: 581,
        stayInCountryDuration: "5 Days",
        bestPrice: 2200,
        processedRequestCount: 65491,
      },
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
      reviewerId: 3949921,
    },
    costsOverview: {
      minimum: 2200,
      maximum: 5500,
      treatmentTypesAndCosts: [
        {
          type: "Open Rhinoplasty",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2200 },
            { country: "MX", minCost: 4500 },
            { country: "US", minCost: 8500 },
          ],
        },
        {
          type: "Open Rhinoplasty",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2200 },
            { country: "MX", minCost: 4500 },
            { country: "US", minCost: 8500 },
          ],
        },
        {
          type: "Open Rhinoplasty",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2200 },
            { country: "MX", minCost: 4500 },
            { country: "US", minCost: 8500 },
          ],
        },
      ],
    },
    bandTestQuestion: {
      text: "Take a test to find your ideal Rhinoplasty treatment",
      question: "What aspect of your nose do you want to improve?",
      options: ["Bridge", "Tip", "Nostrils", "Other"],
    },
  },
  {
    id: 2,
    title: "Liposuction",
    url: "liposuction",
    lastUpdateDate: "1709758800000",
    overview: {
      takeAways: {
        patientsRecommend: 79,
        rehabilitationDuration: "2 Weeks",
        beforeAndAfterPhotosCount: 35,
        bookimedFees: 0,
        surgeryTime: "3 Hours",
        anestesiaType: "General Anesthesia",
        verifiedPatientReviewsCount: 414,
        stayInCountryDuration: "5 Days",
        bestPrice: 2800,
        processedRequestCount: 85213,
      },
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
      reviewerId: 3949933,
    },
    costsOverview: {
      minimum: 2800,
      maximum: 7500,
      treatmentTypesAndCosts: [
        {
          type: "Vaser Liposuction",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2800 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8500 },
          ],
        },
        {
          type: "Vaser Liposuction",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2800 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8500 },
          ],
        },
        {
          type: "Vaser Liposuction",
          minimumCostsByCountry: [
            { country: "TR", minCost: 2800 },
            { country: "MX", minCost: 6000 },
            { country: "US", minCost: 8500 },
          ],
        },
      ],
    },
    bandTestQuestion: {
      text: "Find your best Liposuction option",
      question: "Which area of your body would you like to target?",
      options: ["Abdomen", "Thighs", "Arms", "Other"],
    },
  },
  {
    id: 3,
    title: "Dental Implants",
    url: "dental-implants",
    lastUpdateDate: "1709758800000",
    overview: {
      takeAways: {
        patientsRecommend: 91,
        rehabilitationDuration: "1 Day",
        beforeAndAfterPhotosCount: 82,
        bookimedFees: 0,
        surgeryTime: "1.5 Hours",
        anestesiaType: "Local Anesthesia",
        verifiedPatientReviewsCount: 620,
        stayInCountryDuration: "3 Days",
        bestPrice: 1000,
        processedRequestCount: 92045,
      },
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
      reviewerId: 3949933,
    },
    costsOverview: {
      minimum: 1000,
      maximum: 3000,
      treatmentTypesAndCosts: [
        {
          type: "Titanium Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1000 },
            { country: "MX", minCost: 2500 },
            { country: "US", minCost: 4000 },
          ],
        },
        {
          type: "Titanium Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1000 },
            { country: "MX", minCost: 2500 },
            { country: "US", minCost: 4000 },
          ],
        },
        {
          type: "Titanium Implants",
          minimumCostsByCountry: [
            { country: "TR", minCost: 1000 },
            { country: "MX", minCost: 2500 },
            { country: "US", minCost: 4000 },
          ],
        },
      ],
    },
    bandTestQuestion: {
      text: "Take a test to find the best Dental Implant treatment for you",
      question: "How many teeth would you like to replace?",
      options: ["1", "2", "Multiple", "Full Mouth"],
    },
  },
];
