"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import ContactForm from "@/components/ContactForm"
import PageTransition from "@/components/PageTransition"
import ParallaxHero from "@/components/ParallaxHero"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <ParallaxHero
          title={t.contact.title}
          subtitle={t.contact.description}
          backgroundImage="https://publish-p133109-e1368204.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2153a7e6-e0b2-4244-8c9b-94e9c0aa8361/help_contact_center_tap.jpg?preferwebp=true&quality=75&width=1280"
          height="70vh"
        />

        <section className="py-16 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                    {t.contact.infoTitle}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="material-icons mr-3 text-[#a855f7]">location_on</span>
                      <p className="text-gray-700 dark:text-gray-300 font-body">Santa Catarina, Brasil</p>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons mr-3 text-[#a855f7]">email</span>
                      <p className="text-gray-700 dark:text-gray-300 font-body">contato@webrushbrasil.com.br</p>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons mr-3 text-[#a855f7]">phone</span>
                      <p className="text-gray-700 dark:text-gray-300 font-body">+55 (48) 9999-9999</p>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons mr-3 text-[#a855f7]">schedule</span>
                      <p className="text-gray-700 dark:text-gray-300 font-body">{t.contact.hours}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                      {t.contact.followUs}
                    </h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-700 dark:text-white hover:text-[#a855f7] transition-colors">
                        <span className="material-icons">facebook</span>
                      </a>
                      <a href="#" className="text-gray-700 dark:text-white hover:text-[#a855f7] transition-colors">
                        <span className="material-icons">instagram</span>
                      </a>
                      <a href="#" className="text-gray-700 dark:text-white hover:text-[#a855f7] transition-colors">
                        <span className="material-icons">linkedin</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
