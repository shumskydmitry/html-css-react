import './App.css'
import {GlobalStyle} from "./styles/GlobalStyle";
import {Header} from "./sections/header/Header";
import {Hero} from "./sections/hero/Hero";
import {Skills} from "./sections/skills/Skills";
import {Projects} from "./sections/projects/Projects";
import {Contacts} from "./sections/contacts/Contacts";
import {Footer} from "./sections/footer/Footer";

function App() {
    return (
        <>
            <GlobalStyle/>

            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default App