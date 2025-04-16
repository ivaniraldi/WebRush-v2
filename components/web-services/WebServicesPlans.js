"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import Link from "next/link"

export default function WebServicesPlans() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeModal, setActiveModal] = useState(null)

  const plans = [
    {
      name: t.webServices.plans[0].name,
      price: t.webServices.plans[0].price,
      description: t.webServices.plans[0].description,
      features: t.webServices.plans[0].features,
      highlight: false,
    },
    {
      name: t.webServices.plans[1].name,
      price: t.webServices.plans[1].price,
      description: t.webServices.plans[1].description,
      features: t.webServices.plans[1].features,
      highlight: true,
      highlightText: t.webServices.plans[1].highlight,
    },
    {
      name: t.webServices.plans[2].name,
      price: t.webServices.plans[2].price,
      description: t.webServices.plans[2].description,
      features: t.webServices.plans[2].features,
      highlight: false,
    },
  ]

  const openModal = (index) => {
    setActiveModal(index)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div id="services">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gray-800 rounded-lg overflow-hidden relative ${plan.highlight ? "border-2 border-[#a855f7]" : ""}`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-[#a855f7] text-white text-xs font-bold px-3 py-1">
                {plan.highlightText}
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
              </div>
              <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="material-icons text-[#a855f7] mr-2 text-sm">check_circle</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.features.length > 4 && (
                  <li className="text-center text-sm text-[#a855f7]">
                    + {plan.features.length - 4} {t.webServices.moreFeatures}
                  </li>
                )}
              </ul>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => openModal(index)}
                  className="w-full py-2 text-center rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  {t.webServices.detailsButton}
                </button>
                <Link
                  href="/contato"
                  className={`block w-full py-2 text-center rounded-md ${plan.highlight ? "bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white" : "bg-transparent border border-white text-white hover:bg-white/10"} transition-colors`}
                >
                  {t.webServices.planButton}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeModal !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{plans[activeModal].name}</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-white">
                  <span className="material-icons">close</span>
                </button>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{plans[activeModal].price}</span>
              </div>

              <p className="text-gray-300 mb-6">{plans[activeModal].description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">{t.webServices.featuresTitle}</h4>
                <ul className="space-y-3 grid md:grid-cols-2 gap-x-4">
                  {plans[activeModal].features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="material-icons text-[#a855f7] mr-2 text-sm">check_circle</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">{t.webServices.processTitle}</h4>
                <ol className="space-y-3">
                  {t.webServices.process.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="bg-[#a855f7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex justify-end">
                <Link
                  href="/contato"
                  className="px-6 py-2 rounded-md bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  {t.webServices.planButton}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
