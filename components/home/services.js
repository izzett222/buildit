import { default as Card } from "./serviceCard";
import classes from "./services.module.css";

export default function Services() {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Innovative Execution</h1>
      <div className={classes.list}>
          <Card icon="/icons/service1.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
          <Card icon="/icons/service2.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
          <Card icon="/icons/service3.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
      </div>
    </section>
  );
}
