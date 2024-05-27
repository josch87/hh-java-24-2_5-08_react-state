import {ChangeEvent, useState} from "react";
import {response} from "../data/charactersData.ts";
import {CharacterType} from "../model/model.ts";
import CharacterCard from "../components/characterCard/CharacterCard.tsx";
import styled from "styled-components";

const StyledCharactersSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

const StyledMain = styled.main`
    margin: 2rem;
`

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
            <StyledMain>
                <h1>
                    All Characters
                </h1>
                <label htmlFor="searchByName">Name: </label>
                <input id="searchByName" type="text" placeholder="Type to search" onChange={handleOnChange}/>
                {characters.length === 0 && <p>No characters found</p>}
                {characters.length > 0 && <p>Number of characters: {characters.length}</p>}

                <StyledCharactersSection>
                    {characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </StyledMain>
        </>
    )
}