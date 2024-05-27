import {CharacterType} from "../../model/model.ts";

type Props = {
    character: CharacterType,
}

export default function CharacterCard({character}: Props) {
    return (
        <article>
            <h2>{character.name}</h2>
        </article>
    )
}