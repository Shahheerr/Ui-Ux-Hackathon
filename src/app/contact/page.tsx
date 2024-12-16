'use client'

import { TbMapPinFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import trophy from "@/assets/Vector.png"
import guarantee from "@/assets/Vector (1).png"
import headphones from "@/assets/Vector (2).png"
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl leading-[54px] font-medium">Get In Touch With Us</h1>
        <p className="text-[#9F9F9F] text-base font-normal max-w-xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <TbMapPinFilled className="w-6 h-6 font-bold" />
            <div className='max-w-[190px]'>
              <h3 className="font-medium text-2xl leading-[36px] mb-2">Address</h3>
              <p className="text-black text-base leading-[19.36px] font-normal">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaPhoneAlt className="w-6 h-6" />
            <div className='max-w-[190px]'>
              <h3 className="font-medium text-2xl leading-[36px] mb-2">Phone</h3>
              <p className="text-black text-base leading-[19.36px] font-normal">Mobile: +(84) 546-6789</p>
              <p className="text-black text-base leading-[19.36px] font-normal">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex gap-4">
            <BsFillClockFill className="w-6 h-6" />
            <div className='max-w-[190px]'>
              <h3 className="font-medium text-2xl leading-[36px] mb-2">Working Time</h3>
              <p className="text-black text-base leading-[19.36px] font-normal">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-black text-base leading-[19.36px] font-normal">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-4">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Abc"
              className="w-full px-4 py-3 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#B88E2F]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-4">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Abc@def.com"
              className="w-full px-4 py-3 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#B88E2F]"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-4">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="This is an optional"
              className="w-full px-4 py-3 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#B88E2F]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-4">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Hi! I'd like to ask about"
              className="w-full px-4 py-3 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#B88E2F]"
            />
          </div>

          <button
            type="submit"
            className="w-[237px] bg-[#029FAE] text-white py-3 rounded-[5px] border border-[#B88E2F] hover:bg-[#029FAE]/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 bg-[#F4F4F4] p-16">
        <div className="flex items-center gap-4">
          <Image src={trophy} alt="Quality Icon" className="w-12 h-12" />
          <div>
            <h3 className="font-medium">High Quality</h3>
            <p className="text-gray-600">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Image src={guarantee} alt="Quality Icon" className="w-12 h-12" />
          <div>
            <h3 className="font-medium">Warranty Protection</h3>
            <p className="text-gray-600">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Image src={headphones} alt="Quality Icon" className="w-12 h-12" />
          <div>
            <h3 className="font-medium">24 / 7 Support</h3>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </main>
  )
}

