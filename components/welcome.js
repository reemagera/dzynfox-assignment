import Link from "next/link"
import styles from "./welcome.module.css"
export default function WelcomeMsg(){
    return(
        <div className={styles.container}>
            <h3 className={styles.h3}>Welcome to My Page</h3>
            <h1 className={styles.h1}>Hi! Glad you're here.<br/>I am Reema Gera. <br/>I am an Engineering Student <br/>from VNIT Nagpur. <br/>This is my portfolio.
            </h1>
            <div>
                <Link href="/"><a>Let's collab</a></Link>
                <Link href="/"><a>More About Me</a></Link>
            </div>
        </div>
    )
}