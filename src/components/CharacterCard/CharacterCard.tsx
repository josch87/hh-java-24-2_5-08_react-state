import {CharacterType} from "../../model/model.ts";
import {StyledArticle, StyledCharacterImage, StyledCharacterName} from "./CharacterCard.styled.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    character: CharacterType,
}


export default function CharacterCard({character}: Props) {
    const navigate = useNavigate();
    function navigateToDetails() {
        navigate("/characters/" + character.id);
    }

    return (
        <StyledArticle $status={character.status} onClick={navigateToDetails}>
            <StyledCharacterImage src={character.image} alt={character.name} draggable="false" />
            <StyledCharacterName>{character.name}</StyledCharacterName>
            {character.status}
            <span>
                {character.episode.length > 1 ? character.episode.length + " episodes" : character.episode.length + " episode"}
            </span>
        </StyledArticle>
    )
}