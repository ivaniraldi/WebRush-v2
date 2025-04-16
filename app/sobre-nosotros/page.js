"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"
import ContactCTA from "@/components/ContactCTA"
import PageTransition from "@/components/PageTransition"
import ParallaxHero from "@/components/ParallaxHero"

export default function SobreNosotrosPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const team = [
    {
      name: "Ivan Iraldi",
      position: "CTO",
      bio: "Especialista en desarrollo de software y arquitectura de sistemas.",
      image: "https://i.imgur.com/p1sfxYt.png",
    },
    {
      name: "Lucas Santos",
      position: "Diretor de Marketing",
      bio: "Estratega de marketing digital con experiencia en grandes marcas.",
      image: "https://i.imgur.com/s6XIPuT.png",
    },
    {
      name: "Pablo Vallejos",
      position: "Diretor de Qualidade",
      bio: "Experta en aseguramiento de calidad y metodologías ágiles.",
      image: "https://i.imgur.com/1D69520.png",
    },
  ]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <ParallaxHero
          title={t.aboutUs.title}
          subtitle={t.aboutUs.description}
          backgroundImage="https://www.atomogaming.com/wp-content/uploads/2023/08/destacada-semana-4.jpg"
          height="70vh"
        />

        <section className="py-16 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://www.startechup.com/wp-content/uploads/1-1024x656.jpg"
                  alt="WebRush Brasil Office"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                    {t.aboutUs.mission}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 font-body">{t.aboutUs.missionText}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                    {t.aboutUs.vision}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 font-body">{t.aboutUs.visionText}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white font-heading">
                {t.aboutUs.values}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.aboutUs.valuesList.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-heading">{value.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-body">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white font-heading">
                {t.aboutUs.team}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12 font-body">
                {t.aboutUs.teamDescription}
              </p>
            
              <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md text-center"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white font-heading">
                        {member.name}
                      </h3>
                      <p className="text-[#a855f7] font-medium mb-3 font-body">{member.position}</p>
                      <p className="text-gray-700 dark:text-gray-300 font-body">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </PageTransition>
  )
}
