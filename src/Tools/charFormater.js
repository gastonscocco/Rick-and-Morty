
export function charFormater(character){
    return {
        id:       character.id,
        name:     character.name,
        origin:   character.origin.name,
        species:  character.species,
        status:   character.status,
        gender:   character.gender,
        episodes: character.episode.length,
        image:    character.image,
        url:      character.url
    }
}