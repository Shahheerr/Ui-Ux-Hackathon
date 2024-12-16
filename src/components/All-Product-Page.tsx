import { ProductCard } from './Product-Card'
import ProductImage_1 from '@/assets/Image.png'
import ProductImage_2 from '@/assets/Image (1).png'
import ProductImage_3 from '@/assets/Image (2).png'
import ProductImage_4 from '@/assets/Image (3).png'
import ProductImage_5 from '@/assets/Image (4).png'
import ProductImage_6 from '@/assets/Image (7).png'
import ProductImage_7 from '@/assets/Image (8).png'
import ProductImage_8 from '@/assets/Image (5).png';
import ProductImage_9 from '@/assets/Image (6).png';

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_1, tag: 'new' as const },
  { id: 2, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_2, tag: 'sale' as const, originalPrice: 30 },
  { id: 3, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_3 },
  { id: 4, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_4 },
  { id: 5, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_8, tag: 'new' as const },
  { id: 6, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_6, tag: 'sale' as const, originalPrice: 30 },
  { id: 7, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_7 },
  { id: 8, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_1 },
  { id: 9, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_5, tag: 'new' as const },
  { id: 10, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_2, tag: 'sale' as const, originalPrice: 30 },
  { id: 11, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_3 },
  { id: 12, name: 'Library Stool Chair', price: 20, imageSrc: ProductImage_9 },
]

export function AllProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#272343]">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

