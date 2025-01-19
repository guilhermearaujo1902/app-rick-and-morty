import { createSlice } from "@reduxjs/toolkit";

import Character from "@/types/character";

const characterSlice = createSlice({
    name: "character",
    initialState: {
        characters: [] as Character[],
        favoriteCount: 0,
    },
    reducers: {
        setCharacters(state, action) {
            state.characters = action.payload.map((character: any) => {
                const existingCharacter = state.characters.find(
                    (char) => char.id === character.id
                );
                return {
                    ...character,
                    isFavorite: existingCharacter ? existingCharacter.isFavorite : false,
                };
            });
        },
        toggleFavorite(state, action) {
            const character = state.characters.find(
                (char) => char.id === action.payload
            );
            if (character) {
                if (character.isFavorite) {
                    state.favoriteCount --;
                } else {
                    state.favoriteCount ++;
                }
                character.isFavorite = !character.isFavorite;
            }
        },
    },
});

export const { setCharacters, toggleFavorite } = characterSlice.actions;

export default characterSlice.reducer;
