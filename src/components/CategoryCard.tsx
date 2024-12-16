import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
    title: string
    productCount: number
    imageSrc: string | unknown
    href: string
}

export function CategoryCard({ title, productCount, imageSrc, href }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="block relative w-full max-w-lg overflow-hidden rounded-lg"
        >
            <Image
                src={imageSrc}
                alt={title}
                width={424} // Image dimensions are preserved for quality
                height={424}
                className="object-cover w-full h-full"
            />
            <div
                className="absolute bottom-0 left-0 right-0 bg-[#000000B2] px-6 pt-5 pb-5"
                style={{ backdropFilter: 'blur(2px)' }}
            >
                <h3 className="text-white text-lg font-medium mb-2">
                    {title}
                </h3>
                <p className="text-white/80 text-sm">
                    {productCount.toLocaleString()} Products
                </p>
            </div>
        </Link>
    )
}
