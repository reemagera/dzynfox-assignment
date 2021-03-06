import BigTitle from "../components/fonts/bigtitle";
import Para from "../components/fonts/para";
import SubTitle from "../components/fonts/subtitle";
import List from "../components/lists/list";
import ListItem from "../components/lists/listitem";
import style from './about.module.css'
// import Link from "next/link"
export default function About(){
    return(
        <div className={style.bigcontainer}>
            <div className={style.subcontainer}>
                <SubTitle>Hello there</SubTitle>
                {/* intro */}
                <BigTitle>I am Reema Gera</BigTitle>
                <span className={style.dash}>___________________________________________________</span>
                {/* brief para about the person or organization. Edit the dummy text */}
                <Para>
                    <span style={{color:'lightgray'}}>
                    Disclaimer: All the data that you see is not completely true. This is just for a demonstration purpose. This page could be used for any group
                    or individual as a landing page.<br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                    <br/>
                    Some Random Statistics to catch attention
                    </span>
                </Para>
            </div>
            {/* List of achievements or specialities in numbers. Edit the text or add more quantities or lists */}
            {/* can create multiple lists */}
            <List>
                <ListItem>
                    <span className={style.num}>427</span>
                    <span className={style.textli}>Connections</span>
                </ListItem>
                <span className={style.columndash}></span>
                <ListItem>
                    <span className={style.num}>132</span>
                    <span className={style.textli}>Credits done</span>
                </ListItem>
                <span className={style.columndash}></span>
                <ListItem>
                    <span className={style.num}>6</span>
                    <span className={style.textli}>Projects</span>
                </ListItem>
                <span className={style.columndash}></span>
                <ListItem>
                    <span className={style.num}>8.5</span>
                    <span className={style.textli}>CGPA</span>
                </ListItem>
                <span className={style.columndash}></span>
                <ListItem>
                    <span className={style.num}>40</span>
                    <span className={style.textli}>Subjects</span>
                </ListItem>
            </List>  
        </div>
    )
}