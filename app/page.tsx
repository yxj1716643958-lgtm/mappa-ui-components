// UKA Animation Company Website - Main Page
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
