import {NewCharacterDTOType} from "../../model/model.ts";
import {ChangeEventHandler, FormEventHandler} from "react";

type NewCharacterFormProps = {
    newCharacter: NewCharacterDTOType,
    onSaveCharacter: FormEventHandler<HTMLFormElement>,
    onUserInput: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
}

export default function NewCharacterForm({newCharacter, onSaveCharacter, onUserInput }: NewCharacterFormProps) {
    return (
        <form onSubmit={onSaveCharacter}>
            <div>
                <label htmlFor={"name"}>Name</label>
                <input type={"text"} id={"name"} name={"name"} onChange={onUserInput} value={newCharacter.name}
                       required/>
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
    )
}