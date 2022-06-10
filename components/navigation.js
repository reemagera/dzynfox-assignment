import Link from "next/link"
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
                <NavItem><Link href="/"><a className={styles.a}>Home</a></Link></NavItem>
                <NavItem><Link href="#about"><a className={styles.a}>About</a></Link></NavItem>
                <NavItem><Link href="#projects"><a className={styles.a}>Projects</a></Link></NavItem>
                <NavItem><Link href="/"><a className={styles.a}>Contact</a></Link></NavItem>
            </ListSet>
        </HeaderBox>
    )
}