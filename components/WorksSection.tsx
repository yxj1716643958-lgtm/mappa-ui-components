"use client";

export default function WorksSection() {
  // 临时硬编码语言为中文，避免构建问题
  const language = "zh";

  const worksTitle = {
    zh: "作品展示",
    ja: "作品紹介",
  };

  const watchText = {
    zh: "立即观看",
    ja: "今すぐ見る",
  };

  const works = [
    {
      id: 1,
      title: "青之箱",
      titleJa: "BLUE BOX",
      image: "/images/img_007.jpg",
      episodes: "08/09/10話",
      link: "https://www.bilibili.com/bangumi/play/ss48690",
    },
    {
      id: 2,
      title: "黙示録の四騎士",
      titleJa: "黙示録の四騎士",
      image: "/images/img_008.jpg",
      episodes: "29/31/33話",
      link: "https://www.bilibili.com/bangumi/play/ss48812",
    },
    {
      id: 3,
      title: "指环王：洛希尔人的战争",
      titleJa: "The War of the Rohirrim",
      image: "/images/img_009.jpg",
      episodes: "劇場版",
      link: "https://www.bilibili.com/video/BV1pZUtYmEh5",
    },
    {
      id: 4,
      title: "胆大党",
      titleJa: "DAN DA DAN",
      image: "/images/img_010.jpg",
      episodes: "17/18/19話",
      link: "https://www.bilibili.com/bangumi/play/ep1851277",
    },
    {
      id: 5,
      title: "灵云代码",
      titleJa: "灵云代码",
      image: "/images/img_011.jpg",
      episodes: "原创项目",
      link: "https://www.bilibili.com/video/BV1rq4y1s7jk",
    },
  ];

  return (
    <section id="works" className="py-32 bg-black relative overflow-hidden">
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
              {worksTitle[language]}
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>

        {/* 无限滚动容器 */}
        <div className="relative">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* 滚动内容 */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-scroll-smooth">
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

                  {/* 集数 */}
                  <p className="text-base text-gray-400 font-mono tracking-wider">
                    {work.episodes}
                  </p>
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

                  <p className="text-base text-gray-400 font-mono tracking-wider">
                    {work.episodes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
