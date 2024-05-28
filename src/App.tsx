import './App.css'
import CharactersPage from "./pages/CharactersPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/Header/Header.tsx";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/characters" element={<CharactersPage/>}/>
            </Routes>
        </>
    )
}

export default App
