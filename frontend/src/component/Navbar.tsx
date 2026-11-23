import { useLogout } from "@/hooks/useAuth.hook";
import { useSession } from "@/hooks/useSession.hook";
import { Link, NavLink } from "react-router";

export default function Navbar() {
    const { user, isPending } = useSession()
    const logout = useLogout()

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
                    {isPending ?
                        (
                            <span className="nav-link">Checking session…</span>

                        ) : user ? (
                            <>
                                <Link to={'/profile'} className="nav-link" >{user.userName}</Link>
                                <button
                                    className=""
                                    onClick={() => logout.mutate()}
                                    disabled={logout.isPending}
                                >
                                    {logout.isPending ? "Logging out ..." : 'Logout'}
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
            {logout.isError && <p role="alert" className="shell error pb-3">{logout.error.message}</p>}
        </header >
    );
}