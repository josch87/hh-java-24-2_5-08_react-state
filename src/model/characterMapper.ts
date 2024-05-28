import {CharacterType, NewCharacterDTOType, StatusEnum} from "./model.ts";
import {isStatusEnum} from "./typeGuard.ts";

export function mapNewCharacterDTOToCharacter(newCharacter: NewCharacterDTOType) {
    if (!isStatusEnum(newCharacter.status)) {
        throw new Error("Invalid status");
    }

    const character : CharacterType = {
        id: -1,
        name: newCharacter.name,
        status: newCharacter.status as StatusEnum,
        species: newCharacter.species,
        gender: "unknown",
        location: {
            name: "",
            url: "",
        },
        image: "",
        episode: [],
    }

    return character;

}