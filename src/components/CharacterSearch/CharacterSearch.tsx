import styled from "styled-components";
import {ChangeEventHandler, MouseEventHandler} from "react";

type CharacterSearchType = {
    nameFilter: string,
    handleFilterByName: ChangeEventHandler<HTMLInputElement>,
    handleFilterByStatus: ChangeEventHandler<HTMLSelectElement>,
    statusFilter: string,
    handleResetSearch: MouseEventHandler<HTMLButtonElement>,
}

const StyledSearchArea = styled.div`
    background-color: lightblue;
    display: inline-block;
    height: 3rem;
    padding: 8px;
    border-radius: 10px;
    margin-bottom: 5px;
`;

const StyledResetButton = styled.button`
    cursor: pointer;
    border: 1px solid lightgray;
    background: white;

    &:active {
        border: 1px solid white;
        background: lightblue;
    }
`;

export default function CharacterSearch({nameFilter, handleFilterByName, handleFilterByStatus, statusFilter, handleResetSearch}: CharacterSearchType) {

    return (
        <StyledSearchArea>
            <label htmlFor="searchByName">Name: </label>
            <input id="searchByName" type="text" placeholder="Type to search" value={nameFilter}
                   onChange={handleFilterByName}/>
            <label htmlFor="searchByStatus">Status: </label>
            <select id="searchByStatus" onChange={handleFilterByStatus} value={statusFilter}>
                <option value="">-- Select a status --</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <StyledResetButton type="reset" onClick={handleResetSearch}>Reset</StyledResetButton>
        </StyledSearchArea>
    )
}