import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaPinterest, FaTwitter, FaFacebook, FaInstagram, FaCcPaypal } from "react-icons/fa";
import { SiMastercard, SiAmericanexpress } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import Logo from "@/assets/Logo Icon.png"


export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={Logo}
                alt="Comforty Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-semibold">Comforty</span>
            </Link>
            <p className="text-[#272343] text-base font-normal leading-6 mb-6">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#007580] transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007580] transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007580] transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007580] transition-colors">
                <FaPinterest className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007580] transition-colors">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Category Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#9A9CAA] text-sm font-medium leading-[15.4px] tracking-[0.06em] uppercase mb-6">
              CATEGORY
            </h3>
            <ul className="space-y-4">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'wooden Chair', 'Park Bench'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#272343] text-base font-normal leading-[17.6px] hover:text-[#007580]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#9A9CAA] text-sm font-medium leading-[15.4px] tracking-[0.06em] uppercase mb-6">
              SUPPORT
            </h3>
            <ul className="space-y-4">
              {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#272343] text-base font-normal leading-[17.6px] hover:text-[#007580]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="text-[#9A9CAA] text-sm font-medium leading-[15.4px] tracking-[0.06em] uppercase mb-6">
              NEWSLETTER
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-[285px] h-[46px] px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#007580]"
              />
              <button
                className="bg-[#029FAE] flex items-center text-white px-6 py-3.5 rounded-lg hover:bg-[#007580]/90 transition-colors whitespace-nowrap h-[46px]"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[#272343] text-base font-normal leading-[17.6px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 - Blogy - Designed & Develop by Zokisoft
          </p>
          <div className="flex gap-1">
            <SiMastercard size={24} className='text-gray-400' />
            <FaCcPaypal size={24} className='text-gray-400' />
            <SiAmericanexpress size={24} className='text-gray-400' />
            <RiVisaLine size={24} className='text-gray-400' />
          </div>
        </div>
      </div>
    </footer>
  )
}   