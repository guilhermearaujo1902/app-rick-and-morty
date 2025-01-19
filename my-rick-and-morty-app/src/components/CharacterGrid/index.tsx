import Character from "@/types/character";
import CharacterCard from "../CharacterCard";

interface CharacterGridProps {
    characters: Character[];
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
    return (
        <div className="mt-12">
            <div className="flex flex-wrap justify-center md:justify-between">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default CharacterGrid;
