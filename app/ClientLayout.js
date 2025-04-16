"use client"

import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/context/LanguageContext"
import { ThemeProvider } from "@/context/ThemeContext"
import { AnimatePresence } from "framer-motion"
import CustomCursor from "@/components/CustomCursor"

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        <Footer />
        <CustomCursor />
      </ThemeProvider>
    </LanguageProvider>
  )
}
