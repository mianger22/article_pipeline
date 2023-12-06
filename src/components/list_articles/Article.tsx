import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch, useSelector } from "react-redux";

export default function Article(props: ArticlesDataType) {
  const dispatch = useDispatch();
  const number_selected_article: null | number = useSelector((state: any) => state.data_articles.number_selected_article);

  const open_article = () => {
    // закрыть открытую ранее статью
    if (number_selected_article) {
      dispatch({ type: "IS_READ_ARTICLE", payload: number_selected_article });
    }

    dispatch({ type: "OPEN_TEXT", payload: props.id });
    // сохранить номер открытой статьи
    dispatch({ type: "SAVED_NUMBER_SELECTED_ARTICLE", payload: 1 });
    dispatch({ type: "CHANGE_ORDER_ELEMENTS", payload: props.id });
    // прокрутить страницу вверх, чтобы прочитать открытую статью
    window.scrollTo(0, 0);
  }

  return (
    <div className='mb-5'>
      <div className='font-bold mb-1'>
        {props.title}
      </div>
      {
        props.link_img && 
          <img src={props.link_img} alt={props.alt} width={150} height={200} className='my-3' />
      }
      {
        (props.text && props.text.length > 135 && !props.is_opened_text) ? 
          <>
            <div>
              {JSON.stringify(props.text).substr(0, 135) + "..."}
            </div>
            <div>
              {<button className='link_custom' onClick={open_article}>Читать далее</button>}
            </div>
          </>
        :
          <div>
            {props.text}
          </div>
      }
    </div>
  );
}