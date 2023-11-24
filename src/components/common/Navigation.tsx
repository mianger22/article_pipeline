import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const [isAuthed, setAuth] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setAuth(true);
    }
  }, [isAuthed])

  const leave_page = () => {
    // убираем статус авторизованного пользователя
    setAuth(false);

    // редиректим на страницу авторизации
    navigate('authorization');

    localStorage.removeItem("authToken");
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