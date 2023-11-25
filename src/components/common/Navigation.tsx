import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PropsTypes } from "../../types/CommonTypes";

export default function Navigation(props: PropsTypes) {
  const navigate = useNavigate();
  const isAuthed = useSelector((state: any) => state.isAuthed);

  useEffect(() => {
    // если токен существует, то отображать кнопку выхода
    if (localStorage.getItem('authToken')) {
      props.grant_access_to_user();
    }
  }, [isAuthed])

  const leave_page = () => {
    // отбираем токен
    localStorage.removeItem("authToken");
    // убираем статус авторизованного пользователя
    props.deny_user_access && props.deny_user_access();
    // редиректим на страницу авторизации
    navigate('/authorization');
  }

  return (
    <nav className="flex justify-between items-center h-[75px] px-5 mb-5 shadow-md">
      <div>Новостной портал</div>

      {isAuthed && 
        <button 
          className="btn_custom" 
          onClick={leave_page}
        >
          Выйти
        </button>
      }
    </nav>
  );
}