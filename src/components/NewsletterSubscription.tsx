import Image from 'next/image'

import ProductImage_1 from '@/assets/Image (5).png';
import ProductImage_2 from '@/assets/Image (4).png'
import ProductImage_3 from '@/assets/Image (1).png'
import ProductImage_4 from '@/assets/Image.png'
import ProductImage_5 from '@/assets/Image (2).png'
import ProductImage_6 from '@/assets/Image (6).png';

const DImage = [ProductImage_1, ProductImage_2, ProductImage_3, ProductImage_4, ProductImage_5, ProductImage_6];
export function NewsletterSubscription() {
    return (
        <section className="bg-[#1E28320D] py-[100px] px-4 sm:px-6 lg:px-[300px]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-medium leading-[58.59px] text-center mb-8">Or Subscribe To The Newsletter</h2>
                <form className="flex flex-col sm:flex-row gap-4 mb-[70px]">
                    <input
                        type="email"
                        placeholder="Email Address..."
                        className="flex-grow px-4 py-2 border-b-2 border-black bg-transparent focus:outline-none  placeholder:text-[#1E283280]"
                    />
                    <button
                        type="submit"
                        className="px-8 py-2 border-b-2 border-black font-semibold transition-colors hover:bg-black hover:text-white"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <h3 className="text-[45px] font-medium text-center mb-8">Follow Products And Discounts On Instagram</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {DImage.map((image, i) => (
                            <Image
                                key={i}
                                src={image}
                                alt={`Instagram product ${i + 1}`}
                                width={200}
                                height={200}
                                className="w-full h-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

