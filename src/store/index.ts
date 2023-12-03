import { legacy_createStore as createStore, combineReducers} from 'redux';
import { reducerDataArticles } from './reducer_data_articles';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAuthenticated } from './reducer_authenticated';

const rootReducer = combineReducers({
  authenticated: reducerAuthenticated,
  data_articles: reducerDataArticles
})

export const store = createStore(rootReducer, composeWithDevTools());