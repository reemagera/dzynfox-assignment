import styles from './fonts.module.css'
export default function Para({children}){
    // styling for paragraphs
    return(<p className={styles.para}>{children}</p>)
}