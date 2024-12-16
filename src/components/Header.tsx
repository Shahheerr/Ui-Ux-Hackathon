'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X, Check } from 'lucide-react'
import Logo from "@/assets/Logo Icon.png"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const Nav = ['Home', 'Shop', 'Products', 'Pages', 'About']

    return (
        <header>
            {/* Top Banner */}
            <div className="bg-[#272343] text-gray-300 py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <p className="hidden sm:flex items-center"><Check size={16} className='mr-2' />Free Shipping On All Orders Over $50</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span>Eng</span>
                            <span className="text-xs">▼</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <span>Faqs</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <span>Need Help</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="bg-[#F0F2F3] py-4 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="Comforty Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="text-2xl font-semibold">Comforty</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/cart"
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span className="font-medium">Cart</span>
                            <span
                                className="bg-[#007580] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
                            >
                                2
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`border-b px-4 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto">
                        {Nav.map((item) => (
                            <li key={item} className="w-full lg:w-auto">
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="py-4 inline-block w-full text-[#636270] hover:text-[#007580] hover:border-b-2 hover:border-[#007580] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="text-[#636270] py-4 lg:py-0">
                        Contact: <span className="font-medium">(808) 555-0111</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}