import ClinicProfilePageContainer from "@/containers/clinic/clinicProfilePage";

export default function ClinicProfilePage({ params }) {
  const clinic = clinicsData.find((clinic) => clinic.url == params.clinicUrl);

  if (!clinic) {
    notFound();
  }
  return <ClinicProfilePageContainer clinic={clinic} />;
}
const clinicsData = [
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
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "Mehmet Taşkesen",
        treatment: "Hair Transplant",
        location: {
          countryIsoCode: "US",
        },
        rating: 4.0,
        createdAt: 1709758800000,
        reviewText:
          "Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
      {
        username: "Mehmet Taşkesen",
        treatment: "Hair Transplant",
        location: {
          countryIsoCode: "US",
        },
        rating: 4.0,
        createdAt: 1709758800000,
        reviewText:
          "Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.Good afternoon I would like to share feedback about this platform and clinic. Let's begin. I was interested in hair transplantation, because I don’t have any friends or acquaintances in this topic.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Global Health Clinic",
    url: "global-health-clinic",
    location: {
      City: "Kadıköy",
      stateIsoCode: "34",
      countryIsoCode: "TR",
      fullAddress:
        "Hasanpaşa, Uzunçayır Caddesi, No:45, 34722 Kadıköy/İstanbul",
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
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "John Doe",
        treatment: "Rhinoplasty",
        location: {
          countryIsoCode: "GB",
        },
        rating: 5.0,
        createdAt: 1712956800000,
        reviewText:
          "Great experience from start to finish. Highly recommend Global Health Clinic for anyone seeking rhinoplasty.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Istanbul Aesthetic Center",
    url: "istanbul-aesthetic-center",
    location: {
      City: "Beşiktaş",
      stateIsoCode: "34",
      countryIsoCode: "TR",
      fullAddress:
        "Levent Mahallesi, Aydın Sokak, No:10, 34330 Beşiktaş/İstanbul",
    },
    faqs: [
      {
        title: "What post-surgery care is provided?",
        description:
          "We offer 24/7 post-surgery support and personalized recovery plans for all patients.",
      },
      {
        title: "Are the doctors certified?",
        description:
          "Yes, all our doctors are board-certified specialists in their respective fields.",
      },
      {
        title: "Is financing available?",
        description:
          "Yes, we offer flexible financing options to accommodate your needs.",
      },
    ],
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "Emily Smith",
        treatment: "Breast Augmentation",
        location: {
          countryIsoCode: "US",
        },
        rating: 4.5,
        createdAt: 1703467200000,
        reviewText:
          "Very professional staff and surgeons. I am thrilled with the results of my breast augmentation.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Medistanbul Clinic",
    url: "medistanbul-clinic",
    location: {
      City: "Ataşehir",
      stateIsoCode: "34",
      countryIsoCode: "TR",
      fullAddress:
        "Barbaros Mahallesi, Tütüncü Mehmet Efendi Caddesi, No:3, 34746 Ataşehir/İstanbul",
    },
    faqs: [
      {
        title: "Are there any hidden costs?",
        description:
          "No, all costs are transparent and detailed during your initial consultation.",
      },
      {
        title: "What payment methods do you accept?",
        description:
          "We accept all major credit cards, bank transfers, and cash payments.",
      },
      {
        title: "How far in advance should I book?",
        description:
          "We recommend booking at least 2 weeks in advance to ensure availability.",
      },
    ],
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "Carlos Hernandez",
        treatment: "Liposuction",
        location: {
          countryIsoCode: "ES",
        },
        rating: 4.0,
        createdAt: 1696015200000,
        reviewText:
          "The staff was very accommodating and my recovery was smooth. Overall a great experience with Medistanbul Clinic.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Ankara Medical Center",
    url: "ankara-medical-center",
    location: {
      City: "Çankaya",
      stateIsoCode: "06",
      countryIsoCode: "TR",
      fullAddress:
        "Kavaklıdere Mahallesi, Tunalı Hilmi Caddesi, No:20, 06680 Çankaya/Ankara",
    },
    faqs: [
      {
        title: "Can I bring someone with me during the procedure?",
        description:
          "Yes, patients can bring a companion during their stay for support.",
      },
      {
        title: "How soon can I return to normal activities?",
        description:
          "Recovery time varies, but most patients can resume normal activities within 2 weeks.",
      },
      {
        title: "Are follow-up appointments required?",
        description:
          "Yes, follow-up appointments are part of our comprehensive care plan.",
      },
    ],
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "Aylin Yıldız",
        treatment: "Facelift",
        location: {
          countryIsoCode: "DE",
        },
        rating: 5.0,
        createdAt: 1686412800000,
        reviewText:
          "Amazing care and results. The team at Ankara Medical Center is highly skilled and attentive.",
        images: [
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
          "/assets/images/clinic3.png",
          "/assets/images/clinic1.png",
          "/assets/images/clinic2.png",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Antalya Smile Dental",
    url: "antalya-smile-dental",
    location: {
      City: "Muratpaşa",
      stateIsoCode: "07",
      countryIsoCode: "TR",
      fullAddress:
        "Güzeloba Mahallesi, Lara Caddesi, No:75, 07230 Muratpaşa/Antalya",
    },
    faqs: [
      {
        title: "Is dental sedation available?",
        description:
          "Yes, we offer sedation options for patients who experience anxiety during dental procedures.",
      },
      {
        title: "Do you provide aftercare for dental implants?",
        description:
          "Yes, aftercare is provided to ensure the longevity of your dental implants.",
      },
      {
        title: "Is there a warranty on dental procedures?",
        description:
          "We provide a warranty on certain procedures, including implants and crowns.",
      },
    ],
    images: [
      "/assets/images/clinic-image1.png",
      "/assets/images/clinic-image2.png",
      "/assets/images/clinic-image3.png",
      "/assets/images/clinic-image4.png",
      "/assets/images/clinic-image1.png",
    ],
    patientReviews: [
      {
        username: "Sophia Turner",
        treatment: "Dental Implants",
        location: {
          countryIsoCode: "AU",
        },
        rating: 4.8,
        createdAt: 1718131200000,
        reviewText:
          "Excellent service! My dental implants look natural, and the recovery was quick.",
        images: ["/assets/images/dental1.png", "/assets/images/dental2.png"],
      },
    ],
  },
];
