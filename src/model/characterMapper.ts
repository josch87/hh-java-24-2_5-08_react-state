import {CharacterType, NewCharacterDTOType, StatusEnum} from "./model.ts";
import {isStatusEnum} from "./typeGuard.ts";

export function mapNewCharacterDTOToCharacter(newCharacter: NewCharacterDTOType) {
    if (!isStatusEnum(newCharacter.status)) {
        throw new Error("Invalid status");
    }

    const character : CharacterType = {
        id: -1,
        name: newCharacter.name,
        image: "",
        status: newCharacter.status as StatusEnum,
        episode: [],
        species: newCharacter.species,
        location: {
            name: "",
            url: "",
        },
    }

    return character;

}