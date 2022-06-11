import Head from "next/head"
import NavBar from "../components/navigation"
import WelcomeMsg from "../components/welcome"
import About from "./about"
import Contact from "./contact"
import MyProject from "./project"
import Projects from "./projects"
export default function Home(){
    return(
        <>
            <Head>
                <title>My Landing Page</title>
                
            </Head>
            <NavBar/>
            <WelcomeMsg/>
            <div id="about">
                <About/>
            </div>
            <div id="project"><MyProject></MyProject></div>
            <div id="projects"><Projects></Projects></div>
            <div id="contact"><Contact/></div>
            <h1>Work In progress</h1>
        </>
    )
}