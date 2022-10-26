import Form from "../common/form";
import classes from "./contact.module.css";
import ContactCard from "./contactCard";

export default function Contact() {
  return (
    <section className={classes.contact}>
      <div className={classes.details}>
        <h6 className={classes.tag}>Contact</h6>
        <h2 className={classes.title}>Get In Touch</h2>
        <div className={classes["contact-wrapper"]}> 
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
