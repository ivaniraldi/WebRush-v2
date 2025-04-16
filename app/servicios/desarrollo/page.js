"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import ContactCTA from "@/components/ContactCTA"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"

export default function DesarrolloPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <section className="pt-32 pb-16 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.development.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{t.development.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {t.development.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md"
                >
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="material-icons text-[#a855f7] mr-2 text-sm">check_circle</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {t.development.process.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.development.process.steps.slice(0, 4).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a855f7] to-[#2563eb] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {t.development.process.steps.slice(4).map((step, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a855f7] to-[#2563eb] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 5}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {t.development.technologies.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
                {t.development.technologies.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {t.development.technologies.techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                    className="bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-md shadow-sm"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-center mt-20"
            >
              <Link
                href="/contacto"
                className="px-8 py-3 rounded-md bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center"
              >
                {t.contactCTA.button}
                <span className="material-icons ml-1">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </PageTransition>
  )
}
