import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import "./index.css";
import PageLayout from "./component/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Stocks from "./pages/Stocks";
import ProtectedRoute from "./component/ProtectedRoute";

export function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
