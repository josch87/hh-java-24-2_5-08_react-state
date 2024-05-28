import {ChangeEvent, useState} from "react";
import {CharacterType} from "../model/model.ts";

export default function useFilter(characters: CharacterType[]) {

    const [nameFilter, setNameFilter] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<string>("");

    function handleFilterByName(event: ChangeEvent<HTMLInputElement>) {
        setNameFilter(event.target.value.toLowerCase());
    }

    function handleFilterByStatus(event: ChangeEvent<HTMLSelectElement>) {
        setStatusFilter((event.target.value));
    }

    function handleResetSearch() {
        setNameFilter("")
        setStatusFilter("")
    }

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(nameFilter))
        .filter((character) => statusFilter === "" || character.status === statusFilter);

    const areFilteredCharactersZero = filteredCharacters.length === 0;



    return {handleFilterByName, handleFilterByStatus, handleResetSearch, filteredCharacters, nameFilter, statusFilter, areFilteredCharactersZero}
}