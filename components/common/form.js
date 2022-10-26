import classes from "./form.module.css";
export default function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <div className={classes.wrapper}>
          <p>name</p>
          <input type="text" />
        </div>
        <div className={classes.wrapper}>
          <p>Email</p>
          <input type="text" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.wrapper}>
          <p>Subject</p>
          <input type="text" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.wrapper}>
          <p>Message</p>
          <textarea type="text" />
        </div>
      </div>
      <button>Send message</button>
    </form>
  );
}
