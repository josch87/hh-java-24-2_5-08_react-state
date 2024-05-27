import {ChangeEvent, useState} from "react";
import {response} from "../data/charactersData.ts";
import {CharacterType} from "../model/model.ts";
import CharacterCard from "../components/characterCard/CharacterCard.tsx";


export default function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>(response.results);
function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const filteredCharactersByName = response.results
        .filter((character) => character.name.toLowerCase().includes(inputValue.toLowerCase()));
    setCharacters(filteredCharactersByName);
}
    return (
        <>
            <main>
                <h1>
                    All Characters
                </h1>
                <label htmlFor="searchByName">Name: </label>
                <input id="searchByName" type="text" placeholder="Type to search" onChange={handleOnChange}/>
                {characters.length === 0 && <p>No characters found</p>}
                {characters.length > 0 && <p>Number of characters: {characters.length}</p>}
                {characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
            </main>
        </>
    )
}