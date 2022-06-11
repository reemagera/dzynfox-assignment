import styles from './headerbox.module.css'
// import styles from './listset.module.css'
export default function ListSet({children}){
    return(
        // list of items  in navbar
        <nav>
            <ul className={styles.ul}>{children}</ul>
        </nav>
    )
}