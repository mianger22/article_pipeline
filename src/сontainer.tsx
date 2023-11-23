import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import Navigation from "./components/common/Navigation";

export default function Container() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="px-5">
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/authorization" element={ <Authorization /> } />
          <Route path="/registration" element={ <Registration /> } />
        </Routes>
      </main>
      {/* <footer className="pt-5 my-5 text-body-secondary border-top">
        Created by the Ustinnov Corporation · © 2023
      </footer> */}
    </>
  );
}
