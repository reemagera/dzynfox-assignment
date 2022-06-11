import Head from "next/head"
import NavBar from "../components/navigation"
import WelcomeMsg from "../components/welcome"
import About from "./about"
import Contact from "./contact"
import FootBanner from "./footbanner"
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
            {/* About Page */}
            <div id="project"><MyProject></MyProject></div>
            {/* Section to display list of projects or recent works*/}
            <div id="projects"><Projects></Projects></div>
            {/* Section to display list of interests and any other articles */}
            <div id="contact"><Contact/></div>
            {/* Contact Info */}
            <FootBanner></FootBanner>
            {/* Disclaimer or any footnotes / copyright info */}
            {/* <h1>Work In progress</h1> */}
        </>
    )
}