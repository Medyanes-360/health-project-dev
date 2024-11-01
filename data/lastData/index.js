let UsersData = [];
let ClinicReviewsData = [];
let ClinicsData = [];
let DoctorsData = [];
let ProcedureReviewsData = [];
let ProceduresData = [];
let TreatmentBlogData = [];
let TreatmentCategoriesData = [];
let TreatmentsData = [];

UsersData = [
  {
    id: 0,
    name: "Mehmet",
    surname: "Taşkesen",
    location: {
      city: "Şişli", // ilçe
      stateIsoCode: "34", // şehir
      countryIsoCode: "TR", // ülke
    },
  },
];

ClinicReviewsData = [
  {
    id: 0,
    user: UsersData[0],
    rating: 40,
    title: "This is the best clinic!",
    text: "Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.",
    images: [
      "/assets/images/clinic1.png",
      "/assets/images/clinic2.png",
      "/assets/images/clinic3.png",
      "/assets/images/clinic1.png",
      "/assets/images/clinic2.png",
    ],
  },
];
DoctorsData = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];
ProcedureReviewsData = [
  {
    id: 0,
  },
];

ProceduresData = [
  {
    id: 0,

    treatment: TreatmentsData[0],
    reviews: ProcedureReviewsData,
    doctors: DoctorsData.slice(0, 2),
  },
];
ClinicsData = [
  {
    id: 0,
    name: "Adem and Havva Medical Center",
    url: "adem-and-havva-medical-center",
    location: {
      City: "Şişli", // ilçe
      stateIsoCode: "34", // şehir
      countryIsoCode: "TR", // ülke
      fullAddress:
        "Cumhuriyet, Cumhuriyet Mahallesi, İncirli Dede Caddesi, No:6/2 Anthill Towers, 34381 Şişli/İstanbul",
    },
    faqs: [
      {
        title: "How long does a typical treatment take?",
        description:
          "The duration of treatment varies depending on the procedure but typically lasts between 4 to 6 hours.",
      },
      {
        title: "Do I need a consultation before booking?",
        description:
          "Yes, we require an initial consultation to assess your needs and provide personalized recommendations.",
      },
      {
        title: "Is accommodation included in the treatment package?",
        description:
          "Accommodation can be included upon request for international patients.",
      },
    ],
    doctors: DoctorsData,
    procedures: ProceduresData,
    reviews: ClinicReviewsData[0],
  },
];

TreatmentBlogData = [
  {
    id: 0,
    treatmentId: 0,
  },
];
TreatmentCategoriesData = [
  {
    id: 0,
    name: "Hair Transplant",
  },
  {
    id: 1,
    name: "Aesthetic Surgery",
  },
  {
    id: 2,
    name: "Dental Treatments long text to see hovering effect",
  },

  {
    id: 3,
    name: "Orthopedic Surgery",
  },
  {
    id: 4,
    name: "Cosmetic Dermatology",
  },
  {
    id: 5,
    name: "Cardiovascular Treatments",
  },
  {
    id: 6,
    name: "Oncology",
  },
  {
    id: 7,
    name: "Fertility Treatments",
  },
  {
    id: 8,
    name: "General Surgery",
  },
];

TreatmentsData = [
  // !!!! Önemli : Bu ilk data. ilk datamızı yazarken tüm proplar için açıklama girelim. bu prop neden var? ne işe yarıyor hangi bilgiyi tutuyor gibi.
  {
    id: 0,
    category: TreatmentCategoriesData[0], // points to TreatmentCategory
    name: "Fue Hair Transplant",
    fullName: "Fue Hair Transplant",
    url: "fue-hair-transplant", //treatment'ın unique url'i. buttona eklendiğinde gönderileceği sayfa bilgisi burada yazar
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
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
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
      // treatment sayfasındaki bandda bulunan test sorusu
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
];

export const ClinicsMockData = ClinicsData;
export const UsersMockData = UsersData;
export const ClinicReviewsMockData = ClinicReviewsData;
export const DoctorsMockData = DoctorsData;
export const ProcedureReviewsMockData = ProcedureReviewsData;
export const TreatmentBlogMockData = TreatmentBlogData;
export const ProceduresMockData = ProceduresData;
export const TreatmentCategoriesMockData = TreatmentCategoriesData;
export const TreatmentsMockData = TreatmentsData;
