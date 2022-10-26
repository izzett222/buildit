import classes from "./servicecard.module.css";

export default function ServiceCard({ icon, title, children }) {
  return (
    <div className={classes.container}>
      <picture>
        <img src={icon} alt="" className={classes.img} />
      </picture>

      <h3 className={classes.title}>{title}</h3>
      <p className={classes.text}>{children}</p>
    </div>
  );
}
