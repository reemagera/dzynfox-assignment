import styles from './lists.module.css'
export default function ListItem({children}){
    return(
        <li className={styles.listitem}>{children}</li>
    )
}