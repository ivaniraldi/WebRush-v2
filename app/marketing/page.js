"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import MarketingHero from "@/components/marketing/MarketingHero"
import MarketingServices from "@/components/marketing/MarketingServices"
import MarketingPlans from "@/components/marketing/MarketingPlans"
import MarketingCarousel from "@/components/marketing/MarketingCarousel"
import ContactCTA from "@/components/ContactCTA"

export default function Marketing() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHero />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t.marketing.servicesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            {t.marketing.servicesDescription}
          </motion.p>
        </div>

        <MarketingServices />
      </motion.section>

      <MarketingPlans />
      <MarketingCarousel />
      <ContactCTA />
    </div>
  )
}
