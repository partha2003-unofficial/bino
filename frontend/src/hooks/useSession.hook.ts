import { api } from "@/lib/Api";
import { useAuthStore, type User } from "../store/useAuthStore.ts"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fatchCurrentUser(): Promise<User | null> {
    try {
        const { data } = await api.get('/user/me')
        return data.user
    } catch (error) {
        if (axios.isAxiosError(error) && error?.status === 401) return null;
        throw error;
    }
}

export function useSession() {
    const user = useAuthStore((data) => data.user);
    const setUser = useAuthStore((data) => data.setUser);

    const { error, isPending, refetch } = useQuery({
        queryKey: ['session'],
        queryFn: async () => {
            const currentUser = await fatchCurrentUser();
            setUser(currentUser);
            return currentUser;
        },
        staleTime: Infinity,
        retry: false
    })

    return { error, isPending, refetch, user }
}