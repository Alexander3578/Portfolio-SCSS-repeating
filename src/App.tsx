import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {About} from './layout/sections/about/About.tsx';
import {Projects} from './layout/sections/projects/Projects.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx';

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <About />
            <Projects />
            <Skills />
        </>
    )
}

export default App
