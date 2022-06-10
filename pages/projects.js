import styles from './projects.module.css'
import BigTitle from '../components/fonts/bigtitle'
import SubTitle from '../components/fonts/subtitle'
import List from '../components/lists/list'
import ListItem from '../components/lists/listitem'
import Para from '../components/fonts/para'
export default function Projects(){
    return(
        <div className={styles.bigcontainer}  id='bigconatainer'>
            <SubTitle><span style={{color:'#645d72'}}>My works</span></SubTitle>
            <BigTitle><span style={{color:'#171c33'}}>Learning never Stops. Check out some of my recent Interests</span></BigTitle>
            <List>
                <ListItem>
                    <h2 className={styles.titles}>Image Processing</h2>
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
                    <h2 className={styles.titles}>Image Processing</h2>
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
                    <h2 className={styles.titles}>Image Processing</h2>
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
                    <h2 className={styles.titles}>Image Processing</h2>
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
                    <h2 className={styles.titles}>Image Processing</h2>
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
                    <h2 className={styles.titles}>Image Processing</h2>
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