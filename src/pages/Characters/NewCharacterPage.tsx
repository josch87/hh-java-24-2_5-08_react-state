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

type NewCharacterPageProps = {
    characters: CharacterType[],
    setCharacters: Dispatch<SetStateAction<CharacterType[]>>,
}

export default function NewCharacterPage({characters, setCharacters}: NewCharacterPageProps) {

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

        if (newCharacter.status ==="") {
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
    }

    return (
        <Main title={"Create new character"}>
            <form onSubmit={onSaveCharacter}>
                <div>
                    <label htmlFor={"name"}>Name</label>
                    <input type={"text"} id={"name"} name={"name"} onChange={onUserInput} value={newCharacter.name} required/>
                </div>
                <div>
                    <label htmlFor={"status"}>Status</label>
                    <select id={"status"} name={"status"} onChange={onUserInput} value={newCharacter.status} required>
                        <option value={""}>-- Select a status</option>
                        <option value={"Alive"}>Alive</option>
                        <option value={"Dead"}>Dead</option>
                        <option value={"unknown"}>Unknown</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={"species"}>Species</label>
                    <input type={"text"} id={"species"} name={"species"} onChange={onUserInput}
                           value={newCharacter.species}/>
                </div>
                <button type={"submit"}>Save</button>
            </form>
        </Main>
    )
}