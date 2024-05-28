import {CharacterType} from "../../model/model.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";
import Main from "../templates/Main.tsx";
import useFilter from "../../hooks/useFilter.ts";
import CharacterSearch from "../../components/CharacterSearch/CharacterSearch.tsx";

const StyledCharactersSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
`

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
                <CharacterSearch
                    handleFilterByName={handleFilterByName}
                    handleFilterByStatus={handleFilterByStatus}
                    statusFilter={statusFilter}
                    handleResetSearch={handleResetSearch}
                    nameFilter={nameFilter}
                />

                {areFilteredCharactersZero ? <p>No characters found</p> :
                    <p>Number of characters: {filteredCharacters.length}</p>}

                <StyledCharactersSection>
                    {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </Main>
        </>
    )
}