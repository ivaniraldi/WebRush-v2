"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import Link from "next/link"

export default function MarketingHero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f172a]/80 z-10"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 to-[#2563eb]/20 z-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-30">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.marketing.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            {t.marketing.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contato"
              className="px-8 py-3 rounded-md bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t.marketing.ctaButton}
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 rounded-md bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              {t.marketing.secondaryButton}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
