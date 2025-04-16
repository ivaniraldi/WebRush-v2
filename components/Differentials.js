"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"

export default function Differentials() {
  const { language } = useLanguage()
  const t = translations[language]

  const differentials = [
    {
      title: t.differentials.items[0].title,
      description: t.differentials.items[0].description,
      icon: "verified",
      color: "from-[#a855f7] to-[#2563eb]",
    },
    {
      title: t.differentials.items[1].title,
      description: t.differentials.items[1].description,
      icon: "groups",
      color: "from-[#2563eb] to-[#9333ea]",
    },
    {
      title: t.differentials.items[2].title,
      description: t.differentials.items[2].description,
      icon: "support_agent",
      color: "from-[#9333ea] to-[#a855f7]",
    },
  ]

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t.differentials.title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{t.differentials.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-6`}
              >
                <span className="material-icons text-white text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
