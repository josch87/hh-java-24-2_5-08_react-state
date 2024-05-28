import {CharacterType} from "../../model/model.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";
import Main from "../templates/Main.tsx";
import useFilter from "../../hooks/useFilter.ts";

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

    const {
        handleFilterByName,
        handleFilterByStatus,
        handleResetSearch,
        filteredCharacters,
        nameFilter,
        statusFilter,
        areFilteredCharactersZero
    } = useFilter(characters)

    return (
        <>
            <Main title={"Characters"}>
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

                {areFilteredCharactersZero ? <p>No characters found</p> :
                    <p>Number of characters: {filteredCharacters.length}</p>}

                <StyledCharactersSection>
                    {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </Main>
        </>
    )
}