import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryHighlight from '@/components/CategoryHighlight';
import Newsletter from '@/components/Newsletter';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoryHighlight />
      <Newsletter />
    </div>
  );
}

export default Home;