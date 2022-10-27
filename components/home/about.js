/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#e1ebfa] pt-12 pb-20">
      <div>
        <div className="flex gap-10 py-10 w-auto max-w-[1200px] justify-center border-y-2 border-solid border-y-[#678c92] mx-auto mb-[60px]">
          <Image src="/icons/about5.svg" width="100%" height={43} alt="logo" />
          <Image src="/icons/about4.svg" width="100%" height={40} alt="logo" />
          <Image src="/icons/about3.svg" width="100%" height={40} alt="logo" />
          <Image src="/icons/about2.svg" width="100%" height={30} alt="logo" />
          <Image src="/icons/about1.svg" width="100%" height={45} alt="logo" />
        </div>

        <div className="flex max-w-[1200px] mx-auto items-stretch gap-10 px-[100px]">
          <div className="flex flex-1 mt-20">
            <img
              src="/img/about6.png"
              alt="logo"
              className="h-full w-full"
            />
          </div>
          <div className="flex-1">
            <h6 className="font-medium text-base text-[#5bccde]">About us</h6>
            <h2 className="font-bold text-4xl leading-[48px]">Owner and investor with a reputation</h2>
            <p className="font-medium text-base text-[#678c92] leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
            <button className="bg-[#4397a4] shadow-button rounded-[5px] text-[#f4f7ff] px-[70px] py-[15px] mt-10"><Link href="/about">Explore</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
}
