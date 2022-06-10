import styles from './fakebutton.module.css'
import Link from 'next/link'
export default function FakeButton({children}){
    return(
        <span className={styles.a}>{children}</span>
    )
}