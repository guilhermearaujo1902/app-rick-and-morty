import { useDispatch } from "react-redux";
import cx from "classnames";

import { AppDispatch } from "@/store/store";
import { toggleFavorite } from "@/features";
import Character from "@/types/character";
import styles from "./style.module.css";

interface CharacterCardProps {
    character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const setFavorite = (id: number) => {
        dispatch(toggleFavorite(id));
    }

    return (
        <div
            className={cx(
                styles.charCard,
                "mb-6 w-[200px] rounded-lg relative"
            )}
        >
            {!character.isFavorite && (
                <div 
                    className="absolute top-2 right-2 text-white cursor-pointer hover:text-black"
                    onClick={() => setFavorite(character.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </div>
            )}
            {character.isFavorite && (
                <div
                    className="absolute top-2 right-2 text-black cursor-pointer"
                    onClick={() => setFavorite(character.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </div>
            )}
            <div>
                <img className="rounded-t-lg" src={character.image} />
            </div>
            <div className="p-3">
                <h3 className={cx(styles.charCardTitle, "text-2xl")}>
                    {character.name}
                </h3>
                <p className={cx(styles.charCardDescription, "text-base")}>
                    {character.species}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;
