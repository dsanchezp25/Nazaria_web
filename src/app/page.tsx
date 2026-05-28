import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import ZonasWrapper from "@/components/ZonasWrapper";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <ZonasWrapper />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
