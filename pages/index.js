import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Support from "@/components/Support";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollAnimation from "@/components/ScrollAnimation"; 

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20 space-y-20">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>

        <ScrollAnimation>
          <About />
        </ScrollAnimation>

        <ScrollAnimation>
          <Specialties />
        </ScrollAnimation>

        <ScrollAnimation>
          <Support />
        </ScrollAnimation>

        <ScrollAnimation>
          <Office />
        </ScrollAnimation>

        <ScrollAnimation>
          <FAQ />
        </ScrollAnimation>

        <ScrollAnimation>
          <CTA />
        </ScrollAnimation>
      </div>
      <Footer />
    </>
  );
}
