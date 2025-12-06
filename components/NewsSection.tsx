"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NewsSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const newsTitle = {
    zh: "最新动态",
    ja: "最新ニュース",
  };

  const readMore = {
    zh: "阅读全文",
    ja: "続きを読む",
  };

  const news = [
    {
      id: 1,
      title: {
        zh: "长春知行合一与上海阅文签约 共促动漫产业高质量发展",
        ja: "長春知行合一と上海閲文が契約 アニメ産業の高品質発展を共同促進",
      },
      date: "2025.09.28",
      image: "/images/img_002.jpg",
      link: "http://jl.people.com.cn/n2/2025/0928/c349771-41367568.html",
      category: "合作",
    },
    {
      id: 2,
      title: {
        zh: '当 "小不点儿" 遇见新世界：河山依旧，未来可期',
        ja: '「小不点児」が新世界に出会う：山河は変わらず、未来は期待できる',
      },
      date: "2025.08.15",
      image: "/images/img_003.jpg",
      link: "https://app.people.cn/h5/detail/normal/6446797452411904",
      category: "作品",
    },
    {
      id: 3,
      title: {
        zh: "人民视频 | 知行合一动漫：AI助力吉林文化遗产数字化焕新",
        ja: "人民ビデオ | 知行合一アニメ：AIが吉林文化遺産のデジタル化を支援",
      },
      date: "2025.04.03",
      image: "/images/img_004.jpg",
      link: "http://jl.people.com.cn/n2/2025/0317/c349771-41166375.html",
      category: "技术",
    },
    {
      id: 4,
      title: {
        zh: "智绘吉林·AI赋能计划启动暨人民网梦幻灵境长春AI展演中心启用",
        ja: "スマート吉林・AI賦能計画始動および人民網夢幻霊境長春AI展示センター開設",
      },
      date: "2025.03.17",
      image: "/images/img_005.jpg",
      link: "http://jl.people.com.cn/n2/2025/0317/c349771-41166325.html",
      category: "活动",
    },
  ];

  // 自动轮播
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, news.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section id="news" className="py-32 bg-black relative overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-scan"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        {/* 标题 */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -left-24 top-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <div className="absolute -right-24 top-1/2 w-20 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider relative">
              {newsTitle[language]}
              <span className="absolute inset-0 blur-2xl opacity-30 text-red-600">
                {newsTitle[language]}
              </span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>

        {/* 轮播容器 */}
        <div className="relative">
          {/* 主轮播区域 */}
          <div className="relative h-[600px] overflow-hidden">
            {news.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
                }`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="relative h-full flex items-center gap-12">
                    {/* 左侧图片 */}
                    <div className="w-1/2 h-full relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title[language]}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>

                      {/* 分类标签 */}
                      <div className="absolute top-8 left-8">
                        <span className="px-6 py-3 bg-red-600 text-white text-lg font-bold tracking-wider shadow-2xl">
                          {item.category}
                        </span>
                      </div>

                      {/* 红色光晕 */}
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500"></div>
                    </div>

                    {/* 右侧内容 */}
                    <div className="w-1/2 pr-12">
                      {/* 日期 */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-1 bg-red-600"></div>
                        <p className="text-red-500 font-mono text-xl tracking-wider">
                          {item.date}
                        </p>
                      </div>

                      {/* 标题 */}
                      <h3 className="text-5xl font-bold text-white mb-8 leading-tight group-hover:text-red-500 transition-colors duration-300">
                        {item.title[language]}
                      </h3>

                      {/* 阅读按钮 */}
                      <div className="inline-flex items-center gap-4 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold transition-all duration-300 group-hover:gap-6">
                        <span>{readMore[language]}</span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* 左右箭头 */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-red-600 backdrop-blur-sm border border-white/20 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-red-600 backdrop-blur-sm border border-white/20 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* 底部指示器 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div
                  className={`w-16 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-600 w-24"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-progress"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 缩略图预览 */}
        <div className="mt-16 grid grid-cols-4 gap-6">
          {news.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`group relative aspect-video overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-red-600 scale-105"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title[language]}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-sm font-bold text-center px-4">
                  {item.title[language]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-progress {
          animation: progress 5s linear;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
