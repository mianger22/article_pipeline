import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";

export default function Article(props: ArticlesDataType) {
  const dispatch = useDispatch();

  const open_article = () => {
    dispatch({ type: "IS_READ_ARTICLE", payload: props.id });
    dispatch({ type: "OPEN_TEXT", payload: props.id });
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