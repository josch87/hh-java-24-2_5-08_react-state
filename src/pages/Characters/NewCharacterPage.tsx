import Main from "../templates/Main.tsx";
import {
    ChangeEvent,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState
} from "react";
import {CharacterDTOType, CharacterType, StatusEnum} from "../../model/model.ts";
import {isStatusEnum} from "../../model/typeGuard.ts";
import NewCharacterForm from "../../components/NewCharacterForm/NewCharacterForm.tsx";
import {useNavigate} from "react-router-dom";

type NewCharacterPageProps = {
    characters: CharacterType[],
    setCharacters: Dispatch<SetStateAction<CharacterType[]>>,
}

export default function NewCharacterPage({characters, setCharacters}: NewCharacterPageProps) {
    const navigate = useNavigate();

    const initialCharacter: CharacterDTOType = {
        name: "",
        species: "",
        status: "",
    }

    const [newCharacter, setNewCharacter] = useState<CharacterDTOType>(initialCharacter);

    function onUserInput(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    function onSaveCharacter(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (newCharacter.status === "") {
            throw new Error("Status cannot be empty");
        }

        if (!isStatusEnum(newCharacter.status)) {
            throw new Error("Invalid status");
        }

        const characterToSave: CharacterType = {
            id: characters.length + 1,
            image: "",
            episode: [],
            location: {name: "", url: ""},
            ...newCharacter,
            status: newCharacter.status as StatusEnum,
        }
        setCharacters([...characters, characterToSave])
        setNewCharacter(initialCharacter);

        navigate("/characters/" + characterToSave.id)
    }

    return (
        <Main title={"Create new character"}>
            <NewCharacterForm newCharacter={newCharacter} onSaveCharacter={onSaveCharacter} onUserInput={onUserInput}/>
        </Main>
    )
}