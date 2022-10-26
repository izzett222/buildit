import Image from "next/image";

export function Socials() {
  return (
    <section className="pt-[90px] pb-12 bg-[#e1ebfa]">
      <h6 className="font-medium text-base text-[#5bccde] text-center">Socials</h6>
      <h2 className="font-bold text-4xl text-[#486a6f] leading-[48px] text-center">On Instagram</h2>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-5 mt-10">
        <div className="h-[278px] relative">
          <Image src="/img/social1.png" alt="social image" layout="fill" />
        </div>
        <div className="h-[278px] relative">
          <Image src="/img/social2.png" alt="social image" layout="fill" />
        </div>
        <div className="h-[278px] relative">
          <Image src="/img/social3.png" alt="social image" layout="fill" />
        </div>
        <div className="h-[278px] relative">
          <Image src="/img/social4.png" alt="social image" layout="fill" />
        </div>
        <div className="h-[278px] relative">
          <Image src="/img/social6.png" alt="social image" layout="fill" />
        </div>
        <div className="h-[278px] relative">
          <Image src="/img/social5.png" alt="social image" layout="fill" />
        </div>
      </div>
    </section>
  );
}
