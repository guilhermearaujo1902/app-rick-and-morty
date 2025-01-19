import Character from "@/types/character";

const fetchCharacters = (genericCharacterList: any[]): Character[] => {
    return genericCharacterList.map((character: any) => {
        return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
            isFavorite: character.isFavorite
        };
    });
};

export { fetchCharacters };
