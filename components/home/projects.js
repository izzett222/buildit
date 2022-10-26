/* eslint-disable @next/next/no-img-element */

export default function Projects() {
    return (<section className="py-[100px] max-w-[1200px] mx-auto">

        <div className="flex max-w-[1200px] mx-auto items-stretch gap-10 px-[100px]">
            <div className="flex-1">
                <h6 className="font-medium text-base text-[#5bccde]">Available Properties</h6>
                <h2 className="font-bold text-4xl text-[#486a6f] leading-[48px]">Owner and investor with a reputation</h2>
                <p className="font-medium text-base text-[#678c92] leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                    Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi,
                    quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                     Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, 
                     viverra vel ultrices in, congue sed ex.
                </p>
                <button className="bg-[#4397a4] shadow-button rounded-[5px] text-[#f4f7ff] px-[70px] py-[15px] mt-10">Explore</button>
            </div>
            <div className="flex flex-1 mt-20">
                <img
                    src="/img/project1.png"
                    alt="logo"
                />
            </div>
        </div>
    </section>)
}