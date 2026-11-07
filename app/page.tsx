import Categories from "@/components/sections/Categories";
import Cta from "@/components/sections/Cta";
import CustomGearCta from "@/components/sections/CustomGearCta";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import NewsletterStrip from "@/components/sections/NewsLetterStrip";
import Quote from "@/components/sections/Quote";
import ShopByCategory from "@/components/sections/ShopByCategory";
import Testimonials from "@/components/sections/Testimonials";
import TrustedTeams from "@/components/sections/TrustedTeams";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories/>
      <Cta/>
      <HowItWorks/>
      <ShopByCategory/>
      <TrustedTeams/>
      <Faq/>
      <Quote/>
      <CustomGearCta/>
      <Testimonials/>
      <NewsletterStrip/>
      <Footer/>
    </main>
  );
}
