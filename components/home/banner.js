/* eslint-disable @next/next/no-img-element */
import classes from "./banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
        <img
          src="/img/Figure4.png"
          alt="triangle"
          className={classes.banner__img}
        />
    </div>
  );
};

export default Banner;
