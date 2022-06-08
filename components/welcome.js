import Link from "next/link"
import styles from "./welcome.module.css"
import FakeButton from "./fakebuttons/fakebutton"
import SubTitle from "./fonts/subtitle"
import BigTitle from "./fonts/bigtitle"
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
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                <li><a href="https://www.github.com/reemagera">GitHub</a></li>
            </ul>
            {/* add icons later */}
        </div>
    )
}