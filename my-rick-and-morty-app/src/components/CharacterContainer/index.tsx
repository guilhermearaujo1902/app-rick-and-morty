interface CharacterContainerProps {
    children?: any;
}

const CharacterContainer = ({ children }: CharacterContainerProps) => {
    return (
        <div className="flex flex-wrap justify-center main my-12 px-6">
            <div className="w-full md:w-7/12 lg:w-6/12">
                {children}
            </div>
        </div>
    );
};

export default CharacterContainer;
