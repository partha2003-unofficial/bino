import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import PageLayout from "./component/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Stocks from "./pages/Stocks";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { api } from "./lib/Api";
import axios from "axios";
import ProtectedRoute from "./component/ProtectedRoute";

export function App() {
  const { setUser, setChecking, setSessionError } = useAuthStore()

  useEffect(() => {
    async function checkSession() {
      try {
        const { data } = await api.get('/user/me')
        setUser(data?.user);
      }
      catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          setUser(null);
        } else {
          setSessionError('could not check your session. try again')
        }
      } finally {
        setChecking(false)
      }
    }
    checkSession()
  }, [setUser, setChecking, setSessionError])

  return (
    <BrowserRouter useTransitions={false}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

          <Route
            path="/stocks"
            element={
              <ProtectedRoute>
                <Stocks />
              </ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
