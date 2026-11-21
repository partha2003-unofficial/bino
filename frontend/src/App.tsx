import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import PageLayout from "./component/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Stocks from "./pages/Stocks";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stocks" element={<Stocks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
