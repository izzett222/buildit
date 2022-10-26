import Image from "next/image"
import classes from "./contactcard.module.css"

export default function ContactCard({src, title, children}) {
    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <Image src={src} layout="fill" alt="icon" />
            </div>
            <div>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.text}>{children}</p>
            </div>
        </div>
    )
}