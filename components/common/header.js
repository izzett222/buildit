import Link from "next/link";

const Header = () => {
  return (
    <header className="flex max-w-[1200px] mx-auto mt-10 relative z-10 px-4 justify-between items-center">
      <Link href="/">
        <div className="flex gap-[15px] text-2xl text-[#486a6f] font-bold items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full bg-[#486a6f]"></div>
          <p>Buildit</p>
        </div>
      </Link>

      <ul className="flex gap-[50px]">
        <li className="text-[#678C92] text-base font-medium">
          <Link href="/about">About</Link>{" "}
        </li>
        <li className="text-[#678C92] text-base font-medium">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-[#678C92] text-base font-medium">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-[#678C92] text-base font-medium">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className="bg-[#4397a4] rounded-[5px] px-[25px] py-2.5 text-[#F4F7FF] font-bold text-base">Need a project?</button>
    </header>
  );
};
export default Header;
