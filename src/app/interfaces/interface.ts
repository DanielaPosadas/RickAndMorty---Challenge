export interface Results {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: null
    },
    results: []
}

export interface Characters {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
            name: string,
            url: string
            },
            location: {
                name: string,
                url: string
            },
            image: string,
            episode: [],
            url: string,
            created: string
}

export interface Espisodes {
            episode: []
}
