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

const StyledSearchArea = styled.div`
    background-color: lightblue;
    display: inline-block;
    height: 3rem;
    padding: 8px
`;

export default function CharactersPage() {
    const [characters, setCharacters] = useState<CharacterType[]>(response.results);

    function handleFilterByName(event: ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const filteredCharactersByName = response.results
            .filter((character) => character.name.toLowerCase().includes(inputValue.toLowerCase()));
        setCharacters(filteredCharactersByName);
    }

    function handleFilterByStatus(event: ChangeEvent<HTMLSelectElement>) {
        const selectedValue: string = event.target.value;
        if (selectedValue === "") {
            setCharacters(response.results)
        } else {
            const filteredCharactersByStatus = response.results
                .filter((character) => character.status === selectedValue);
            setCharacters(filteredCharactersByStatus)
        }
    }

    return (
        <>
            <StyledMain>
                <h1>
                    All Characters
                </h1>
                <StyledSearchArea>
                    <label htmlFor="searchByName">Name: </label>
                    <input id="searchByName" type="text" placeholder="Type to search"
                           onChange={handleFilterByName}/>
                    <label htmlFor="searchByStatus">Status: </label>
                    <select id="searchByStatus" onChange={handleFilterByStatus}>
                        <option value="">-- Select a status --</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>


                </StyledSearchArea>

                {characters.length === 0 && <p>No characters found</p>}
                {characters.length > 0 && <p>Number of characters: {characters.length}</p>}

                <StyledCharactersSection>
                    {characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </StyledMain>
        </>
    )
}