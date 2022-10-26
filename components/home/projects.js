import Image from "next/image"
import classes from "./projects.module.css"

export default function Projects() {
    return (<section className={classes.projects}>

        <div className={classes.details}>
            <div className={classes["details-section"]}>
                <h6 className={classes.tag}>Available Properties</h6>
                <h2 className={classes.title}>Owner and investor with a reputation</h2>
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                    Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi,
                    quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                     Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, 
                     viverra vel ultrices in, congue sed ex.
                </p>
                <button className={classes.btn}>Explore</button>
            </div>
            <div className={classes["details-img"]}>
                <Image
                    src="/img/project1.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="logo"
                />
            </div>
        </div>
    </section>)
}