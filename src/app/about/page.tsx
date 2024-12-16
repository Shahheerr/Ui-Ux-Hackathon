import Image from 'next/image'
import Link from 'next/link'
import { Truck, CheckCircle, CreditCard, Leaf } from 'lucide-react'
import ProductImage_1 from "@/assets/Image.png"

const features = [
    {
        icon: Truck,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard"
    },
    {
        icon: CheckCircle,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
        icon: CreditCard,
        title: "Unbeatable prices",
        description: "For our materials and quality you won't find better prices anywhere"
    },
    {
        icon: Leaf,
        title: "Recycled packaging",
        description: "We use 100% recycled to ensure our footprint is more manageable"
    }
]

const popularProducts = [
    {
        name: "The Poplar suede sofa",
        price: 99.00,
        image: "/placeholder.svg"
    },
    {
        name: "The Dandy chair",
        price: 99.00,
        image: "/placeholder.svg"
    },
    {
        name: "The Dandy chair",
        price: 99.00,
        image: "/placeholder.svg"
    }
]
function BrandFeature() {
    return (
        <>
            <section className="py-16">
                <h1 className="text-4xl font-bold text-center mb-16">
                    What Makes Our Brand Different
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <Icon className="w-8 h-8 text-[#029FAE] mb-4" />
                                <h3 className="text-xl font-medium text-[#029FAE] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

function AboutUs() {
    return (
        <>
            <section className="grid md:grid-cols-2 gap-8 py-16">
                <div className="bg-[#007580] p-12 text-white">
                    <h2 className="text-4xl font-bold mb-6">About Us - Comforty</h2>
                    <p className="mb-8 text-lg">
                        At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
                    </p>
                    <Link
                        href="/collection"
                        className="inline-block px-6 py-3 bg-[#F9F9F926] hover:bg-white/20 transition-colors text-white"
                    >
                        View collection
                    </Link>
                </div>
                <div className="bg-gray-100">
                    <Image
                        src={ProductImage_1}
                        alt="Comforty Chair"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    )
}

function PopularProducts() {
    return (
        <>
            <section className="py-16">
                <h2 className="text-4xl font-bold mb-12">Our Popular Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularProducts.map((product, index) => (
                        <div key={index} className="group">
                            <div className="relative aspect-[4/3] mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-medium">{product.name}</h3>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto px-4">
            <AboutUs />
            <BrandFeature />
            <PopularProducts />
        </main>
    )
}

