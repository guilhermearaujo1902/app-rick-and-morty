import { useQuery } from "@tanstack/react-query";

import { ApiService } from "@/services";

const CHARACTERS = 'characters';

export const useQueryCharacters = () => {
    const { data, isLoading, error } = useQuery<any>({
        queryKey: [CHARACTERS],
        queryFn: () => ApiService.getCharacters()
    });
    
    return { data, isLoading, error };
};