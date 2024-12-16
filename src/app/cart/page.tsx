'use client'

import Image from 'next/image'
import { Heart, Trash2 } from 'lucide-react'
import ProductImage_1 from "@/assets/Image (2).png"
import ProductImage_2 from "@/assets/Image (4).png"

const cartItems = [
    {
        id: 1,
        name: 'Library Stool Chair',
        color: 'Ashen Slate/Cobalt Bliss',
        size: 'L',
        quantity: 1,
        price: 99,
        image: ProductImage_1
    },
    {
        id: 2,
        name: 'Library Stool Chair',
        color: 'Ashen Slate/Cobalt Bliss',
        size: 'L',
        quantity: 1,
        price: 99,
        image: ProductImage_2
    }
]

export default function CartPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 my-12">
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Bag Section */}
                <div className="lg:col-span-2">
                    <h1 className="font-inter text-[22px] font-medium leading-[33px] mb-6">
                        Bag
                    </h1>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-6 pb-6 border-b">
                                <div className="w-[150px] h-[150px] relative flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="font-normal text-base leading-[20.8px] text-[#272343]">{item.name}</h3>
                                        <p className="text-base leading-7 font-normal">MRP: ${item.price}</p>
                                    </div>
                                    <p className="text-[#757575] mt-1">{item.color}</p>
                                    <div className="flex gap-8 mt-2">
                                        <p className='text-[#757575]'>Size {item.size}</p>
                                        <p className='text-[#757575]'>Quantity {item.quantity}</p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <button className="text-gray-600 hover:text-gray-900">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="lg:col-span-1">
                    <h2 className="font-inter text-[22px] font-medium leading-[33px] mb-6">
                        Summary
                    </h2>
                    <div className="rounded-lg p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between ">
                                <p className='text-[#111111] text-base leading-7'>Subtotal</p>
                                <p className='font-medium text-base'>$198.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='text-[#111111] text-base leading-7'>Estimated Delivery & Handling</p>
                                <p className='font-medium text-base'>Free</p>
                            </div>
                            <div className="border-t border-b py-4 my-4">
                                <div className="flex justify-between font-medium">
                                    <p className='text-[#111111] text-base leading-7'>Total</p>
                                    <p className='font-medium text-base'>$198.00</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full font-medium text-center bg-[#029FAE] text-white mt-6 py-[18px] rounded-[30px] hover:bg-[#029FAE]/90 transition-colors"
                        >
                            Member Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

