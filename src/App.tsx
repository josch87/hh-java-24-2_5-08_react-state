import './App.css'
import CharactersPage from "./pages/CharactersPage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<CharactersPage/>}/>
            </Routes>
        </>
    )
}

export default App
