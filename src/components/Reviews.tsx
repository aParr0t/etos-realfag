"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { feedback } from "@/home-page-data";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Reviews({ className }: { className?: string }) {
  return (
    <motion.ul
      className="flex flex-col justify-center sm:flex-row sm:flex-wrap items-center gap-6 mt-6"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {feedback.map((f) => (
        <motion.li
          key={f.author}
          variants={itemVariant}
          className="flex flex-col items-center bg-background rounded-3xl p-6 gap-3 text-lg max-w-sm"
        >
          <Image
            className=""
            src={f.avatar}
            alt="Avatar"
            width={76}
            height={76}
          />
          <div className="">{f.text}</div>
          <div className="text-primary font-bold">{f.author}</div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
