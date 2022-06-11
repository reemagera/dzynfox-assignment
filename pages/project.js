import FakeButton from '../components/fakebuttons/fakebutton'
import BigTitle from '../components/fonts/bigtitle'
import SubTitle from '../components/fonts/subtitle'
import List from '../components/lists/list'
import ListItem from '../components/lists/listitem'
import Para from '../components/fonts/para'
import styles from './project.module.css'
import Link from 'next/link'
export default function MyProject(){
    return(
        <div className={styles.bigcontainer}>
            <SubTitle>My Projects</SubTitle>
            <BigTitle>Here are some of my recent projects</BigTitle>
            <span className={styles.dash}>______________________________________________________________________________________________________________________________________________________________________________________________</span>
            <ListItem>
                <span className={styles.mystyle}>
                    <h2 className={styles.titles}>Machine Learning</h2>
                    <Para>
                        <span className={styles.para}>
                        Some random things about Image Processing.Image processing is the process of transforming an image into a 
                        digital form and performing certain operations to get some useful information from it. The image 
                        processing system usually treats all images as 2D signals when applying certain predetermined signal 
                        processing methods. 
                        Visualization - Find objects that are not visible in the image
                        </span>
                    </Para>
                    <a href='https://www.google.com'><FakeButton>Learn more</FakeButton></a>
                    {/* Substitue with */}
                </span>
            </ListItem>
            <span className={styles.hdash}>___________________________________________________________________________________________________________________________________________________________________________</span>
            <ListItem>
                <span className={styles.mystyle}>
                <h2 className={styles.titles}>FPGA Boards</h2>
                <Para>
                    <span className={styles.para}>
                    Some random things about Image Processing.Image processing is the process of transforming an image into a 
                    digital form and performing certain operations to get some useful information from it. The image 
                    processing system usually treats all images as 2D signals when applying certain predetermined signal 
                    processing methods. 
                    Visualization - Find objects that are not visible in the image
                    </span>
                </Para>
                <a href='https://www.google.com'><FakeButton>Learn more</FakeButton></a>
                </span>
            </ListItem>
            <span className={styles.hdash}>___________________________________________________________________________________________________________________________________________________________________________</span>
            <ListItem>
            <span className={styles.mystyle}>
                <h2 className={styles.titles}>Embedded Systems</h2>
                <Para>
                    <span className={styles.para}>
                    Some random things about Image Processing.Image processing is the process of transforming an image into a 
                    digital form and performing certain operations to get some useful information from it. The image 
                    processing system usually treats all images as 2D signals when applying certain predetermined signal 
                    processing methods. 
                    Visualization - Find objects that are not visible in the image
                    </span>
                </Para>
                <a href='https://www.google.com'><FakeButton>Learn more</FakeButton></a>
                </span>
            </ListItem>
            <span className={styles.hdash}>___________________________________________________________________________________________________________________________________________________________________________</span>
            <ListItem>
            <span className={styles.mystyle}>
                <h2 className={styles.titles}>Image Pre-processing</h2>
                <Para>
                    <span className={styles.para}>
                    Some random things about Image Processing.Image processing is the process of transforming an image into a 
                    digital form and performing certain operations to get some useful information from it. The image 
                    processing system usually treats all images as 2D signals when applying certain predetermined signal 
                    processing methods. 
                    Visualization - Find objects that are not visible in the image
                    </span>
                </Para>
                <a href='https://www.google.com'><FakeButton>Learn more</FakeButton></a>
                </span>
            </ListItem>
        </div>
    )
}