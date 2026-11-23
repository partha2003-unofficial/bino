import { api } from "@/lib/Api";
import { useAuthStore, type User } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { replace, useNavigate } from "react-router";

async function submitAuthform(path: string, form: FormData): Promise<User> {
    const { data } = await api.post(path, Object.fromEntries(form));
    return data?.user;
}

export function useSignup() {
    const setUser = useAuthStore(state => state.setUser)

    return useMutation({
        mutationFn: (from: FormData) => submitAuthform('/user/signup', from),
        onSuccess: setUser
    })
}

export function useSignin() {
    const { setUser } = useAuthStore()

    return useMutation({
        mutationFn: (from: FormData) => submitAuthform('/user/signin', from),
        onSuccess: setUser
    })
}

export function useLogout() {
    const { setUser } = useAuthStore();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: () => api.post('/user/logout'),
        onSuccess: () => {
            navigate('/', { replace: true });
            setUser(null)
        }
    })
}