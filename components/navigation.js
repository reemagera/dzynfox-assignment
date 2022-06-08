import Link from "next/link"
// import styles from "../components/navigation.module.css"
import HeaderBox from "./navbar/headerbox"
import ListSet from "./navbar/listset"
import MyLogo from "./navbar/logo"
import NavItem from "./navbar/navitem"
export default function NavBar(){
    return(
        <HeaderBox>
            <MyLogo>My Page</MyLogo>
            <ListSet>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Contact Us</NavItem>
            </ListSet>
        </HeaderBox>
    )
}