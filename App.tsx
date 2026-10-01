import { Route, Routes } from "react-router-dom";
import Home from "./client/src/pages/Home";
import Login from "./client/src/pages/Login";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}
