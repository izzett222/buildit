import Head from 'next/head';

export default function about() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>service</title>
      </Head>
      <main>
        <section className="bg-service-bg h-fit position relative -top-[90px] pt-20 -mb-[90px]">
          <div className="flex gap-[72px] max-w-[1200px] mx-auto py-[140px] justify-center">
            <div className="flex-1 flex flex-col gap-5 self-center max-w-[540px] text-center">
              <h6 className="font-medium text-base text-[#5BCCDE]">Services</h6>
              <h1 className=" text-4xl text-[#486A6F] font-bold">Owner and investor with a reputation</h1>
              <p className="text-[#678C92] leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
