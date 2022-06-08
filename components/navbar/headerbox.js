import styles from './headerbox.module.css'
export default function HeaderBox({children}){
    return(
        <header className={styles.headerbox}>{children}</header>
    )
}