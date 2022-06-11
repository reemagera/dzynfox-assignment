import styles from './lists.module.css'
export default function ListItem({children}){
    return(
        // vertically aligned list item
        <li className={styles.listitem}>{children}</li>
    )
}