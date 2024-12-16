import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import ProductImage_1 from '@/assets/Image (1).png';
import ProductImage_2 from '@/assets/Image (8).png';
import ProductImage_3 from '@/assets/Image.png';
import ProductImage_4 from '@/assets/Image (6).png';
import ProductImage_5 from '@/assets/Image (2).png';
import ProductImage_6 from '@/assets/Image (4).png';

const featuredProducts = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 99,
    image: ProductImage_2
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 99,
    image: ProductImage_3
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 99,
    image: ProductImage_4
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 99,
    image: ProductImage_5
  },
  {
    id: 5,
    name: 'Library Stool Chair',
    price: 99,
    image: ProductImage_6
  }
]

export default function ProductPage() {
  return (
    <main className="container mx-auto px-4 py-8 my-28">
      {/* Product Detail Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={ProductImage_1}
            alt="Library Stool Chair"
            width={648}
            height={648}
            className="h-auto"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-[64px] max-w-lg leading-[65px] font-bold text-[#272343]">Library Stool Chair</h1>
          <div className="inline-block bg-[#029FAE] text-white leading-[22px] text-xl font-semibold px-4 py-3 rounded-[100px]">
            $20.00 USD
          </div>
          <hr />
          <p className="text-[#272343] max-w-lg text-[22px] leading-[33px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <button 
            className="flex items-center text-xl leading-[22px] font-semibold gap-2 bg-[#029FAE] text-white px-6 py-4 rounded-lg hover:bg-[#029FAE]/90 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="space-y-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[28px] leading-[33.89px] font-bold tracking-[20%]">FEATURED PRODUCTS</h2>
          <Link href="/products" className="font-bold text-lg leading-[21.78px] border-b-2 py-1 border-black">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="space-y-3">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-normal text-[#272343] text-base leading-[22.8px]">{product.name}</h3>
                <p className="text-gray-900 text-sm font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

