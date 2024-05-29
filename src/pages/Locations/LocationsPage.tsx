import Main from "../templates/Main.tsx";
import {useEffect, useState} from "react";
import {LocationType} from "../../model/model.ts";
import axios from "axios";

export default function LocationsPage() {

    const [locations, setLocations] = useState<LocationType[]>([]);

    useEffect(() => {
        getAllLocations();
    }, []);

    function getAllLocations() {
        axios.get("https://rickandmortyapi.com/api/location/")
            .then((response) =>{
                setLocations(response.data.results);
        })
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <Main title="Locations">
            {locations.map(location => <p>{location.name + " (" + location.type + ")"}</p>)}
        </Main>
    )
}