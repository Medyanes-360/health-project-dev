import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Dropdown = ({ item, index, activeSubItem, handleSubMenuClick }) => {
  const isOpen = activeSubItem[index] || false;

  return (
    <div>
      {/* Alt menüyü açma kısmı */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {item.children.map((subItem, subIndex) => (
              <li
                key={subIndex}
                onClick={() => handleSubMenuClick(index, subIndex)} // Alt menü tıklanırsa
                className={
                  activeSubItem.menuIndex === index &&
                  activeSubItem.subIndex === subIndex
                    ? "font-bold"
                    : ""
                }
              >
                <Link href={subItem.route || "#"}>{subItem.title}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
