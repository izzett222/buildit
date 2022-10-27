import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#486a6f] py-10 text-[#f4f7ff]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4">
        <div>
          <p className="font-bold text-2xl">Buildit</p>
          <p className="mb-16">Development company, 2022</p>
          <p>Site design – ⏰ Alarm</p>
        </div>
        <ul className="font-medium text-base flex flex-col gap-[11px]">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
          <li><div className="flex gap-1">
            <div className="w-10 h-10 relative">
                <Image src="/icons/instagram.svg" alt="instagram" layout="fill" />
            </div>
            <div className="w-10 h-10 relative">
                <Image src="/icons/facebook.svg" alt="instagram" layout="fill" />
            </div>
          </div></li>
        </ul>
        <ul className="font-medium text-base flex flex-col gap-[11px]">
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="contact">Contact</Link></li>
        </ul>
        <div>
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport,<br/> NY 14450</p>
          <p>708-790-0000 <br/> sales@buildit.site</p>
        </div>
      </div>
    </footer>
  );
}
