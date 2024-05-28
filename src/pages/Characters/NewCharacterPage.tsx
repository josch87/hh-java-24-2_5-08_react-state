import Main from "../templates/Main.tsx";
import {
    ChangeEvent,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState
} from "react";
import {CharacterDTOType, CharacterType} from "../../model/model.ts";

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

    function onUserInput(event: ChangeEvent<HTMLInputElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }


    function onSaveCharacter(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const characterToSave: CharacterType = {
            id: characters.length + 1,
            image: "",
            episode: [],
            location: {name:"", url: ""},
            ...newCharacter
        }
        setCharacters([...characters, characterToSave])
        setNewCharacter(initialCharacter);
    }

    return (
        <Main>
            <h2>Create new character</h2>
            <form onSubmit={onSaveCharacter}>
                <div>
                    <label form={"name"}>Name</label>
                    <input type={"text"} id={"name"} name={"name"} onChange={onUserInput} value={newCharacter.name}/>
                </div>
                <div>
                    <label form={"status"}>Status</label>
                    <input type={"text"} id={"status"} name={"status"} onChange={onUserInput} value={newCharacter.status} />
                </div>
                <div>
                    <label form={"species"}>Species</label>
                    <input type={"text"} id={"species"} name={"species"} onChange={onUserInput} value={newCharacter.species}/>
                </div>
                <button type={"submit"}>Save</button>
            </form>
        </Main>
    )
}