import { useDispatch } from "react-redux";
import { CHANGE_ORDER_ELEMENTS, IS_READ_ARTICLE, OPEN_TEXT, SAVED_NUMBER_SELECTED_ARTICLE } from "../../store/slice_data_articles";

export default function useOpenArticle(number_selected_article: number | null, id: number) {
  const dispatch = useDispatch();

  const open_article = () => {
    // закрыть открытую ранее статью
    if (number_selected_article) {
      dispatch(IS_READ_ARTICLE(number_selected_article));
    }

    dispatch(OPEN_TEXT(id));
    dispatch(SAVED_NUMBER_SELECTED_ARTICLE());
    dispatch(CHANGE_ORDER_ELEMENTS(id));

    // прокрутить страницу вверх, чтобы прочитать открытую статью
    window.scrollTo(0, 0);
  }
  
  return {
    open_article
  }
}