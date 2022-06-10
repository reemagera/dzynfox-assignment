import Link from "next/link"
// import styles from "../components/navigation.module.css"
import styles from "../components/navbar/headerbox.module.css"
import HeaderBox from "./navbar/headerbox"
import ListSet from "./navbar/listset"
import MyLogo from "./navbar/logo"
import NavItem from "./navbar/navitem"
export default function NavBar(){
    return(
        <HeaderBox>
            <MyLogo>My Page</MyLogo>
            <ListSet>
                <li className={styles.li}><Link href="/"><a className={styles.a}>Home</a></Link></li>
                <li className={styles.li}><Link href="#about"><a className={styles.a}>About</a></Link></li>
                <li className={styles.li}><Link href="/"><a className={styles.a}>Projects</a></Link></li>
                <li className={styles.li}><Link href="/"><a className={styles.a}>Contact</a></Link></li>
                {/* <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Contact Us</NavItem> */}
            </ListSet>
        </HeaderBox>
    )
}