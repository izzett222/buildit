import Link from "next/link";

/* eslint-disable @next/next/no-img-element */


export default function Hero() {
  return (
    <section className="relative z-10 flex max-w-[1200px] mx-auto px-4 gap-12">
      <div className="flex-[3] self-center">
        <h1 className="text-[64px] mb-[20px] text-[#486a6f] font-bold leading-[72px]">Development company</h1>
        <p className="text-[22px] text-[#678c92] mb-[100px] leading-9">
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className="flex gap-4">
            <button className="bg-[#4397a4] shadow-button rounded-[5px] px-[27px] py-5 text-[#f4f7ff]"><Link href="/services">Services</Link></button>
            <button className="bg-[#c6dbff] shadow-button rounded-[5px] px-[27px] py-5 text-[#486a6f] font-bold text-base"><Link href="/about">About the company</Link></button>
        </div>
      </div>
      <div className="flex-[4] h-full">
        <div className="flex gap-9 px-[18px] mb-10">
            <img src="/img/hero1.png" className="self-end" alt="house" />
            <img src="/img/hero2.png" alt="house" />
            <img src="/img/hero3.png" alt="house" className="self-end" />
        </div>
        <div className="flex gap-9">
        <img src="/img/hero4.png" alt="house" />
        <img src="/img/hero5.png" className="self-start" alt="house" />
        </div>
      </div>
    </section>
  );
}
