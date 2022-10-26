import classes from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <div className={classes.circle}></div>
          <p className={classes.text}>Buildit</p>
        </div>
      </Link>

      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/about">About</Link>{" "}
        </li>
        <li className={classes.item}>
          <Link href="/services">Services</Link>
        </li>
        <li className={classes.item}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={classes.item}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className={classes.btn}>Need a project?</button>
    </header>
  );
};
export default Header;
