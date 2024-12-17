import Image, { StaticImageData } from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  imageSrc: string | StaticImageData
  name: string
  price: number
  originalPrice?: number
  tag?: 'new' | 'sale'
}

export function ProductCard({ imageSrc, name, price, originalPrice, tag }: ProductCardProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={name}
          width={312}
          height={312}
          className="rounded-md w-full"
        />
        {tag && (
          <div
            className={`absolute top-3 left-3 py-1 px-2 rounded text-white text-xs font-medium ${tag === 'new' ? 'bg-[#01AD5A]' : 'bg-[#F5813F]'
              }`}
          >
            {tag === 'new' ? 'New' : 'Sale'}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-base font-normal text-[#272343] leading-[1.3]">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
            )}
          </div>
        </div>
        <button
          className="w-10 h-10 bg-[#029FAE] rounded-full flex items-center justify-center"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  )
}
