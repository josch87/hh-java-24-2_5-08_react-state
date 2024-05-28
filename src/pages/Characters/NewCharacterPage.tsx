import Main from "../templates/Main.tsx";
import {
    ChangeEvent,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState
} from "react";
import {NewCharacterDTOType, CharacterType} from "../../model/model.ts";
import NewCharacterForm from "../../components/NewCharacterForm/NewCharacterForm.tsx";
import {useNavigate} from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import {mapNewCharacterDTOToCharacter} from "../../model/characterMapper.ts";

type NewCharacterPageProps = {
    characters: CharacterType[],
    setCharacters: Dispatch<SetStateAction<CharacterType[]>>,
}

export default function NewCharacterPage({characters, setCharacters}: NewCharacterPageProps) {
    const navigate = useNavigate();

    const initialCharacter: NewCharacterDTOType = {
        name: "",
        species: "",
        status: "",
    }

    const [newCharacter, setNewCharacter] = useState<NewCharacterDTOType>(initialCharacter);

    function onUserInput(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    function onSaveCharacter(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (newCharacter.status === "") {
            throw new Error("Status cannot be empty");
        }

        const characterToSave = mapNewCharacterDTOToCharacter(newCharacter);
        characterToSave.id = characters.length + 1;
        setCharacters([...characters, characterToSave])
        setNewCharacter(initialCharacter);

        navigate("/characters/" + characterToSave.id)
    }

    const characterInPreviewDTO = {...newCharacter}
    if (characterInPreviewDTO.status === "") {
        characterInPreviewDTO.status = "unknown"
    }
    const characterInPreview: CharacterType = mapNewCharacterDTOToCharacter(characterInPreviewDTO);



    return (
        <Main title={"Create new character"}>
            <NewCharacterForm newCharacter={newCharacter} onSaveCharacter={onSaveCharacter} onUserInput={onUserInput}/>
            <CharacterCard character={characterInPreview} />
        </Main>
    )
}