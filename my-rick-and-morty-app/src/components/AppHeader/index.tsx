import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import cx from "classnames";
import Image from "next/image";

import { RootState } from "@/store/store";
import styles from "./style.module.css";

const AppHeader = () => {
    const { push } = useRouter();
    const router = useRouter();
    const isHome = router.pathname == "/" ? true : false;

    const favoriteCount: number = useSelector(
        (state: RootState) => state.charactersData.favoriteCount
    );

    const goToFavorite = () => {
        push("/favorites");
    };

    const goToHome = () => {
        push("/");
    };

    return (
        <div
            className={cx(
                styles.appHeader,
                "py-3 px-6 items-center grid grid-cols-12"
            )}
        >
            <div className="col-span-12 sm:col-span-3">
                <Image
                    src="/assets/images/rick-and-morty-logo.png"
                    alt="Descrição Rick and Morty com a cor da letra em verde e o contorno em amarelo"
                    width={128}
                    height={64}
                    layout="intrinsic"
                />
            </div>
            <div
                className={cx(
                    styles.buttons,
                    "col-span-12 sm:col-span-9 flex justify-center sm:justify-end mt-4 sm:mt-0"
                )}
            >
                <button
                    onClick={goToHome}
                    className={cx(
                        styles.btn,
                        "py-2 px-4 text-sm font-semibold flex items-center justify-between rounded-l-[12px] w-5/12 sm:w-auto",
                        {
                            [styles.btnActive]: isHome,
                        }
                    )}
                >
                    <div className="h5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </div>
                    <div className="mx-1">Início</div>
                </button>
                <button
                    onClick={goToFavorite}
                    className={cx(
                        styles.btn,
                        "py-2 px-4 text-sm font-semibold flex items-center justify-between rounded-r-[12px] w-7/12 sm:w-auto",
                        {
                            [styles.btnActive]: !isHome,
                        }
                    )}
                >
                    <div className="h-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                    <div className="mx-1">Favoritos</div>
                    <div
                        className={cx(styles.favCount, "rounded-full h-5 w-5")}
                    >
                        {favoriteCount}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AppHeader;
