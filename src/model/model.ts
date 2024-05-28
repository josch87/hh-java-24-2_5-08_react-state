export type StatusEnum = "Alive" | "Dead" | "unknown";
type GenderEnum = "Female" | "Male" | "Genderless" | "unknown";

export type CharacterType = {
    id: number,
    name: string,
    status: StatusEnum,
    species: string,
    gender: GenderEnum,
    location: {
        name: string,
        url: string,
    },
    image: string,
    episode: string[],
}

export type NewCharacterDTOType = {
    name: string,
    status: StatusEnum | "",
    species: string,
}

export type NavigationItemType = {
    title: string,
    link: string,
    sort: number,
}