import { Montserrat, Poppins } from "next/font/google"

export const viewport = {
  themeColor: '#a855f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'WebRush Brasil',
  description: 'Soluções digitais inovadoras para o seu negócio',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'WebRush Brasil',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/icons/icon-192x192.svg',
    shortcut: '/icons/icon-192x192.svg',
    apple: '/icons/icon-192x192.svg',
  },
  openGraph: {
    title: 'WebRush Brasil',
    description: 'Soluções digitais inovadoras para o seu negócio',
    url: 'https://webrush.com.br',
    siteName: 'WebRush Brasil',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebRush Brasil',
    description: 'Soluções digitais inovadoras para o seu negócio',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://webrush.com.br',
  },
};

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
        <link rel="canonical" href="https://webrush.com.br" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="WebRush Brasil" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WebRush Brasil" />
        <meta name="description" content="Soluções digitais inovadoras para o seu negócio" />
        <meta name="keywords" content="desenvolvimento web, marketing digital, soluções digitais, tecnologia, inovação" />
        <meta name="author" content="WebRush Brasil" />
        <meta name="geo.region" content="BR" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <script src="https://kit.fontawesome.com/d71e0cdf3f.js" crossorigin="anonymous"></script>
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