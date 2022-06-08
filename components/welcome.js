import Link from "next/link"
import styles from "./welcome.module.css"
import FakeButton from "./fakebuttons/fakebutton"
import SubTitle from "./fonts/subtitle"
import BigTitle from "./fonts/bigtitle"
export default function WelcomeMsg(){
    return(
        <>
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
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
            </ul>
        </>
    )
}