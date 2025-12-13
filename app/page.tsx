// UKA Animation Company Website - Main Page - Updated
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";
import FullProductionSection from "@/components/FullProductionSection";
import CelShadeSection from "@/components/CelShadeSection";
import MovieSection from "@/components/MovieSection";
import AnimeSection from "@/components/AnimeSection";
import NewsSection from "@/components/NewsSection";
import CompanySection from "@/components/CompanySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-white text-black p-8">
        <h2 className="text-2xl font-bold mb-4">测试内容</h2>
        <p>如果你能看到这段文字，说明基本渲染正常</p>
      </div>
      <WorksSection />
      <FullProductionSection />
      <CelShadeSection />
      <MovieSection />
      <AnimeSection />
      <NewsSection />
      <CompanySection />
      <Footer />
    </main>
  );
}
