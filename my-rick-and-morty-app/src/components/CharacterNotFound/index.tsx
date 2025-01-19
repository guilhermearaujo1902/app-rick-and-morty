import { useRouter } from "next/router";

const CharacterNotFound = () => {
    const router = useRouter();
    const isHome = router.pathname == "/" ? true : false;

    const { push } = useRouter();

    const goToHome = () => {
        push("/");
    };

    return (
        <div className="mt-12">
            <div className="char-not-found flex justify-center items-center">
                {isHome && (
                    <div>
                        <p className="char-not-found-title">
                            Nada foi encontrado
                        </p>
                        <p>Tente realizar uma nova busca.</p>
                    </div>
                )}
                {!isHome && (
                    <div>
                        <p className="char-not-found-title">
                            Parece que você ainda não tem favoritos
                        </p>
                        <p>
                            Volte à página inicial e escolha os melhores para
                            você.
                        </p>
                        <button onClick={goToHome}>Voltar ao início</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CharacterNotFound;
