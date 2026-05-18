import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {About} from './layout/sections/about/About.tsx';
import {Projects} from './layout/sections/projects/Projects.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx';
import {Contacts} from './layout/sections/contacts/Contacts.tsx';
import {Footer} from './layout/footer/Footer.tsx';

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <About />
            <Projects />
            <Skills />
            <Contacts />
            <Footer />
        </>
    )
}

export default App
