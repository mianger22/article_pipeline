import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PagePropsTypes } from "./CommonTypes";
import Btn from "./Btn";

export default function Navigation(props: PagePropsTypes) {
  const navigate = useNavigate();
  const isAuthed = useSelector((state: any) => state.isAuthed);
  const location = useLocation().pathname;

  useEffect(() => {
    // если токен существует, то отображать кнопку выхода, 
    // это нужно для того, чтобы при перезагрузке главной страницы кнопка выхода не пропадала, 
    // то есть в хранилище значение isAuthed менялось на true
    if (localStorage.getItem('authToken')) {
      props.grant_access_to_user();
    }
  }, [])

  const enter_advanced_mode_handler = () => {
    // редиректим на страницу авторизации
    navigate('/authorization');
  }

  const leave_advanced_mode_handler = () => {
    // отбираем токен
    localStorage.removeItem("authToken");
    // убираем статус авторизованного пользователя
    props.deny_user_access && props.deny_user_access();
  }

  return (
    <nav className="flex justify-between items-center h-[75px] px-5 mb-5 shadow-md">
      <div>Новостной портал</div>

      { location !== "/authorization" && location !== "/registration" && 
        (isAuthed ? 
          <Btn name="Выйти" clickHandler={leave_advanced_mode_handler} /> : 
          <Btn name="Войти" clickHandler={enter_advanced_mode_handler} /> )}     
    </nav>
  );
}