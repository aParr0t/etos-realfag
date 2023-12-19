"use client";

import { services } from "@/home-page-data";
import { motion } from "framer-motion";

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

export default function Services() {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-8 mt-6 items-center sm:items-stretch"
    >
      {services.map((service) => (
        <motion.li
          key={service.title}
          variants={itemVariant}
          //   initial="hidden"
          className="bg-secondary-light rounded-3xl p-6 max-w-sm"
        >
          <service.icon size={70} style={{ color: "hsl(var(--primary))" }} />
          <h3 className="text-2xl text-primary font-bold">{service.title}</h3>
          <p className="text-lg mt-2">{service.text}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
