export const getClinicPageMockData = (times) => {
  const result = [];
  for (let i = 0; i < times; i++) {
    // result.push(...clinicPageMockData); unique olmayan datalar için direk aynı datayı xtimes kadar döndürebiliriz.
    result.push({
      ...clinicPageMockData[0],
      id: i,
      url: encodeURI(clinicPageMockData[0].fullTitle),
    }); // unique olanlarda ise
    //unique değerleri devamlı değiştirerek dönebiliriz.
  }
  return result;
};

export const clinicPageMockData = {
  clinic: {
    id: 0,
    clinicName: "Adem and Havva Medical Center",
    slug: "adem-and-havva",
    location: "Istanbul, Turkey",
    cover_image: "cover_image_url",
    gallery: ["image_url_1", "image_url_2", "image_url_3"],
    patient_reviews: [
      {
        reviewer_name: "John Doe",
        rating: 5,
        comment: "Excellent service! The staff was very professional.",
      },
      {
        reviewer_name: "Jane Smith",
        rating: 4,
        comment:
          "Great experience overall, though the recovery was longer than expected.",
      },
    ],
    services: [
      {
        name: "Hair transplant",
        icon: "👨‍🦲🧑",
        description:
          "FUE Hair transplant with consultation, pre-op tests, and post-op care.",
      },
      {
        name: "Consultation with a doctor",
        icon: "🧑‍⚕️",
        description:
          "In-depth consultation with a certified hair transplant surgeon.",
      },
      {
        name: "Local anesthesia",
        icon: "💉",
        description: "Administered anesthesia to ensure a painless procedure.",
      },
    ],
    medical_procedures: {
      procedure_list: [
        {
          name: "Hair transplant",
          icon: "💇‍♂️",
        },
        {
          name: "Consultation with a doctor",
          icon: "💬👩‍⚕️",
        },
        {
          name: "Local anesthesia",
          icon: "💉🛌",
        },
        {
          name: "Blood tests",
          icon: "🩸🔬",
        },
        {
          name: "Follow-up examination",
          icon: "🩺🔍",
        },
        {
          name: "Post-op medications",
          icon: "💊📝",
        },
        {
          name: "Anti-HIV test",
          icon: "🧪",
        },
        {
          name: "Anti-HBC test",
          icon: "🧪🔬",
        },
        {
          name: "Anti-HCVAb test",
          icon: "🧬🔬",
        },
        {
          name: "1 PRP session",
          icon: "🧴💉",
        },
        {
          name: "Shampoo and lotion",
          icon: "🧴🧼",
        },
        {
          name: "Follow-up visit",
          icon: "📅👩‍⚕️",
        },
      ],
    },
    additional_information: {
      details: [
        {
          name: "FUE Hair transplant",
          icon: "✂️",
        },
        {
          name: "Preoperative Blood test",
          icon: "🩸🔬",
        },
        {
          name: "PRP treatment after the operation",
          icon: "💉",
        },
        {
          name: "Post-op Medications for 5 days",
          icon: "💊",
        },
        {
          name: "Post-op special medical shampoo covers 8 weeks",
          icon: "🧴📅",
        },
        {
          name: "Lifetime guarantee for transplanted grafts",
          icon: "🔒",
        },
        {
          name: "3 nights in 4-star hotel accommodation",
          icon: "🌟🏨",
        },
        {
          name: "Transfer (airport-hotel-clinic-hotel-airport)",
          icon: "🚖✈️🏨",
        },
        {
          name: "Translation services",
          icon: "🗣️📑",
        },
      ],
    },
    transport: {
      description: "Regular transfer",
      icon: "🚐🔄",
    },
    duration: {
      stay: "3 days in the hotel",
      icon: "🏨📅",
    },
    assistance: {
      services: [
        {
          name: "Personal medical coordinator",
          icon: "🧑‍⚕️",
        },
        {
          name: "Medical travel arrangements-booking of air tickets and hotel rooms at special partner prices",
          icon: "✈️",
        },
      ],
    },
    faq: [
      {
        question: "How long is the recovery process?",
        answer: "The recovery process typically takes around 7 to 10 days.",
      },
      {
        question: "Are the results permanent?",
        answer:
          "Yes, the transplanted hair is permanent and guaranteed for life.",
      },
    ],
  },
};
