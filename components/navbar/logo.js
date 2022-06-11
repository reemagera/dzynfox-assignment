import Link from 'next/link'
import styles from './headerbox.module.css'
export default function MyLogo({children}){
    return(
        // logo font
        <div className={styles.logo}>
            <Link href="/"><a className={styles.logoa}>{children}</a></Link>
        </div>
    )
}