import './App.css'
import CharactersPage from "./pages/Characters/CharactersPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/Header/Header.tsx";
import CharacterDetailsPage from "./pages/Characters/CharacterDetailsPage.tsx";
import {useState} from "react";
import {CharacterType} from "./model/model.ts";
import {response} from "./data/charactersData.ts";
import NewCharacterPage from "./pages/Characters/NewCharacterPage.tsx";

function App() {

    const [characters, setCharacters] = useState<CharacterType[]>(response.results);

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/characters" element={
                    <CharactersPage
                        characters={characters}
                    />}/>
                <Route path="/characters/:id" element={<CharacterDetailsPage characters={characters}/>}/>
                <Route path="/characters/new" element={<NewCharacterPage characters={characters} setCharacters={setCharacters}/>}/>
            </Routes>
        </>
    )
}

export default App
