// import Link from "next/link"
import NavBar from "../components/navigation"
import WelcomeMsg from "../components/welcome"
import About from "./about"
import styles from "../components/navbar/headerbox.module.css"
import Link from "next/link"
export default function Home(){
    return(
        <>
            <NavBar/>
            <WelcomeMsg/>
            <div id="about">
                <About/>
            </div>
            <li className={styles.li}><Link href="#about"><a className={styles.a}>About</a></Link></li>
            
            <h1>Work In progress</h1>
        </>
    )
}