import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import {
    CharacterContainer,
    CharacterGrid,
    CharacterNotFound,
} from "@/components";
import Character from "@/types/character";

const FavoriteCharacterContainer = () => {
    const characters = useSelector(
        (state: RootState) => state.charactersData.characters
    );

    const favoriteCharacters: Character[] = characters.filter(
        (character) => character.isFavorite
    );

    return (
        <CharacterContainer>
            <div className="flex justify-between items-center ">
                <div>
                    <h1>FAVORITOS</h1>
                </div>
            </div>
            {!favoriteCharacters.length ? (
                <CharacterNotFound />
            ) : (
                <CharacterGrid characters={favoriteCharacters} />
            )}
        </CharacterContainer>
    );
};

export default FavoriteCharacterContainer;
