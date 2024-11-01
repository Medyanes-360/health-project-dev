"use client";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai"; // You'll need a message icon, using react-icons here

const categories = [
  {
    id: 0,
    title: "Hizmetlerimiz",
    subCategories: [
      {
        id: 5,
        title: "Göz Sağlığı Hizmeti",
        subCategories: [
          { id: 8, title: "Miyop Tedavisi", link: "/hizmetler/miyop-tedavisi" },
          {
            id: 9,
            title: "Astigmat Tedavisi",
            link: "/hizmetler/astigmat-tedavisi",
          },
        ],
      },
      {
        id: 6,
        title: "Diş Sağlığı Hizmeti",
        subCategories: [
          {
            id: 10,
            title: "Diş Plağı Temizleme",
            link: "/hizmetler/dis-plaklari",
          },
        ],
      },
      {
        id: 7,
        title: "Estetik Cerrahi",
        subCategories: [
          {
            id: 11,
            title: "Burun Estetiği",
            link: "/hizmetler/burun-estetigi",
          },
          { id: 12, title: "Liposuction", link: "/hizmetler/liposuction" },
        ],
      },
    ],
  },
  // Other categories follow the same structure...
];

export default function AssistantChat() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to track if the chat is open or closed

  // Function to handle category and subcategory selection
  const handleOptionClick = (category) => {
    setMessages((prev) => [...prev, { type: "user", text: category.title }]);

    if (category.subCategories && category.subCategories.length > 0) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "assistant",
            text: "İstediğiniz hizmeti seçiniz:",
            subcategories: category.subCategories,
          },
        ]);
      }, 500);
    } else if (category.link) {
      setMessages((prev) => [
        ...prev,
        { type: "assistant", text: `Detaylar için: ${category.link}` },
      ]);
    }
  };

  // Function to handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    setMessages((prev) => [...prev, { type: "user", text: subcategory.title }]);

    if (subcategory.subCategories && subcategory.subCategories.length > 0) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "assistant",
            text: "İşlem türünü seçiniz:",
            subcategories: subcategory.subCategories,
          },
        ]);
      }, 500);
    } else if (subcategory.link) {
      setMessages((prev) => [
        ...prev,
        { type: "assistant", text: `Detaylar için: ${subcategory.link}` },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button to Toggle Assistant */}
      <button
        className="fixed bottom-5 right-5 w-14 h-14 bg-orange-500 rounded-full flex justify-center items-center shadow-lg hover:bg-orange-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMessage size={28} color="white" />
      </button>

      {/* Assistant Chat (shown only when isOpen is true) */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-5 w-80 h-96 bg-white shadow-lg rounded-lg p-4 overflow-y-auto"
          style={{
            backdropFilter: "blur(10px)", // Blur effect
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
          }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Sağlık Turizmi Asistanı
          </h3>

          {/* Message Display Area */}
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg relative ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  } ${
                    msg.type === "user"
                      ? "after:border-l-primary"
                      : "after:border-r-muted"
                  } after:content-[''] after:absolute after:bottom-0 after:w-0 after:h-0 after:border-8 after:border-transparent ${
                    msg.type === "user"
                      ? "after:right-[-8px] after:border-l-[8px] after:border-b-0"
                      : "after:left-[-8px] after:border-r-[8px] after:border-b-0"
                  } after:mb-1`}
                >
                  {msg.text}
                  {msg.subcategories && (
                    <div className="mt-2 space-y-2">
                      {msg.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSubcategoryClick(sub)}
                          className="block w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* User Options */}
          <div className="mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleOptionClick(category)}
                className="block w-full bg-orange-500 text-white text-left p-3 rounded-lg mt-2 hover:bg-orange-600"
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
