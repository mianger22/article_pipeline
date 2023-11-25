import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import Navigation from "./common/Navigation";
import { useDispatch } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();

  const grant_access_to_user = () => {
    dispatch({type: "GRANT_ACCESS_TO_USER"})
  }

  const deny_user_access = () => {
    dispatch({type: "DENY_USER_ACCESS"})
  }

  return (
    <>
      <header>
        <Navigation 
          grant_access_to_user={grant_access_to_user} 
          deny_user_access={deny_user_access}
        />
      </header>
      <main className="px-5 mb-5 h-96 flex items-center justify-center">
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/authorization" element={ 
            <Authorization grant_access_to_user={grant_access_to_user} /> 
          } />
          <Route path="/registration" element={ 
            <Registration grant_access_to_user={grant_access_to_user} /> 
          } />
        </Routes>
      </main>
      <footer className="px-5 text-gray-500 font-thin flex items-center justify-center">
        Created by the Ustinnov Corporation · © 2023
      </footer>
    </>
  );
}
