// import Link from "next/link"
import NavBar from "../components/navigation"
import WelcomeMsg from "../components/welcome"
import About from "./about"
export default function Home(){
    return(
        <>
            <NavBar/>
            <WelcomeMsg/>
            <About/>
            <h1>Work In progress</h1>
        </>
    )
}