// UKA Animation Company Website - Main Page

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 简化的Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">UKA</div>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a href="#home" className="text-xl font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300">主页</a>
              <a href="#works" className="text-xl font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300">作品展示</a>
              <a href="#news" className="text-xl font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300">最新动态</a>
              <a href="#company" className="text-xl font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300">公司介绍</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 简化的Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">UKA</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">长春出口合一动画有限公司</p>
          <div className="text-lg text-gray-400">动画制作工作室</div>
        </div>
      </section>

      {/* 简化的作品展示 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider">作品展示</h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">青之箱</h3>
              <p className="text-gray-400">BLUE BOX</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">黙示録の四騎士</h3>
              <p className="text-gray-400">黙示録の四騎士</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">胆大党</h3>
              <p className="text-gray-400">DAN DA DAN</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
