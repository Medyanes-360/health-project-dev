export const treatmentsPageMockData = [
  {
    id: 4,
    title: "Hair Transplant", // treatment'ın kısa ismi. Sayfada gösterilecek olan title
    fullTitle: "Fue Hair Transplant ", // treatment'ın tam ismi.
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
      relatedProceduresAndCosts: {},
      howItworks: {},
      whatToExpect: {},
      benefits: {},
      payment: {},
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
      reviewerId: 3949910,
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
