import './App.css';
import Header from "./Header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Works />
        </div>
    );
}

export default App;
