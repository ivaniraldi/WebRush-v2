"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"

export default function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t.contact.formTitle}</h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500 text-green-700 dark:text-green-300 p-4 rounded-md"
        >
          <p>{t.contact.successMessage}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                {t.contact.nameLabel}
              </label>
              <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" animate="blur">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7] transition-all text-gray-900 dark:text-white"
                />
              </motion.div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                {t.contact.emailLabel}
              </label>
              <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" animate="blur">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7] transition-all text-gray-900 dark:text-white"
                />
              </motion.div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                {t.contact.phoneLabel}
              </label>
              <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" animate="blur">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7] transition-all text-gray-900 dark:text-white"
                />
              </motion.div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                {t.contact.serviceLabel}
              </label>
              <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" animate="blur">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7] transition-all text-gray-900 dark:text-white"
                >
                  <option value="">{t.contact.selectService}</option>
                  <option value="web-development">{t.contact.services.webDev}</option>
                  <option value="marketing">{t.contact.services.marketing}</option>
                  <option value="seo">{t.contact.services.seo}</option>
                  <option value="other">{t.contact.services.other}</option>
                </select>
              </motion.div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                {t.contact.messageLabel}
              </label>
              <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" animate="blur">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7] transition-all text-gray-900 dark:text-white"
                ></textarea>
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white font-medium rounded-md hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <span className="material-icons animate-spin mr-2">refresh</span>
                  {t.contact.submitting}
                </span>
              ) : (
                t.contact.submitButton
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  )
}
