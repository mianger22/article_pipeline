import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_ORDER_ELEMENTS, IS_READ_ARTICLE, OPEN_TEXT, SAVED_NUMBER_SELECTED_ARTICLE } from "../../store/slice_data_articles";

export default function ArticleCard(props: ArticlesDataType) {
  const dispatch = useDispatch();
  const number_selected_article: null | number = useSelector((state: any) => state.data_articles.number_selected_article);

  const open_selected_article = () => {
    // закрыть открытую ранее статью
    if (number_selected_article) {
      dispatch(IS_READ_ARTICLE(number_selected_article));
    }

    dispatch(OPEN_TEXT(props.id));
    dispatch(SAVED_NUMBER_SELECTED_ARTICLE());
    dispatch(CHANGE_ORDER_ELEMENTS(props.id));

    // прокрутить страницу вверх, чтобы прочитать открытую статью
    window.scrollTo(0, 0);
  }

  return (
    <div className='mb-5'>
      <div className='mb-2 flex justify-center items-center'>
        <img src={props.link_img} alt={props.alt} className='max-h-28' />
      </div>
      <div className='link_custom' onClick={open_selected_article}>
        {props.title}
      </div>
    </div>
  );
}