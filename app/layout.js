// layout.js (mover los metadatos fuera de la sección de cliente)
import { Montserrat, Poppins } from "next/font/google";

// Configuración del viewport
export const viewport = {
  themeColor: '#a855f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

// Metadata optimizada para SEO (fuera del componente)
export const metadata = {
  title: 'WebRush Brasil - Soluções digitais inovadoras',
  description: 'Transforme seu negócio com as mais recentes soluções digitais. Desenvolvimento web, apps móveis e muito mais.',
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
    title: 'WebRush Brasil - Soluções digitais inovadoras',
    description: 'Soluções digitais de ponta para otimizar e transformar seu negócio.',
    url: 'https://webrushbrasil.com.br',
    siteName: 'WebRush Brasil',
    locale: 'pt_BR',
    type: 'website',
    image: 'https://i.imgur.com/z2yA6hn.png',
    imageAlt: 'WebRush Brasil - Soluções digitais inovadoras',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebRush Brasil - Soluções digitais inovadoras',
    description: 'Soluções digitais de ponta para otimizar e transformar seu negócio.',
    image: 'https://i.imgur.com/z2yA6hn.png',
    creator: '@webrushbrasil',
  },
  robots: {
    index: true,
    follow: true,
    maxSnippets: -1,
    maxImagePreview: "large",
  },
  alternates: {
    canonical: 'https://webrushbrasil.com.br',
    hreflang: {
      'pt-BR': 'https://webrushbrasil.com.br',
      'en': 'https://webrush.com.br/en',
    },
  },
};

import ClientLayout from "./ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="canonical" href="https://webrushbrasil.com.br" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="WebRush Brasil" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WebRush Brasil" />
        <meta name="description" content="Transforme seu negócio com soluções digitais inovadoras." />
        <meta name="keywords" content="desenvolvimento web, marketing digital, soluções digitais, tecnologia, inovação, web development, mobile development, software development, custom software development, qatest" />
        <meta name="author" content="WebRush Brasil" />
        <meta name="geo.region" content="BR" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <script src="https://kit.fontawesome.com/d71e0cdf3f.js" crossOrigin="anonymous"></script>

        {/* Meta OpenGraph */}
        <meta property="og:title" content="WebRush Brasil - Soluções digitais inovadoras" />
        <meta property="og:description" content="Soluções digitais de ponta para otimizar e transformar seu negócio." />
        <meta property="og:url" content="https://webrushbrasil.com.br" />
        <meta property="og:image" content="https://i.imgur.com/z2yA6hn.png" />
        <meta property="og:image:alt" content="WebRush Brasil - Soluções digitais inovadoras" />
        <meta property="og:site_name" content="WebRush Brasil" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Meta Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebRush Brasil - Soluções digitais inovadoras" />
        <meta name="twitter:description" content="Soluções digitais de ponta para otimizar e transformar seu negócio." />
        <meta name="twitter:image" content="https://i.imgur.com/z2yA6hn.png" />
        <meta name="twitter:creator" content="@webrushbrasil" />

      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans min-h-screen flex flex-col bg-[#0f172a] text-white transition-colors duration-300`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import './globals.css';
