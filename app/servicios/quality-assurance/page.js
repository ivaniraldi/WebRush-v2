"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import ContactCTA from "@/components/ContactCTA"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"

export default function QualityAssurancePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{t.qa.title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{t.qa.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {t.qa.services.map((service, index) => (
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
                {t.qa.benefits.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.qa.benefits.items.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#a855f7] to-[#2563eb] flex items-center justify-center mx-auto mb-4">
                      <span className="material-icons text-white text-2xl">
                        {index === 0
                          ? "savings"
                          : index === 1
                            ? "verified"
                            : index === 2
                              ? "speed"
                              : "sentiment_satisfied_alt"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Quality Assurance Process"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  ¿Por qué es importante el Quality Assurance?
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  En el mundo digital actual, la calidad del software es un factor crítico para el éxito de cualquier
                  negocio. Un software con errores puede dañar la reputación de su empresa, reducir la satisfacción del
                  cliente y generar costos adicionales.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Nuestro enfoque de Quality Assurance garantiza que sus aplicaciones y sistemas funcionen
                  correctamente, sean seguros y proporcionen una experiencia de usuario excepcional.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Implementamos procesos de QA desde las primeras etapas del desarrollo, lo que permite identificar y
                  corregir problemas antes de que lleguen a producción, ahorrando tiempo y recursos.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contacto"
                    className="px-8 py-3 rounded-md bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center"
                  >
                    {t.contactCTA.button}
                    <span className="material-icons ml-1">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </PageTransition>
  )
}
