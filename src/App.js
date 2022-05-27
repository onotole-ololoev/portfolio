import './App.css';
import Header from "./Header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Works />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
