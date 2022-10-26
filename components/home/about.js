import classes from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.wrapper}>
        <div className={classes.logos}>
          <Image src="/icons/about5.svg" width="100%" height={43} alt="logo" />
          <Image src="/icons/about4.svg" width="100%" height={40} alt="logo" />
          <Image src="/icons/about3.svg" width="100%" height={40} alt="logo" />
          <Image src="/icons/about2.svg" width="100%" height={30} alt="logo" />
          <Image src="/icons/about1.svg" width="100%" height={45} alt="logo" />
        </div>

        <div className={classes.details}>
          <div className={classes["details-img"]}>
            <Image
              src="/img/about6.png"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="logo"
            />
          </div>
          <div className={classes["details-section"]}>
            <h6 className={classes.tag}>About us</h6>
            <h2 className={classes.title}>Owner and investor with a reputation</h2>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
            <button className={classes.btn}>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}
