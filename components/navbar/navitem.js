import styles from './headerbox.module.css'
import Link from 'next/link'
export default function NavItem({children}){
    return(
        <li className={styles.li}>{children}</li>
    )
}