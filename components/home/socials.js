import Image from "next/image";
import classes from "./socials.module.css";

export function Socials() {
  return (
    <section className={classes.socials}>
      <h6 className={classes.tag}>Socials</h6>
      <h2 className={classes.title}>On Instagram</h2>
      <div className={classes.list}>
        <div className={classes.wrapper}>
          <Image src="/img/social1.png" alt="social image" layout="fill" />
        </div>
        <div className={classes.wrapper}>
          <Image src="/img/social2.png" alt="social image" layout="fill" />
        </div>
        <div className={classes.wrapper}>
          <Image src="/img/social3.png" alt="social image" layout="fill" />
        </div>
        <div className={classes.wrapper}>
          <Image src="/img/social4.png" alt="social image" layout="fill" />
        </div>
        <div className={classes.wrapper}>
          <Image src="/img/social6.png" alt="social image" layout="fill" />
        </div>
        <div className={classes.wrapper}>
          <Image src="/img/social5.png" alt="social image" layout="fill" />
        </div>
      </div>
    </section>
  );
}
