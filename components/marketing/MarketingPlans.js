"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import Link from "next/link"

export default function MarketingPlans() {
  const { language } = useLanguage()
  const t = translations[language]

  const plans = [
    {
      name: t.marketing.plans[0].name,
      price: t.marketing.plans[0].price,
      period: t.marketing.plans[0].period,
      features: t.marketing.plans[0].features,
      note: t.marketing.plans[0].note,
      highlight: false,
    },
    {
      name: t.marketing.plans[1].name,
      price: t.marketing.plans[1].price,
      period: t.marketing.plans[1].period,
      features: t.marketing.plans[1].features,
      note: t.marketing.plans[1].note,
      highlight: true,
      highlightText: t.marketing.plans[1].highlight,
    },
    {
      name: t.marketing.plans[2].name,
      price: t.marketing.plans[2].price,
      period: t.marketing.plans[2].period,
      features: t.marketing.plans[2].features,
      note: t.marketing.plans[2].note,
      highlight: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.marketing.plansTitle}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t.marketing.plansDescription}</p>
        </motion.div>

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
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-300">/{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="material-icons text-[#a855f7] mr-2 text-sm">check_circle</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && <p className="text-xs text-gray-400 mb-6">{plan.note}</p>}
                <Link
                  href="/contato"
                  className={`block w-full py-2 text-center rounded-md ${plan.highlight ? "bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white" : "bg-gray-700 text-white hover:bg-gray-600"} transition-colors`}
                >
                  {t.marketing.planButton}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
