import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import Navigation from "./components/common/Navigation";

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="px-5 mb-5">
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/authorization" element={ <Authorization /> } />
          <Route path="/registration" element={ <Registration /> } />
        </Routes>
      </main>
      <footer className="px-5 text-gray-500 font-thin">
        Created by the Ustinnov Corporation · © 2023
      </footer>
    </>
  );
}
