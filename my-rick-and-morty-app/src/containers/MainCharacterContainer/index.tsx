import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQueryCharacters } from "@/hooks/useQueryCharacters";
import { AppDispatch, RootState } from "@/store/store";
import { setCharacters } from "@/features";
import {
    CharacterContainer,
    CharacterGrid,
    CharacterNotFound,
} from "@/components";
import { fetchCharacters } from "@/helpers/fetchCharacters";

const MainCharacterContainer = () => {
    const { data, error } = useQueryCharacters();
    const dispatch = useDispatch<AppDispatch>();

    const characters = useSelector(
        (state: RootState) => state.charactersData.characters
    );

    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (data) {
            const fetchedCharacters = fetchCharacters(data.results);
            dispatch(setCharacters(fetchedCharacters));
        }
    }, [data, dispatch]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <CharacterContainer>
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-6/12">
                    <h1>INÍCIO</h1>
                </div>
                <div className="w-full lg:w-6/12 flex">
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" "
                            className="txt w-full"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <label htmlFor="name" className={searchTerm ? 'floatingLabel' : ''}>
                            Pesquisar
                        </label>
                    </div>
                </div>
            </div>
            {error || !characters.length || !filteredCharacters.length ? (
                <CharacterNotFound />
            ) : (
                <CharacterGrid characters={filteredCharacters} />
            )}
        </CharacterContainer>
    );
};

export default MainCharacterContainer;
