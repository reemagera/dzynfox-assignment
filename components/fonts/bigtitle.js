import styles from './fonts.module.css'
export default function BigTitle({children}){
    // Large font for catchy phrases
    return(<h1 className={styles.h1}>{children}</h1>)
}