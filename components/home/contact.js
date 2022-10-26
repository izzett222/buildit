import Form from "../common/form";
import ContactCard from "./contactCard";

export default function Contact() {
  return (
    <section className="py-[88px] max-w-[1200px] mx-auto flex gap-[120px]">
      <div className="flex-1">
        <h6 className="font-medium text-base text-[#5bccde]">Contact</h6>
        <h2 className="font-bold leading-[48px] mt-[13px] mb-[110px] text-[#486a6f] text-4xl">Get In Touch</h2>
        <div className="flex flex-col gap-[30px]"> 
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
  );
}
