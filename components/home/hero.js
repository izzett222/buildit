import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.container}>
      <div className={classes.details}>
        <h1 className={classes.title}>Development company</h1>
        <p className={classes.text}>
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className={classes.btns}>
            <button className={classes.btn}>Services</button>
            <button className={classes["btn-secondary"]}>About the company</button>
        </div>
      </div>
      <div className={classes.images}>
        <div className={classes.firstrow}>
            <img src="/img/hero1.png" className={classes["small-img"]} alt="house" />
            <img src="/img/hero2.png" alt="house" />
            <img src="/img/hero3.png" alt="house" className={classes["small-img"]} />
        </div>
        <div className={classes.secondrow}>
        <img src="/img/hero4.png" alt="house" />
        <img src="/img/hero5.png" className={classes["secondrow-img"]} alt="house" />
        </div>
      </div>
    </section>
  );
}
