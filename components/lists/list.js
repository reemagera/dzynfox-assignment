import styles from "./lists.module.css"
export default function List({children}){
    return(<ul className={styles.list}>{children}</ul>)
}