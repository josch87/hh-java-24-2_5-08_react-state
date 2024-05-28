import {useEffect} from "react";
import {response} from "../../data/charactersData.ts";
import {CharacterType} from "../../model/model.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";
import {f} from "vite/dist/node/types.d-aGj9QkWt";
import Main from "../templates/Main.tsx";

const StyledCharactersSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
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

type CharactersPageProps = {
    characters : CharacterType[],
    setCharacters: f,
    nameFilter: string,
    setNameFilter: f,
    statusFilter: string,
    setStatusFilter: f,
    onFilterByName: f,
    onFilterByStatus: f,
    onResetSearch: f,
}

export default function CharactersPage({characters, setCharacters, nameFilter, setNameFilter, statusFilter, setStatusFilter, onFilterByName, onFilterByStatus, onResetSearch}: CharactersPageProps) {
    useEffect(() => {
        const filteredCharacters = response.results
            .filter((character) => character.name.toLowerCase().includes(nameFilter))
            .filter((character) => statusFilter === "" || character.status === statusFilter);
        setCharacters(filteredCharacters);
    }, [nameFilter, statusFilter])

    return (
        <>
            <Main>
                <h1>
                    Rick and Morty Characters
                </h1>
                <StyledSearchArea>
                    <label htmlFor="searchByName">Name: </label>
                    <input id="searchByName" type="text" placeholder="Type to search" value={nameFilter}
                           onChange={onFilterByName}/>
                    <label htmlFor="searchByStatus">Status: </label>
                    <select id="searchByStatus" onChange={onFilterByStatus} value={statusFilter}>
                        <option value="">-- Select a status --</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <StyledResetButton type="reset" onClick={onResetSearch}>Reset</StyledResetButton>
                </StyledSearchArea>

                {characters.length === 0 && <p>No characters found</p>}
                {characters.length > 0 && <p>Number of characters: {characters.length}</p>}

                <StyledCharactersSection>
                    {characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </Main>
        </>
    )
}