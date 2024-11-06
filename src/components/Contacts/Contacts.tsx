"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    name: "Кракен в TOR сети",
    description:
      "Откройте новую гидру для себя со времен ее закрытия и почувствуйте ещё больше комфорта!",
    href: process.env.NEXT_PUBLIC_ONION_URL,
  },
  {
    name: "Кракен в обычном браузере",
    description:
      "Установите браузер через Google или Apple store и перейдите по актуальной ссылке с нашего сайта",
    href: process.env.NEXT_PUBLIC_CLEAR_URL,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Contacts = () => {
  return (
    <div className="flex items-center justify-center mt-24">
      <motion.div
        className="w-full max-w-2xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div key={product.name} variants={itemVariants}>
            <Link href={product.href || ""} className="block">
              <motion.div
                className="bg-zinc-800 p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                  {product.name}
                </h2>
                <p className="text-zinc-400 mb-4">{product.description}</p>
                <div className="flex items-center text-white/20 font-medium">
                  Перейти
                  <FaArrowRightLong className="ml-2 h-4 w-4" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
