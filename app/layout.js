import { Montserrat, Poppins } from "next/font/google"

export const metadata = {
  title: "WebRush Brasil - Desarrollo Web y Marketing Digital",
  description: "Transformamos clics en conexiones y resultados. Servicios de desarrollo web, marketing digital y SEO.",
  keywords: "desarrollo web, marketing digital, SEO, diseño web, WebRush Brasil, agencia digital",
  openGraph: {
    title: "WebRush Brasil - Desarrollo Web y Marketing Digital",
    description:
      "Transformamos clics en conexiones y resultados. Servicios de desarrollo web, marketing digital y SEO.",
    url: "https://webrushbrasil.com.br",
    siteName: "WebRush Brasil",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "WebRush Brasil",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.dev'
}

import ClientLayout from "./ClientLayout"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://webrushbrasil.com.br" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'