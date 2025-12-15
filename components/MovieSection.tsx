"use client";

export default function MovieSection() {
  // 硬编码为中文，避免Vercel构建问题
  const language = "zh";

  const movies = [
    { id: 1, image: "/images/img_021.jpg", title: language === "zh" ? "电影作品 01" : "Movie 01" },
    { id: 2, image: "/images/img_022.jpg", title: language === "zh" ? "电影作品 02" : "Movie 02" },
  ];

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              {language === "zh" ? "电影制作作品" : "Movie Production"}
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-base mt-4">
            {language === "zh"
              ? "专业的电影级制作，打造精彩的视觉盛宴"
              : "Professional movie-level production for stunning visual experiences"}
          </p>
        </div>

        {/* 电影作品展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
                {/* 红色边框效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>

                {/* 图片 */}
                <div className="relative w-full h-full">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 悬停时的红色光晕 */}
                <div className="absolute inset-0 shadow-[0_0_60px_rgba(220,38,38,0)] group-hover:shadow-[0_0_100px_rgba(220,38,38,0.8)] transition-shadow duration-500 rounded-2xl"></div>

                {/* 底部渐变遮罩 */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* 标题 */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                  <div className="w-16 h-1 bg-red-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
