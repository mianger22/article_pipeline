import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { PagePropsTypes } from '../common/CommonTypes';
import { enter_advanced_mode } from '../common/CommonScripts';
import Btn from '../common/Btn';
import CustomLink from '../common/CustomLink';

type ErrorsRegistrationTypes = {
  login?: string;
  email?: string;
  password?: string;
  repeat_password?: string;
}

// type DefaultFormValuesType = {
//   login: string, email: string, password: string, repeat_password: string
// }

export default function Registration(props: PagePropsTypes) {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ login: '', password: '', repeat_password: '', email: '' }}
      validate={values=> {
        const errors: ErrorsRegistrationTypes = {};

        if (!values.email) {
          errors.email = 'Обязательно для заполнения';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Некорректный email';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        enter_advanced_mode(props.grant_access_to_user, navigate);
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
        /* and other goodies */
      }) => (
        <div className="form_custom">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type='text'
                  name='login'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  placeholder='Псевдоним'
                  className='input_custom'
                  autoComplete='new-login'
                />
                {errors.login && touched.login && errors.login}
              </div>
              <div className="mb-3">
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Пароль'
                  className='input_custom'
                  autoComplete='new-password'
                />
                {errors.password && touched.password && errors.password}
              </div>
              <div className="mb-3">
                <input
                  type='password'
                  name='repeat_password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeat_password}
                  placeholder='Повтор пароля'
                  className='input_custom'
                  autoComplete='new-password'
                />
                {errors.repeat_password && touched.repeat_password && errors.repeat_password}
              </div>
              <div className="mb-3">
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Адрес электронной почты'
                  className='input_custom'
                  autoComplete='new-email'
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div className='flex justify-center items-center mt-5'>
                <Btn name='Зарегистрироваться' isSubmitting={isSubmitting} />
              </div>
          </form>

          <div className='mt-7 pr-3 text-right'>
            <CustomLink path='/authorization' name='Назад' />
          </div>
        </div>
      )}
    </Formik>
  );
}