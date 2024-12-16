import Image from 'next/image'
import Image1 from "@/assets/item-category 1.png"
import Image2 from "@/assets/item-category-hover 1.png"
import Image3 from "@/assets/item-category.png"
import Image4 from "@/assets/item-category-2.png"

export function GallerySection() {
    return (
        <div className="relative mx-auto" style={{ width: '1320px', height: '648px' }}>
            {/* Vertical Text */}
            <div className="absolute -left-[318px] text-center top-[340px] -translate-y-1/2 -rotate-90">
                <p className="font-roboto text-[34px] font-normal leading-[39.84px] text-black whitespace-nowrap">
                    EXPLORE NEW AND POPULAR STYLES
                </p>
            </div>

            {/* Image Grid */}
            <div className="flex">
                {/* Large Image */}
                <div className="relative w-[648px] h-[648px]">
                    <Image
                        src={Image1}
                        alt="Orange modern chair"
                        width={648}
                        height={648}
                        className="object-cover"
                    />
                </div>

                {/* Small Images Grid */}
                <div className="grid grid-cols-2 gap-6 ml-6">
                    <div className="relative w-[312px] h-[312px]">
                        <Image
                            src={Image2}
                            alt="White tufted chair"
                            width={312}
                            height={312}
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-[312px] h-[312px]">
                        <Image
                            src={Image3}
                            alt="White wooden chair"
                            width={312}
                            height={312}
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-[312px] h-[312px]">
                        <Image
                            src={Image4}
                            alt="Grey upholstered chair"
                            width={312}
                            height={312}
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-[312px] h-[312px]">
                        <Image
                            src={Image3}
                            alt="White wooden chair variant"
                            width={312}
                            height={312}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
