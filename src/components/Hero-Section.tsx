import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BannerPic from "@/assets/Product Image.png";

export default function HeroSection() {
    return (
        <main className="relative bg-[#F0F2F3] rounded-bl-[48px] mx-auto max-w-[1321px] px-6 py-10 sm:px-10 md:px-16 lg:px-24">
            <div className="flex flex-col-reverse lg:flex-row items-center">
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-[14px] font-normal text-[#272343] tracking-[0.12em]">
                        WELCOME TO CHAIRY
                    </p>
                    <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold text-[#272343] leading-tight max-w-md">
                        Best Furniture Collection for your interior.
                    </h1>
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 bg-[#029FAE] text-white text-sm sm:text-base font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#029FAE]/90 transition-colors shadow-md"
                    >
                        Shop Now
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>

                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src={BannerPic}
                        alt="Modern Chair"
                        width={434}
                        height={584}
                        priority
                        className="w-full max-w-sm lg:max-w-md h-auto"
                    />
                </div>
            </div>
        </main>
    );
}
