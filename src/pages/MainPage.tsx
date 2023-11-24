import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      // если токена нет, то кидаем на страницу Авторизации
      navigate('/authorization');
    }
  })

  return (
    <>
      Welcome
    </>
  );
}