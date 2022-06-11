import styles from './fonts.module.css'
export default function SubTitle({children}){
    return(
        // styling for subtitles
        <h4 className={styles.h4}>{children}</h4>
    )
}