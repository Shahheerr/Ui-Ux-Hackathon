import Image from "next/image";
import BrandLogo_1 from "@/assets/Logo.png";
import BrandLogo_2 from "@/assets/Logo (1).png";
import BrandLogo_3 from "@/assets/Logo (2).png";
import BrandLogo_4 from "@/assets/Logo (3).png";
import BrandLogo_5 from "@/assets/Logo (4).png";
import BrandLogo_6 from "@/assets/Logo (5).png";
import BrandLogo_7 from "@/assets/Logo (6).png";

export default function BrandSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 items-center">
          <Image src={BrandLogo_1} alt="Zapier" className="w-auto h-16" />
          <Image src={BrandLogo_2} alt="Pipedrive" className="w-auto h-20" />
          <Image src={BrandLogo_3} alt="CIB Bank" className="w-auto h-24" />
          <Image src={BrandLogo_4} alt="Brand 4" className="w-auto h-12" />
          <Image src={BrandLogo_5} alt="Brand 5" className="w-auto h-16" />
          <Image src={BrandLogo_6} alt="MOZ" className="w-auto h-20" />
          <Image src={BrandLogo_7} alt="Brand 7" className="w-auto h-16" />
        </div>
      </div>
    </section>
  );
}
