import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/authorization" element={ <Authorization /> } />
        <Route path="/registration" element={ <Registration /> } />
      </Routes>
    </>
  );
}
