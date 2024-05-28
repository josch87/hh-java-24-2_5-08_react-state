import {Link, useParams} from "react-router-dom";
import {CharacterType} from "../../model/model.ts";
import styled from "styled-components";
import Main from "../templates/Main.tsx";

type CharacterDetailsPageProps = {
    characters: CharacterType[]
};

const StyledCharacterDetailsCard = styled.article`
    display: flex;
`;


export default function CharacterDetailsPage({characters}: CharacterDetailsPageProps) {

    const {id} = useParams();
    const character = characters.find((character) => character.id === Number(id));

    if (!character) {
        return (
            <p>No character found.</p>
        )
    }

    return (
        <Main>
            <Link to={"/characters"}>&larr; All Characters</Link>

            <StyledCharacterDetailsCard>
                <img src={character.image} alt={character.name}/>
                <div>
                    <h2>{character.name}</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>Status:</td>
                            <td>{character.status}</td>
                        </tr>
                        <tr>
                            <td>Species:</td>
                            <td>{character.species}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{character.location.name}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </StyledCharacterDetailsCard>

        </Main>
    )
}