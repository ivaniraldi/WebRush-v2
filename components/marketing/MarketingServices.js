"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"

export default function MarketingServices() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: t.marketing.services[0].title,
      description: t.marketing.services[0].description,
      icon: "trending_up",
      color: "from-[#a855f7] to-[#2563eb]",
      features: t.marketing.services[0].features,
    },
    {
      title: t.marketing.services[1].title,
      description: t.marketing.services[1].description,
      icon: "ads_click",
      color: "from-[#2563eb] to-[#9333ea]",
      features: t.marketing.services[1].features,
    },
    {
      title: t.marketing.services[2].title,
      description: t.marketing.services[2].description,
      icon: "search",
      color: "from-[#9333ea] to-[#a855f7]",
      features: t.marketing.services[2].features,
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
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={item} className="bg-gray-900 rounded-lg p-6 card-hover">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
          >
            <span className="material-icons text-white text-2xl">{service.icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-300 mb-6">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="material-icons text-[#a855f7] mr-2 text-sm">check_circle</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
