"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 临时硬编码语言为中文，避免构建问题
  const [language, setLanguageState] = useState<"zh" | "ja">("zh");
  const setLanguage = (lang: "zh" | "ja") => setLanguageState(lang);

  const navItems = {
    zh: [
      { label: "主页", href: "#home" },
      { label: "作品展示", href: "#works" },
      { label: "最新动态", href: "#news" },
      { label: "公司介绍", href: "#company" },
    ],
    ja: [
      { label: "ホーム", href: "#home" },
      { label: "作品", href: "#works" },
      { label: "ニュース", href: "#news" },
      { label: "会社概要", href: "#company" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src="/images/img_002.jpg"
                alt="UKA Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems[language].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xl font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-3 ml-6 border-l border-zinc-800 pl-6">
              <button
                onClick={() => setLanguage("zh")}
                className={`text-base font-medium px-5 py-2.5 rounded transition-all duration-300 ${
                  language === "zh"
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage("ja")}
                className={`text-base font-medium px-5 py-2.5 rounded transition-all duration-300 ${
                  language === "ja"
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                日本語
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-6 bg-black/95">
            <nav className="flex flex-col gap-4">
              {navItems[language].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-base text-gray-300 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex gap-2 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => {
                    setLanguage("zh");
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm px-3 py-1 rounded ${
                    language === "zh"
                      ? "bg-red-600 text-white"
                      : "text-gray-400"
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => {
                    setLanguage("ja");
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm px-3 py-1 rounded ${
                    language === "ja"
                      ? "bg-red-600 text-white"
                      : "text-gray-400"
                  }`}
                >
                  日本語
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
