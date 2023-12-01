import './index.css';
import React from 'react';
import Layout from './Layout';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  isAuthed: false,
  isSelectArticle: false,
  numberSelectedArticle: 0
}

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "GRANT_ACCESS_TO_USER": 
      return {...state, isAuthed: true}
    case "DENY_USER_ACCESS": 
      return {...state, isAuthed: false}
    case "OPEN_ARTICLE": 
      return {...state, isSelectArticle: true, numberSelectedArticle: action.payload}
    default:
      return state
  }
}

// const reducerAuthenticated
// const reducerManageArticle = (state = defaultState, action: any, payload: any) => {
//   switch (action.type) {
//     case "OPEN_ARTICLE": 
//       return {...state, isSelectArticle: true, numberSelectedArticle: payload.numberSelectedArticle}
//     default:
//       return state
//   }
// }

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
