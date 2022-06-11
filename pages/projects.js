import styles from './projects.module.css'
import BigTitle from '../components/fonts/bigtitle'
import SubTitle from '../components/fonts/subtitle'
import List from '../components/lists/list'
import ListItem from '../components/lists/listitem'
import Para from '../components/fonts/para'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faGlobe, faImage, faMicrochip, faPen } from '@fortawesome/free-solid-svg-icons'
export default function Projects(){
    return(
        <div className={styles.bigcontainer}  id='bigconatainer'>
            <SubTitle><span style={{color:'#645d72'}}>My works</span></SubTitle>
            <BigTitle><span style={{color:'#171c33'}}>Learning never Stops. Check out some of my recent Interests</span></BigTitle>
            <List>
                {/* articles similar to projects section */}
                <ListItem>
                    <h2 className={styles.titles}> <FontAwesomeIcon icon={faImage} className={styles.icon}></FontAwesomeIcon> Image Processing</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
                <ListItem>
                    <h2 className={styles.titles}><FontAwesomeIcon icon={faCode} className={styles.icon}></FontAwesomeIcon> Programming</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <h2 className={styles.titles}><FontAwesomeIcon icon={faDatabase} className={styles.icon}></FontAwesomeIcon> Database Management</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
                <ListItem>
                    <h2 className={styles.titles}><FontAwesomeIcon icon={faGlobe} className={styles.icon}></FontAwesomeIcon> Web Development</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <h2 className={styles.titles}><FontAwesomeIcon icon={faPen} className={styles.icon}></FontAwesomeIcon> Content Writing</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
                <ListItem>
                    <h2 className={styles.titles}><FontAwesomeIcon icon={faMicrochip} className={styles.icon}></FontAwesomeIcon> Electronics</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                </ListItem>
            </List>
        </div>
    )
}