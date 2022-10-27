import Head from "next/head";
import Form from "../components/common/form";
import Banner from "../components/home/banner";
import ContactCard from "../components/home/contactCard";

export default function about() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>
      </Head>

      <main className="relative min-h-[70vh] mb-[40px] -top-[90px]">
        <Banner />
        <section className="pt-40 relative z-10 max-w-[1200px] mx-auto px-4 flex gap-[127px]">
          <div className="flex-1">
            <h6 className="font-medium text-base text-[#5BCCDE] mb-[13px]">contact</h6>
            <h1 className=" text-4xl text-[#486A6F] font-bold">
            Get In Touch
            </h1>
            <div className="flex flex-col gap-[30px] mt-[80px]">
              <ContactCard src="/icons/contact1.svg" title="Tel">
                708-790-0000
              </ContactCard>
              <ContactCard src="/icons/contact.svg" title="Email">
                sales@buildit.site
              </ContactCard>
              <ContactCard src="/icons/contact.svg" title="Office">
                60 Manor Station St. Fairport, NY 14450
              </ContactCard>
            </div>
          </div>
          <Form />
        </section>
      </main>
    </>
  );
}
