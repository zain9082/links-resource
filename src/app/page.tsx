import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { FeaturedPlacements } from "@/components/home/featured-placements";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ConsultationBanner } from "@/components/home/consultation-banner";
import { HowItWorks } from "@/components/home/how-it-works";
import { WhyChoose } from "@/components/home/why-choose";
import { CaseStudies } from "@/components/home/case-studies";
import { Reviews } from "@/components/home/reviews";
import { Partnerships } from "@/components/home/partnerships";
import { WebsiteMetrics } from "@/components/home/website-metrics";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedPlacements />
      <ServicesSection />
      <AboutSection />
      <ConsultationBanner />
      <HowItWorks />
      <WhyChoose />
      <CaseStudies />
      <Reviews />
      <Partnerships />
      <WebsiteMetrics />
      <Faq />
      <Cta />
    </>
  );
}
