import { Formik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';

type ErrorsAuthorizationTypes = {
  login?: string;
  password?: string;
}

// type DefaultFormValuesType = {
//   login: string, email: string, password: string, repeat_password: string
// }

export default function Authorization() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (localStorage.getItem('authToken') && location === "/authorization") {
      // редиректим на главную
      navigate('/');
    }
  })

  return (
    <>
      <Formik
        initialValues={{ login: '', password: '', repeat_password: '', email: '' }}
        validate={() => {
          const errors: ErrorsAuthorizationTypes = {};

          // тут сравнивать values со значениями с сервера: если они не совпадают, выдавать ошибку

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          localStorage.setItem("authToken", "authToken");

          // редиректим на главную
          navigate('/');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  placeholder='Псевдоним'
                  className="input-standart"   
                />
                {errors.login && touched.login && errors.login}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Пароль'
                  className="input-standart"                
                />
                {errors.password && touched.password && errors.password}
              </div>

              <div className='mt-4'>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-standart"               
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
      
      <div className='mt-3'>
        <Link to="/registration">Регистрация</Link>
      </div>
    </>
  );
}