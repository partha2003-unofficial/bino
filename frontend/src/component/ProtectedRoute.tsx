import { useAuthStore } from "@/store/useAuthStore";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, checking } = useAuthStore();
    const location = useLocation();

    if (checking) { return <p className="text-zinc-400">Checking session…</p>; }

    if (!user) {
        return <Navigate to={'/login'} replace state={{ from: location.pathname }} />
    }

    return children;
}