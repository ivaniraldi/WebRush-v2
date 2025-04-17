"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import translations from "@/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOverflow, setMenuOverflow] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const servicesMenuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    const checkOverflow = () => {
      if (navRef.current) {
        const navWidth = navRef.current.scrollWidth;
        const containerWidth = navRef.current.clientWidth;
        setMenuOverflow(navWidth > containerWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", checkOverflow);

    // Initial check
    checkOverflow();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleServicesMenu = () => {
    setServicesOpen(!servicesOpen);
  };

  const navLinks = [
    {
      href: "/servicios",
      label: t.nav.services,
      hasSubmenu: true,
      submenu: [
        {
          href: "/servicios/desarrollo",
          label: t.nav.serviceSections.development,
        },
        {
          href: "/servicios/marketing",
          label: t.nav.serviceSections.marketing,
        },
        {
          href: "/servicios/quality-assurance",
          label: t.nav.serviceSections.qa,
        },
      ],
    },
    { href: "/casos-exito", label: t.nav.successCases },
    { href: "/sobre-nosotros", label: t.nav.aboutUs },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0f172a]/75 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full max-w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <img
                src="https://i.imgur.com/tzKGe47.png"
                alt="WebRush Brasil Logo"
                className={`h-7 md:h-12 ${theme === "dark" ? "invert" : ""}`}
              />
              {/* <span className="text-2xl font-bold gradient-text font-heading">WebRush</span>
              <span className="text-2xl font-bold ml-1 text-gray-900 dark:text-white font-heading">Brasil</span> */}
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center">
            <nav
              ref={navRef}
              className={`flex items-center ${
                menuOverflow
                  ? "overflow-x-auto scrollbar-thin pr-4"
                  : "space-x-6"
              }`}
            >
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className={`relative ${
                    menuOverflow ? "mx-3 whitespace-nowrap" : ""
                  }`}
                  ref={link.hasSubmenu ? servicesMenuRef : null}
                >
                  {link.hasSubmenu ? (
                    <div className="relative">
                      <button
                        onClick={toggleServicesMenu}
                        className={`text-sm font-medium transition-colors hover:text-[#a855f7] flex items-center nav-link ${
                          pathname.includes(link.href)
                            ? "text-[#a855f7]"
                            : "text-gray-900 dark:text-white"
                        } font-body`}
                      >
                        {link.label}
                        <span className="material-icons text-sm ml-1">
                          {servicesOpen ? "arrow_drop_up" : "arrow_drop_down"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                          >
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              {link.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                    pathname === subItem.href
                                      ? "text-[#a855f7]"
                                      : "text-gray-900 dark:text-white"
                                  } font-body`}
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-[#a855f7] nav-link ${
                        pathname === link.href
                          ? "text-[#a855f7]"
                          : "text-gray-900 dark:text-white"
                      } font-body`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center ml-6 space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden px-2 py-1 text-xs rounded font-medium bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                <span className="material-icons text-xl">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </motion.button>

              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => setLanguage("pt")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "pt"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  PT
                </motion.button>
                <motion.button
                  onClick={() => setLanguage("es")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "es"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  ES
                </motion.button>
                <motion.button
                  onClick={() => setLanguage("en")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "en"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  EN
                </motion.button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              className="text-gray-900 dark:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-icons">
                {isOpen ? "close" : "menu"}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.href} className="py-1">
                    {link.hasSubmenu ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`text-sm font-medium transition-colors hover:text-[#a855f7] flex items-center justify-between w-full ${
                            pathname.includes(link.href)
                              ? "text-[#a855f7]"
                              : "text-gray-900 dark:text-white"
                          } font-body`}
                        >
                          {link.label}
                          <span className="material-icons text-sm">
                            {servicesOpen ? "arrow_drop_up" : "arrow_drop_down"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {link.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`block text-sm ${
                                    pathname === subItem.href
                                      ? "text-[#a855f7]"
                                      : "text-gray-900 dark:text-white"
                                  } hover:text-[#a855f7] font-body`}
                                  onClick={closeMenu}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-[#a855f7] ${
                          pathname === link.href
                            ? "text-[#a855f7]"
                            : "text-gray-900 dark:text-white"
                        } font-body`}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center space-x-2 mt-4">
                <button
                  onClick={() => {
                    setLanguage("pt");
                    closeMenu();
                  }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "pt"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  PT
                </button>
                <button
                  onClick={() => {
                    setLanguage("es");
                    closeMenu();
                  }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "es"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  ES
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    closeMenu();
                  }}
                  className={`px-2 py-1 text-xs rounded font-medium ${
                    language === "en"
                      ? "bg-[#a855f7] text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  } font-body`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
