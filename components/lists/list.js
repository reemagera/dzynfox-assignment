import styles from "./lists.module.css"
export default function List({children}){
    // horizontally aligned list component 
    return(<ul className={styles.list}>{children}</ul>)
}