import { create } from "zustand";

export type User = {
    id: string,
    userName: string,
    email: string
};

type AuthStore = {
    user: User | null,
    setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    setUser: user => set({ user }), // setUser is function with paramiter user
})) 