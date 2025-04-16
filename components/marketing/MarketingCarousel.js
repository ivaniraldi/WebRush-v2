"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import translations from "@/translations"

export default function MarketingCarousel() {
  const { language } = useLanguage()
  const t = translations[language]

  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef(null)

  const carousel = [
    {
      title: t.marketing.carousel[0].title,
      description: t.marketing.carousel[0].description,
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: t.marketing.carousel[1].title,
      description: t.marketing.carousel[1].description,
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: t.marketing.carousel[2].title,
      description: t.marketing.carousel[2].description,
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === carousel.length - 1 ? 0 : prevSlide + 1))
    }, 5000)

    return () => {
      resetTimeout()
    }
  }, [currentSlide, carousel.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carousel.length - 1 ? 0 : prevSlide + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carousel.length - 1 : prevSlide - 1))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.marketing.carouselTitle}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t.marketing.carouselDescription}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carousel.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-gray-300">{slide.description}</p>
                    </div>
                    <div>
                      <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="rounded-lg shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[#a855f7] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none z-10 md:-translate-x-5"
            aria-label="Previous slide"
          >
            <span className="material-icons">chevron_left</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-[#a855f7] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none z-10 md:translate-x-5"
            aria-label="Next slide"
          >
            <span className="material-icons">chevron_right</span>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {carousel.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#a855f7]" : "bg-gray-600"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
