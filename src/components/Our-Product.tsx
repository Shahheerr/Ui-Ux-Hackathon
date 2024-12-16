import { ProductCard } from './Product-Card'
import ProductImage_1 from '@/assets/Image.png'
import ProductImage_2 from '@/assets/Image (1).png'
import ProductImage_3 from '@/assets/Image (2).png'
import ProductImage_4 from '@/assets/Image (3).png'
import ProductImage_5 from '@/assets/Image (4).png'
import ProductImage_6 from '@/assets/Image (7).png'
import ProductImage_7 from '@/assets/Image (8).png'

const products = [
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
  {
    imageSrc: ProductImage_5,
    name: 'Library Stool Chair',
    price: 20,
    tag: 'new' as const,
  },
  {
    imageSrc: ProductImage_6,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 30,
    tag: 'sale' as const,
  },
  {
    imageSrc: ProductImage_7,
    name: 'Library Stool Chair',
    price: 20,
  },
  {
    imageSrc: ProductImage_1,
    name: 'Library Stool Chair',
    price: 20,
  },
]

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] text-[#272343] font-medium text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

