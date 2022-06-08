import styles from './fonts.module.css'
export default function SubTitle({children}){
    return(
        <h4 className={styles.h4}>{children}</h4>
    )
}