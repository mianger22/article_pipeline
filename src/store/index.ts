import { legacy_createStore as createStore, combineReducers} from 'redux';
import { reducerDataArticles } from './reducer_data_articles';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAuthenticated } from './reducer_authenticated';
import { reducerManageArticle } from './reducer_manage_article';

const rootReducer = combineReducers({
  authenticated: reducerAuthenticated,
  manage_article: reducerManageArticle,
  data_articles: reducerDataArticles
})

export const store = createStore(rootReducer, composeWithDevTools());