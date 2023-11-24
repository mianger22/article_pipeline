import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

type ErrorsAuthorizationTypes = {
  login?: string;
  password?: string;
}

// type DefaultFormValuesType = {
//   login: string, email: string, password: string, repeat_password: string
// }

export default function Authorization() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ login: '', password: '', repeat_password: '', email: '' }}
      validate={() => {
        const errors: ErrorsAuthorizationTypes = {};

        // тут сравнивать values со значениями с сервера: если они не совпадают, выдавать ошибку

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);

        // предоставляем токен
        localStorage.setItem("authToken", "authToken");
        // впускаем в приложение
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
        <div className="form_custom">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                placeholder='Псевдоним'
                className="input_custom"   
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
                className="input_custom"                
              />
              {errors.password && touched.password && errors.password}
            </div>

            <div className='flex justify-center items-center mt-5'>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn_custom"               
              >
                Войти
              </button>
            </div>
          </form>

          <div className='mt-6 px-3 text-blue-700 text-decoration-line: underline text-sm text-right'>
            <div>
              <Link to="/password_reset">Вспомнить пароль</Link>
            </div>
            <div>
              <Link to="/registration">Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}