export type StatusEnum = "Alive" | "Dead" | "unknown";

export type CharacterType = {
    id: number,
    name: string,
    image: string,
    status: StatusEnum,
    episode: string[],
    species: string,
    location: {
        name: string,
        url: string,
    }
}

export type CharacterDTOType = {
    name: string,
    status: StatusEnum | "",
    species: string,
}

export type NavigationItemType = {
    title: string,
    link: string,
    sort: number,
}