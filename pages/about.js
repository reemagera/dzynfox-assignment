import BigTitle from "../components/fonts/bigtitle";
import SubTitle from "../components/fonts/subtitle";
import List from "../components/lists/list";
import style from './about.module.css'
export default function About(){
    return(
        <div className={style.bigcontainer}>
            <div className={style.subcontainer}>
                <SubTitle>_______________</SubTitle>
                <SubTitle>Hello there</SubTitle>
                <BigTitle>This is About Me</BigTitle>
                <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
            </div>
            <List>
                <li></li>
            </List>
        </div>
    )
}