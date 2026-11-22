import { api } from "@/lib/Api";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router";

type AuthFormProps = {
    mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
    const isSignUp = mode === 'signup';
    const { user, checking, setUser } = useAuthStore()
    const [lodding, setLodding] = useState(false);
    const [error, setError] = useState('')
    const location = useLocation()

    const destination = location.state?.from ?? "/profile";
    /* 
       what is the main usecase of useLocation: 
       Imagine you are using your stock trading application.
       You want to visit the /stocks page, but you haven't logged in yet.
       Now the user is redirected to /login.

       But there is a problem:

       After successfully logging in, where should the application send the user?
       - /profile?
       - /stocks?
       - /home?
       We need to remember the original destination.

       That's where useLocation() comes in. 
    */

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        /*
        React.SubmitEvent: It tells TypeScript that this event is related to submitting a form.
        HTMLFormElement: It tells React's event type which HTML element is responsible for the event.The element generating the event is an HTML form.
        */
        event?.preventDefault();
        setLodding(true);
        setError('')

        const body = Object.fromEntries(new FormData(event?.currentTarget));
        //It collects all the values from an HTML form and converts them into a normal JavaScript object.

        try {
            const { data } = await api.post(isSignUp ? "/user/signup" : "/user/signin", body);
            setUser(data.user)

        } catch (error) {
            setError(error instanceof Error ? error.message : 'Please try again');
            /*
              if the error is a instance of the Error(that is use to chack if the error is comming form the backend try catch block or not)
              then the set the error.message in the seError otherwise "please try again"
            */
        } finally {
            setLodding(false)
        }
    }

    if (checking) return <p className="text-zinc-400">Checking session...</p>
    if (user) return <Navigate to={destination} replace />

    return (
        <section className="panel mx-auto max-w-md">
            <h1 className="page-title">
                {isSignUp ? "Create an account" : "Log in"}
            </h1>

            <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
                {isSignUp && (
                    <label className="field">
                        Username
                        <input
                            name="userName"
                            autoComplete="userName"
                            minLength={2}
                            maxLength={30}
                            required
                        />
                    </label>
                )}

                <label className="field">
                    Email
                    <input name="email" type="email" autoComplete="email" required />
                </label>

                <label className="field">
                    Password
                    <input
                        name="password"
                        type="password"
                        autoComplete={isSignUp ? "new-password" : "current-password"}
                        minLength={6}
                        maxLength={72}
                        required
                    />
                </label>

                {error && <p role="alert" className="error">{error}</p>}

                <button type="submit" className="btn-primary" disabled={lodding}>
                    {lodding ? 'Please wait...' : isSignUp ? "Create account" : "Log in"}
                </button>
            </form>

            <p className="mt-5 text-sm text-zinc-400">
                {isSignUp ? "Already have an account? " : "New to Exchange? "}
                <Link className="text-zinc-100 underline" to={isSignUp ? "/login" : "/signup"}>
                    {isSignUp ? "Log in" : "Sign up"}
                </Link>
            </p>
        </section>
    )
}