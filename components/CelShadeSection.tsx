"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CelShadeSection() {
  const { language } = useLanguage();

  const works = [
    { id: 1, image: "/images/img_023.jpg" },
    { id: 2, image: "/images/img_024.jpg" },
    { id: 3, image: "/images/img_025.jpg" },
    { id: 4, image: "/images/img_026.jpg" },
    { id: 5, image: "/images/img_027.jpg" },
    { id: 6, image: "/images/img_028.jpg" },
    { id: 7, image: "/images/img_029.jpg" },
    { id: 8, image: "/images/img_030.jpg" },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* 标题 */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider">
              {language === "zh" ? "三渲二制作作品" : "Cel-Shaded Production"}
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6">
            {language === "zh"
              ? "将3D技术与2D美学完美融合，呈现独特的视觉风格"
              : "Perfectly blending 3D technology with 2D aesthetics"}
          </p>
        </div>

        {/* 滚动容器 */}
        <div className="relative">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* 滚动内容 */}
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll-celshade">
              {/* 第一组 */}
              {works.map((work) => (
                <div
                  key={`first-${work.id}`}
                  className="group cursor-pointer flex-shrink-0 w-[280px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
                    {/* 红色边框效果 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl"></div>

                    {/* 图片 */}
                    <div className="relative w-full h-full">
                      <img
                        src={work.image}
                        alt={`三渲二作品 ${work.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                      />
                    </div>

                    {/* 悬停时的红色光晕 */}
                    <div className="absolute inset-0 shadow-[0_0_50px_rgba(220,38,38,0)] group-hover:shadow-[0_0_80px_rgba(220,38,38,0.7)] transition-shadow duration-500 rounded-xl"></div>

                    {/* 底部渐变遮罩 */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* 编号标签 */}
                    <div className="absolute top-4 left-4 bg-red-600/95 text-white px-4 py-2 text-sm font-bold rounded-lg backdrop-blur-sm shadow-lg">
                      NO.{String(work.id).padStart(2, "0")}
                    </div>

                    {/* 悬停时显示的装饰线 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}

              {/* 第二组（用于无缝循环） */}
              {works.map((work) => (
                <div
                  key={`second-${work.id}`}
                  className="group cursor-pointer flex-shrink-0 w-[280px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl"></div>

                    <div className="relative w-full h-full">
                      <img
                        src={work.image}
                        alt={`三渲二作品 ${work.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                      />
                    </div>

                    <div className="absolute inset-0 shadow-[0_0_50px_rgba(220,38,38,0)] group-hover:shadow-[0_0_80px_rgba(220,38,38,0.7)] transition-shadow duration-500 rounded-xl"></div>

                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute top-4 left-4 bg-red-600/95 text-white px-4 py-2 text-sm font-bold rounded-lg backdrop-blur-sm shadow-lg">
                      NO.{String(work.id).padStart(2, "0")}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-celshade {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * 8 - 32px * 8));
          }
        }

        .animate-scroll-celshade {
          animation: scroll-celshade 50s linear infinite;
          will-change: transform;
        }

        .animate-scroll-celshade:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
