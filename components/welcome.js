import Link from "next/link"
import styles from "./welcome.module.css"
import FakeButton from "./fakebuttons/fakebutton"
import SubTitle from "./fonts/subtitle"
import BigTitle from "./fonts/bigtitle"
import { FacebookIcon, LinkedinIcon, TelegramIcon, TwitterIcon, EmailIcon} from "next-share"
export default function WelcomeMsg(){
    return(
        <div className={styles.welcome}>
            <div className={styles.container}>
                <SubTitle>Welcome to my page</SubTitle>
                <BigTitle>Hi! Glad you're here.<br/>I am Reema Gera. 
                <br/>I am an Engineering Student <br/>from VNIT Nagpur. 
                <br/>This is my portfolio.</BigTitle>
                <div>
                    <Link href="/"><FakeButton>Team Up</FakeButton></Link>
                    <Link href="/"><FakeButton>More About Me</FakeButton></Link>
                </div>
            </div>
            <ul className={styles.socials}>
                <li><a href="https://www.facebook.com"><FacebookIcon size={32} round/></a></li>
                <li><a href="https://www.twitter.com"><TwitterIcon size={32} round/></a></li>
                <li><a href="https://www.linkedin.com"><LinkedinIcon size={32} round/></a></li>
                <li><a href="https://www.telegram.com"><TelegramIcon size={32} round/></a></li>
                <li><a href="https://mail.google.com"><EmailIcon size={32} round/></a></li>
            </ul>
        </div>
    )
}