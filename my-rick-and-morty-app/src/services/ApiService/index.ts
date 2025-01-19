import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://rickandmortyapi.com/api/character";

const getCharacters = async (): Promise<any> =>
    await axios
        .get<AxiosResponse<any>>(BASE_URL)
        .then((response) => response.data);

export default { getCharacters };
