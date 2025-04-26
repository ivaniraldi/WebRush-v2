"use client"

import { motion } from "framer-motion"
import ParallaxHero from "@/components/ParallaxHero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Differentials from "@/components/Differentials"
import ContactCTA from "@/components/ContactCTA"
import VideoSection from "@/components/VideoSection"
import LogoMarquee from "@/components/LogoMarquee"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import PageTransition from "@/components/PageTransition"
import Link from "next/link"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <ParallaxHero backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" height="100vh">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-6xl font-bold mb-4 md:mb-6 text-white font-heading md:mt-0"
          >
            <span className="block text-2xl">{t.hero.transformamos}</span>
            <span className="block text-3xl font-extrabold md:text-7xl gradient-text my-1 md:my-2">{t.hero.cliques}</span>
            <span className="block text 3xl">{t.hero.emConexoes}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto font-body"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contacto"
              className="px-8 py-3 rounded-md bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium hover:opacity-90 transition-opacity font-body"
            >
              {t.hero.ctaButton}
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-3 rounded-md bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors font-body"
            >
              {t.hero.secondaryButton}
            </Link>
          </motion.div>
        </ParallaxHero>

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
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading"
            >
              {t.services.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-body"
            >
              {t.services.description}
            </motion.p>
          </div>

          <Services />
        </motion.section>

        <LogoMarquee />

        <VideoSection />

        <Differentials />

        <ContactCTA />
      </div>
    </PageTransition>
  )
}
