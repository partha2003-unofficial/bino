import { api } from "@/lib/Api";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";

export default function Navbar() {
    const { checking, user, setUser } = useAuthStore();
    const [error, setError] = useState('');
    const [loggingOut, setLoggingOut] = useState(false);
    const navigate = useNavigate()

    async function handleOnLogout() {
        setLoggingOut(true);
        try {
            await api.post('/user/logout');
            navigate('/', { replace: true });
            setUser(null);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'logout Failed')
        } finally {
            setLoggingOut(false)
        }
    }

    return (
        <header className="border-b border-zinc-800">
            <nav className="shell flex min-h-16 flex-wrap items-center gap-5 py-3">
                <Link to="/" className="text-xl font-bold tracking-tight">
                    Exchange<span className="text-lime-300">.</span>
                </Link>

                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? "nav-link text-white after:content-[''] after:block after:border-b-2 after:border-white"
                        : "nav-link"
                }>Home</NavLink>
                <NavLink to="/stocks" className={({ isActive }) =>
                    isActive
                        ? "nav-link text-white after:content-[''] after:block after:border-b-2 after:border-white"
                        : "nav-link"
                }>Stocks</NavLink>

                <div className="ml-auto flex flex-wrap items-center gap-4">
                    {checking ?
                        (
                            <span className="nav-link">Checking session…</span>

                        ) : user ? (
                            <>
                                <Link to={'/profile'} className="nav-link" >{user.userName}</Link>
                                <button
                                    className=""
                                    onClick={handleOnLogout}
                                    disabled={loggingOut}
                                >
                                    {loggingOut ? "Logging out ..." : 'Logout'}
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link to="/signup" className="btn-primary">Signup</Link>
                            </>
                        )
                    }
                </div>
            </nav >
            {error && <p role="alert" className="shell error pb-3">{error}</p>}
        </header >
    );
}