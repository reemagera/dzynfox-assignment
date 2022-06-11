import styles from './fakebutton.module.css'
import Link from 'next/link'
export default function FakeButton({children}){
    return(
        // Fake button component styling
        <span className={styles.a}>{children}</span>
    )
}