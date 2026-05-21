import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoriesSection from '@/components/CategoriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import BestsellersSection from '@/components/BestSeller';
import AboutBrandSection from '@/components/AboutBrand';
import BuyingGuideSection from '@/components/BuyingGuide';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseUs />
      <BestsellersSection />
      <Testimonials />
      <AboutBrandSection />
      {/* <BuyingGuideSection /> */}
      <Newsletter />
    </main>
  );
}
