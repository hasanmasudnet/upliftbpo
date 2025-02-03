import Hero from "./landing/Hero";
import ServiceSectors from "./landing/ServiceSectors";
import Features from "./landing/Features";
import AISection from "./landing/AISection";
import Comparison from "./landing/Comparison";
import Stats from "./landing/Stats";
import Pricing from "./landing/Pricing";
import FAQ from "./landing/FAQ";
import CTA from "./landing/CTA";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ChatBox } from "./chat";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <ServiceSectors />
        <Features />
        <AISection />
        <Comparison />
        <Stats />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default Home;
