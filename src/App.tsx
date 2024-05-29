import './App.css'
import CharactersPage from "./pages/Characters/CharactersPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/Header/Header.tsx";
import CharacterDetailsPage from "./pages/Characters/CharacterDetailsPage.tsx";
import {useEffect, useState} from "react";
import {CharacterType} from "./model/model.ts";
import NewCharacterPage from "./pages/Characters/NewCharacterPage.tsx";
import axios from "axios";
import LocationsPage from "./pages/Locations/LocationsPage.tsx";

function App() {

    const [characters, setCharacters] = useState<CharacterType[]>([]);

    useEffect(() => {
        loadAllCharacters();
    }, []);

    function loadAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

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
                <Route path="/locations" element={<LocationsPage />}/>
            </Routes>
        </>
    )
}

export default App
