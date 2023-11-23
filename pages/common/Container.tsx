import { ReactNode, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Container({children}: {children: ReactNode}) {
  const router = useRouter();
  const [isAuthed, setAuth] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setAuth(true);
    }

    // alert(isAuthed);
  }, [isAuthed])

  const leave_page = (e: any) => {
    // убираем статус авторизованного пользователя
    setAuth(false);

    e.preventDefault();

    // редиректим на страницу авторизации
    router.push('/authorization');

    localStorage.removeItem("authToken");
  }

  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-5 h-[70px] shadow-md bg-gray-50">
          <div>Только свежие новости!</div>
          
          {isAuthed && <button 
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={leave_page}
          >
            Выйти
          </button>}
        </nav>
      </header>
      <main className='px-5 my-5'>
        {children}
      </main>
      {/* <footer className="pt-5 my-5 text-body-secondary border-top">
        Created by the Ustinnov Corporation · © 2023
      </footer> */}
    </>
  );
}
