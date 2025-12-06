"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function FullProductionSection() {
  const { language } = useLanguage();

  const sectionTitle = {
    zh: "全流程承制作品",
    ja: "フルプロセス制作作品",
  };

  const watchText = {
    zh: "立即观看",
    ja: "今すぐ見る",
  };

  const works = [
    {
      id: 1,
      title: "驭灵师",
      titleJa: "驭灵師",
      image: "/images/img_015.jpg",
      episodes: "全流程制作",
      link: "https://www.bilibili.com/bangumi/play/ss45979?spm_id_from=333.337.0.0",
    },
    {
      id: 2,
      title: "我家大师兄有点靠谱",
      titleJa: "我が家の大師兄はちょっと頼りになる",
      image: "/images/img_016.jpg",
      episodes: "全流程制作",
      link: "https://www.bilibili.com/bangumi/play/ss39694?spm_id_from=333.337.0.0",
    },
    {
      id: 3,
      title: "无脑魔女",
      titleJa: "無脳魔女",
      image: "/images/img_017.jpg",
      episodes: "全流程制作",
      link: "https://www.bilibili.com/bangumi/play/ss43371?spm_id_from=333.337.0.0",
    },
    {
      id: 4,
      title: "个人英雄主义",
      titleJa: "個人英雄主義",
      image: "/images/img_018.jpg",
      episodes: "全流程制作",
      link: "#",
    },
    {
      id: 5,
      title: "血与心",
      titleJa: "血と心",
      image: "/images/img_019.jpg",
      episodes: "全流程制作",
      link: "https://www.bilibili.com/bangumi/play/ss35211?spm_id_from=333.337.0.0",
    },
    {
      id: 6,
      title: "即将动画化",
      titleJa: "アニメ化予定",
      image: "/images/img_020.jpg",
      episodes: "全流程制作",
      link: "#",
    },
  ];

  return (
    <section id="full-production" className="py-32 bg-zinc-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* 标题 */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider">
              {sectionTitle[language]}
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>

        {/* 无限滚动容器 */}
        <div className="relative">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>

          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>

          {/* 滚动内容 */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-scroll-reverse">
              {/* 第一组 */}
              {works.map((work) => (
                <div
                  key={`first-${work.id}`}
                  className="group cursor-pointer flex-shrink-0 w-[300px]"
                >
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                    {/* 红色边框效果 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg"></div>

                    {/* 图片 */}
                    <div className="relative w-full h-full">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>

                    {/* 悬停时的红色光晕 */}
                    <div className="absolute inset-0 shadow-[0_0_40px_rgba(220,38,38,0)] group-hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] transition-shadow duration-500 rounded-lg"></div>

                    {/* 悬停时显示的观看按钮 */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50">
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-base font-bold transition-all duration-300 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {watchText[language]} →
                      </a>
                    </div>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {language === "zh" ? work.title : work.titleJa}
                  </h3>
                </div>
              ))}

              {/* 第二组（用于无缝循环） */}
              {works.map((work) => (
                <div
                  key={`second-${work.id}`}
                  className="group cursor-pointer flex-shrink-0 w-[300px]"
                >
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg"></div>

                    <div className="relative w-full h-full">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>

                    <div className="absolute inset-0 shadow-[0_0_40px_rgba(220,38,38,0)] group-hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] transition-shadow duration-500 rounded-lg"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50">
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-base font-bold transition-all duration-300 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {watchText[language]} →
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {language === "zh" ? work.title : work.titleJa}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 6 - 40px * 6));
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
          will-change: transform;
        }

        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
