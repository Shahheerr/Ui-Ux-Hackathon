import { CategoryCard } from './CategoryCard'
import Prd1 from "@/assets/Image (4).png"
import Prd2 from "@/assets/Image (5).png"
import Prd3 from "@/assets/Image (6).png"

const categories = [
    {
        title: 'Wing Chair',
        productCount: 3584,
        imageSrc: Prd1,
        href: '/categories/wing-chair'
    },
    {
        title: 'Wooden Chair',
        productCount: 157,
        imageSrc: Prd2,
        href: '/categories/wooden-chair'
    },
    {
        title: 'Desk Chair',
        productCount: 154,
        imageSrc: Prd3,
        href: '/categories/desk-chair'
    }
]

export function TopCategories() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-start text-[#272343]">Top Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.title}
                            {...category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
