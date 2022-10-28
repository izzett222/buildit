import Image from "next/image"

export default function ContactCard({src, title, children}) {
    return (
        <div className="flex items-center gap-7">
            <div className="relative h-[70px] w-[70px]">
                <Image src={src} layout="fill" alt="icon" />
            </div>
            <div>
                <h4 className="font-medium text-base text-[#486a6f] mt-2">{title}</h4>
                <p className="font-bold text-xl text-[#486a6f] max-w-[200px]">{children}</p>
            </div>
        </div>
    )
}