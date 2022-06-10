import NavBar from "../components/navigation"
import WelcomeMsg from "../components/welcome"
import About from "./about"
export default function Home(){
    return(
        <>
            <NavBar/>
            <WelcomeMsg/>
            <div id="about">
                <About/>
            </div>
            <h1>Work In progress</h1>
        </>
    )
}