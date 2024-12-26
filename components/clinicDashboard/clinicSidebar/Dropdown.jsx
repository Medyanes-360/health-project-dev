import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Dropdown = ({
  item,
  index,
  activeSubItem,
  handleSubMenuClick,
  setPreference,
  activePreference,
}) => {
  return (
    <AnimatePresence>
      {activeSubItem[index] && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="pl-8 space-y-1">
            {item.children.map((child, childIndex) => (
              <li key={childIndex}>
                <button
                  onClick={() => {
                    handleSubMenuClick(index);
                    setPreference(child.preference);
                  }}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                    activePreference === child.preference
                      ? "bg-[#52B8AB] bg-opacity-10 text-[#52B8AB]"
                      : "text-gray-700"
                  } hover:bg-[#52B8AB] hover:bg-opacity-10 hover:text-[#52B8AB]`}
                >
                  {child.title}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
