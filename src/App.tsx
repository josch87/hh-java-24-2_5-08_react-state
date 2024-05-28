import './App.css'
import CharactersPage from "./pages/Characters/CharactersPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/Header/Header.tsx";
import CharacterDetailsPage from "./pages/Characters/CharacterDetailsPage.tsx";
import {ChangeEvent, useState} from "react";
import {CharacterType} from "./model/model.ts";
import {response} from "./data/charactersData.ts";

function App() {

    const [characters, setCharacters] = useState<CharacterType[]>(response.results);
    const [nameFilter, setNameFilter] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<string>("");

    function handleFilterByName(event: ChangeEvent<HTMLInputElement>) {
        setNameFilter(event.target.value.toLowerCase());
    }

    function handleFilterByStatus(event: ChangeEvent<HTMLSelectElement>) {
        setStatusFilter((event.target.value));
    }

    function handleResetSearch() {
        setNameFilter("")
        setStatusFilter("")
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/characters" element={
                    <CharactersPage
                        characters={characters}
                        setCharacters={setCharacters}
                        nameFilter={nameFilter}
                        setNameFilter={setNameFilter}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        onFilterByName={handleFilterByName}
                        onFilterByStatus={handleFilterByStatus}
                        onResetSearch={handleResetSearch}
                    />}/>
                <Route path="/characters/:id" element={<CharacterDetailsPage characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
