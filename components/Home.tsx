import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryHighlight from '@/components/CategoryHighlight';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoryHighlight />
   
    </div>
  );
}

export default Home;