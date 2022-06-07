import Link from "next/link"
import styles from "../components/navigation.module.css"
export default function NavBar(){
    return(
        <header className={styles.headerbox}>
            <div className={styles.logo}>
                <Link href="/"><a className={styles.logoa}>My Page</a></Link>
            </div>
            {/* <a className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a> */}
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/"><a className={styles.a}>Home</a></Link></li>
                    <li className={styles.li}><Link href=""><a className={styles.a}>About</a></Link></li>
                    <li className={styles.li}><Link href=""><a className={styles.a}>Projects</a></Link></li>
                    <li className={styles.li}><Link href=""><a className={styles.a}>Contact Us</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}