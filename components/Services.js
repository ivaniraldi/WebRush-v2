"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      icon: "code",
      color: "from-[#a855f7] to-[#2563eb]",
    },
    {
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      icon: "trending_up",
      color: "from-[#2563eb] to-[#9333ea]",
    },
    {
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      icon: "search",
      color: "from-[#9333ea] to-[#a855f7]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={item}
          className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 card-hover shadow-md"
        >
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
          >
            <span className="material-icons text-white text-2xl">{service.icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
