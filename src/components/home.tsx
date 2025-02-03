import Hero from "./landing/Hero";
import ServiceSectors from "./landing/ServiceSectors";
import CustomerService from "./landing/CustomerService";
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
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <ServiceSectors />
        </section>
        <section id="customer-service">
          <CustomerService />
        </section>
        <section id="ai">
          <AISection />
        </section>
        <section id="comparison">
          <Comparison />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default Home;
