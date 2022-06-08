import styles from './fonts.module.css'
export default function BigTitle({children}){
    return(<h1 className={styles.h1}>{children}</h1>)
}