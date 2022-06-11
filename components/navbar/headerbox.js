import styles from './headerbox.module.css'
export default function HeaderBox({children}){
    return(
        // navbar
        <header className={styles.headerbox}>{children}</header>
    )
}