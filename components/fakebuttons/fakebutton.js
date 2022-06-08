import styles from './fakebutton.module.css'
import Link from 'next/link'
export default function FakeButton({children}){
    return(
        <Link href="/"><a className={styles.a}>{children}</a></Link>
    )
}