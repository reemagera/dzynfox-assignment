import styles from './footbanner.module.css'
export default function FootBanner(){
    return(
        // disclaimer section or any copyrights
        <div className={styles.bigcontainer}>
            <p>
                This website was developed by Reema Sasi Gera as a part of assignment. All the content inside this is not real.
                It is just for demo purposes.
                Might improvise a few components later on
            </p>
        </div>
    )
}