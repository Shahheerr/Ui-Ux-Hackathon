import { ProductCard } from './Product-Card';
import ProductImage_1 from '@/assets/Image.png';
import ProductImage_2 from '@/assets/Image (1).png';
import ProductImage_3 from '@/assets/Image (2).png';
import ProductImage_4 from '@/assets/Image (3).png';

const featuredProducts = [
  {
    imageSrc: ProductImage_1,
    name: 'Library Stool Chair',
    price: 20,
    tag: 'new' as const,
  },
  {
    imageSrc: ProductImage_2,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 30,
    tag: 'sale' as const,
  },
  {
    imageSrc: ProductImage_3,
    name: 'Library Stool Chair',
    price: 20,
  },
  {
    imageSrc: ProductImage_4,
    name: 'Library Stool Chair',
    price: 20,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-8 text-start ml-3 text-[#272343]">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
