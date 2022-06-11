import styles from './contact.module.css'
import SubTitle from '../components/fonts/subtitle'
import BigTitle from '../components/fonts/bigtitle'
import ListItem from '../components/lists/listitem'
import List from '../components/lists/list'
import { FacebookIcon, LinkedinIcon, TelegramIcon, TwitterIcon, EmailIcon} from "next-share"
import FakeButton from '../components/fakebuttons/fakebutton'

export default function Contact(){
    return(
        <div className={styles.bigcontainer}>
            <SubTitle>Contact Me</SubTitle>
            <BigTitle>Let's connect and do something innovative and creative</BigTitle>
            <div className={styles.smallcontainer}>
                <div id='contact'>
                <h4 className={styles.miniheading}>Contact Info</h4>
                <span className={styles.hdash}>______________________________________________________________________________________________________________________</span>
                <List>
                    <ListItem>
                        <h4>Email me at</h4>
                        <li><a href='https://mail.google.com'>me.surname@mycompany.ac.in</a></li>
                        <li><a href='https://mail.google.com'>personal@company2.com</a></li>
                        <li><a href='https://mail.google.com'>alternate@myownstart.com</a></li>
                    </ListItem>
                    <span className={styles.columndash}></span>
                    <ListItem>
                        <h4>Contact numbers</h4>
                        <li>(Mobile): 1234567890</li>
                        <li>(Land line): 0123-2222233333</li>
                        <li>(Fax): 232-23232323</li>
                    </ListItem>
                    <span className={styles.columndash}></span>
                    <ListItem>
                        
                        <h4>Connect with me</h4>
                        <ul className={styles.listalign}>
                            <li><a href="https://www.facebook.com"><FacebookIcon size={32} className={styles.icon} round/>| FaceBook</a></li>
                            <li><a href="https://www.twitter.com"><TwitterIcon size={32} className={styles.icon} round/>| Twitter</a></li>
                            <li><a href="https://www.linkedin.com"><LinkedinIcon size={32} className={styles.icon} round/>| LinkedIn</a></li>
                            <li><a href="https://www.telegram.com"><TelegramIcon size={32} className={styles.icon} round/>| Telegram</a></li>
                            <li><a href="https://mail.google.com"><EmailIcon size={32} className={styles.icon} round/>| Gmail</a></li>
                        </ul>
                    </ListItem>
                </List>
                </div>
                <span className={styles.hdash}>______________________________________________________________________________________________________________________</span>
                
                <div id='pitch'>
                    <h4 className={styles.miniheading}>Send me a message</h4>
                    <span className={styles.hdash}>______________________________________________________________________________________________________________________</span>
                    <p>Fill out the form below so I can know about your idea:</p>
                    <a href='https://docs.google.com/forms'><FakeButton>Fill the form</FakeButton></a>
                </div>
            </div>
        </div>
    )
}