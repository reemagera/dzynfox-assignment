import styles from './fonts.module.css'
export default function Para({children}){
    return(<p className={styles.para}>{children}</p>)
}