"use client";

import { motion } from "framer-motion";

import { classes } from "@/home-page-data";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Classes({ className }: { className?: string }) {
  return (
    <motion.ul
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {classes.map((cls) => (
        <motion.li key={cls.school} className="mt-6" variants={itemVariant}>
          <h3 className="text-center text-2xl">{cls.school}</h3>
          <ul className="flex flex-row justify-center items-center flex-wrap mt-2 gap-3 px-6">
            {cls.subjects.map((s) => (
              <li
                key={s}
                className="py-2 px-4 bg-background rounded-xl text-lg"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ul>
  );
}
