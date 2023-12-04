import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";

export default function ArticleCard(props: ArticlesDataType) {
  const dispatch = useDispatch();

  const open_selected_article = () => {
    dispatch({ type: "IS_READ_ARTICLE", payload: props.id });
    dispatch({ type: "OPEN_TEXT", payload: props.id });
    dispatch({ type: "CHANGE_ORDER_ELEMENTS", payload: props.id });
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