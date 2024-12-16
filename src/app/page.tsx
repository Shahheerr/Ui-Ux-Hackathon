import BrandSection from "@/components/Brand-Section";
import { FeaturedProducts } from "@/components/Feature-Product";
import { GallerySection } from "@/components/Gallery-Section";
import HeroSection from "@/components/Hero-Section";
import { ProductGrid } from "@/components/Our-Product";
import { TopCategories } from "@/components/Top-Category";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <BrandSection />
      <FeaturedProducts />
      <TopCategories />
      <GallerySection />
      <ProductGrid />
    </div>
  );
}
