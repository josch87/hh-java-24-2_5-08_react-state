export type CharacterType = {
    id: number,
    name: string,
    image: string,
    status: string,
    episode: string[],
    species: string,
    location: {
        name: string,
        url: string,
    }
}