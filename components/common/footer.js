import Image from "next/image";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div>
          <p className={classes.logo}>Buildit</p>
          <p className={classes.type}>Development company, 2022</p>
          <p className={classes.alarm}>Site design – ⏰ Alarm</p>
        </div>
        <ul className={classes.list}>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
          <li><div className={classes.icons}>
            <div className={classes.icon}>
                <Image src="/icons/instagram.svg" alt="instagram" layout="fill" />
            </div>
            <div className={classes.icon}>
                <Image src="/icons/facebook.svg" alt="instagram" layout="fill" />
            </div>
          </div></li>
        </ul>
        <ul className={classes.list}>
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div>
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport,<br/> NY 14450</p>
          <p>708-790-0000 <br/> sales@buildit.site</p>
        </div>
      </div>
    </footer>
  );
}
