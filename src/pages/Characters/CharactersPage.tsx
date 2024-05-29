import {CharacterType} from "../../model/model.ts";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import styled from "styled-components";
import Main from "../templates/Main.tsx";
import useFilter from "../../hooks/useFilter.ts";
import CharacterSearch from "../../components/CharacterSearch/CharacterSearch.tsx";
import {Link} from "react-router-dom";

const StyledCharactersSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
`

type CharactersPageProps = {
    characters: CharacterType[],
}

const StyledLink = styled(Link)`
    color: inherit;
    background-color: white;
    text-decoration: none;
    border: 1px solid black;
    padding: 10px 20px;

    &:hover {
        background-color: #ecebeb;
    }
`;

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function CharactersPage({characters}: CharactersPageProps) {

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
                <StyledHeaderContainer>
                    <CharacterSearch
                        handleFilterByName={handleFilterByName}
                        handleFilterByStatus={handleFilterByStatus}
                        statusFilter={statusFilter}
                        handleResetSearch={handleResetSearch}
                        nameFilter={nameFilter}
                    />
                    <div>
                        <StyledLink to={"/characters/new"}>New character</StyledLink>
                    </div>
                </StyledHeaderContainer>

                {areFilteredCharactersZero ? <p>No characters found</p> :
                    <p>Number of characters: {filteredCharacters.length}</p>}

                <StyledCharactersSection>
                    {filteredCharacters.map((character) => <CharacterCard character={character} key={character.id}/>)}
                </StyledCharactersSection>
            </Main>
        </>
    )
}