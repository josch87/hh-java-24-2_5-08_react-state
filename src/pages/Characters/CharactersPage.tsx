import {ChangeEvent, useState} from "react";
import {CharacterType} from "../../model/model.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";
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
    characters: CharacterType[],
}

export default function CharactersPage({characters,}: CharactersPageProps) {

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

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(nameFilter))
        .filter((character) => statusFilter === "" || character.status === statusFilter);


    return (
        <>
            <Main>
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

                {filteredCharacters.length === 0 && <p>No characters found</p>}
                {filteredCharacters.length > 0 && <p>Number of characters: {characters.length}</p>}

                <StyledCharactersSection>
                    {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </Main>
        </>
    )
}