"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appLinks } from "@/shared/constants/appLinks";
import Link from "next/link";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative lg:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 relative w-10 h-10 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <motion.div
          className="absolute w-6 h-0.5 bg-zinc-400 rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ top: "35%", left: "20%" }}
        />
        <motion.div
          className="absolute w-6 h-0.5 bg-zinc-400 rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{ top: "50%", left: "20%" }}
        />
        <motion.div
          className="absolute w-6 h-0.5 bg-zinc-400 rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ top: "65%", left: "20%" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-zinc-800 z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav>
              <ul className="space-y-6 text-center">
                {appLinks.map((link) => (
                  <motion.li key={link.id} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      className="text-white text-3xl font-bold hover:text-gray-300 transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
