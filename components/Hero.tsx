export default function Hero() {

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
          UKA
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          长春出口合一动画有限公司
        </p>
        <div className="text-lg text-gray-400">
          动画制作工作室
        </div>
      </div>
    </section>
  );
}
