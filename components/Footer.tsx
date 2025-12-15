"use client";

export default function Footer() {
  // 硬编码为中文，避免Vercel构建问题
  const language = "zh";

  const footerContent = {
    zh: {
      company: "长春知行合一动漫有限公司",
      slogan: "以科技推动数字文化产业发展",
      copyright: "版权所有",
    },
    ja: {
      company: "長春知行合一アニメ有限会社",
      slogan: "技術でデジタル文化産業の発展を推進",
      copyright: "著作権所有",
    },
  };

  const t = footerContent[language];

  return (
    <footer className="bg-black border-t border-red-900/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo 和简介 */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-white">U</span>
              <span className="text-red-600">K</span>
              <span className="text-white">A</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t.slogan}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-sm text-gray-400 group-hover:text-white">微</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-sm text-gray-400 group-hover:text-white">B</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-sm text-gray-400 group-hover:text-white">信</span>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">
              快速链接
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#company"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  公司介绍
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  作品展示
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  最新动态
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">
              联系我们
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-red-500">📍</span>
                长春市高新区修正路
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">🏢</span>
                国家高新技术企业
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">🎖️</span>
                吉林省专精特新企业
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-zinc-900 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p className="mb-1">
                &copy; 2016-2025 {t.company} {t.copyright}
              </p>
              <p>吉公网安备22017302000378号 | 吉ICP备2022007013号-1</p>
            </div>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <span className="text-red-500 font-medium">bilibili</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
