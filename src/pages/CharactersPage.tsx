import {ChangeEvent, useEffect, useState} from "react";
import {response} from "../data/charactersData.ts";
import {CharacterType} from "../model/model.ts";
import CharacterCard from "../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";

const StyledCharactersSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
`

const StyledMain = styled.main`
    margin: 2rem;
`

const StyledSearchArea = styled.div`
    background-color: lightblue;
    display: inline-block;
    height: 3rem;
    padding: 8px;
    border-radius: 10px;
    margin-bottom: 5px;
`;

const StyledResetButton = styled.button`
    cursor: pointer;
    border: 1px solid lightgray;
    background: white;
    
    &:active {
        border: 1px solid white;
        background: lightblue;
    }
    
`;

export default function CharactersPage() {
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

    useEffect(() => {
        const filteredCharacters = response.results
            .filter((character) => character.name.toLowerCase().includes(nameFilter))
            .filter((character) => statusFilter === "" || character.status === statusFilter);
        setCharacters(filteredCharacters);
    }, [nameFilter, statusFilter])

    return (
        <>
            <StyledMain>
                <h1>
                    Rick and Morty Characters
                </h1>
                <StyledSearchArea>
                    <label htmlFor="searchByName">Name: </label>
                    <input id="searchByName" type="text" placeholder="Type to search" value={nameFilter}
                           onChange={handleFilterByName}/>
                    <label htmlFor="searchByStatus">Status: </label>
                    <select id="searchByStatus" onChange={handleFilterByStatus} value={statusFilter}>
                        <option value="">-- Select a status --</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <StyledResetButton type="reset" onClick={handleResetSearch}>Reset</StyledResetButton>
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