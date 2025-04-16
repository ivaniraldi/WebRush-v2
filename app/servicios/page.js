"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import Link from "next/link"
import Services from "@/components/Services"
import ContactCTA from "@/components/ContactCTA"
import PageTransition from "@/components/PageTransition"
import ParallaxHero from "@/components/ParallaxHero"

export default function ServiciosPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const serviceCategories = [
    {
      title: t.nav.serviceSections.development,
      description: t.development.description,
      icon: "code",
      link: "/servicios/desarrollo",
      color: "from-[#a855f7] to-[#2563eb]",
    },
    {
      title: t.nav.serviceSections.marketing,
      description: t.marketing.heroDescription,
      icon: "trending_up",
      link: "/servicios/marketing",
      color: "from-[#2563eb] to-[#9333ea]",
    },
    {
      title: t.nav.serviceSections.qa,
      description: t.qa.description,
      icon: "verified",
      link: "/servicios/quality-assurance",
      color: "from-[#9333ea] to-[#a855f7]",
    },
  ]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <ParallaxHero
          title={t.services.title}
          subtitle={t.services.description}
          backgroundImage="/placeholder.svg?height=800&width=1600"
          height="70vh"
        />

        <section className="py-16 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}
                  >
                    <span className="material-icons text-white text-2xl">{category.icon}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-heading">
                    {category.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 font-body">{category.description}</p>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-[#a855f7] hover:text-[#2563eb] transition-colors font-body"
                  >
                    {t.projects.viewAll}
                    <span className="material-icons ml-1 text-sm">arrow_forward</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Services />
          </div>
        </section>

        <ContactCTA />
      </div>
    </PageTransition>
  )
}
