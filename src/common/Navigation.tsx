import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PropsTypes } from "../types/CommonTypes";
import { enter_advanced_mode } from "./common_scripts";

export default function Navigation(props: PropsTypes) {
  const navigate = useNavigate();
  const isAuthed = useSelector((state: any) => state.isAuthed);

  useEffect(() => {
    // если токен существует, то отображать кнопку выхода, 
    // это нужно для того, чтобы при перезагрузке главной страницы кнопка выхода не пропадала, 
    // то есть в хранилище значение isAuthed менялось на true
    if (localStorage.getItem('authToken')) {
      props.grant_access_to_user();
    }
  }, [isAuthed])

  const leave_advanced_mode_handler = () => {
    // отбираем токен
    localStorage.removeItem("authToken");
    // убираем статус авторизованного пользователя
    props.deny_user_access && props.deny_user_access();
    // редиректим на страницу авторизации
    navigate('/authorization');
  }

  const enter_advanced_mode_handler = () => {
    enter_advanced_mode(props.grant_access_to_user, navigate, '/authorization');
  }

  return (
    <nav className="flex justify-between items-center h-[75px] px-5 mb-5 shadow-md">
      <div>Новостной портал</div>

      {isAuthed ? 
        <button 
          className="btn_custom" 
          onClick={leave_advanced_mode_handler}
        >
          Выйти
        </button> 
          :
        <button 
          className="btn_custom" 
          onClick={enter_advanced_mode_handler}
        >
          Войти
        </button> 
      }
    </nav>
  );
}