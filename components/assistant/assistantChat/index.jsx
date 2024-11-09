"use client";

import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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
];

export default function Component() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
    <div className="fixed bottom-5 right-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: "auto", width: "20rem" }}
            exit={{ opacity: 0, height: 0, width: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Sağlık Turizmi Asistanı
                </h3>
                <motion.button
                  className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center shadow-lg hover:bg-orange-600"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiOutlineClose size={20} color="white" />
                </motion.button>
              </div>
              <div className="space-y-4 h-64 overflow-y-auto">
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
                      }`}
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
                <div ref={chatEndRef} />
              </div>
              <div className="mt-4">
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
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.button
          className="w-14 h-14 bg-orange-500 rounded-full flex justify-center items-center shadow-lg hover:bg-orange-600"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineMessage size={28} color="white" />
        </motion.button>
      )}
    </div>
  );
}
