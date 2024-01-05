import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";
import { CHANGE_ORDER_ELEMENTS, OPEN_TEXT } from "../../store/slice_data_articles";

export default function ArticleCard(props: ArticlesDataType) {
  const dispatch = useDispatch();

  const open_selected_article = () => {
    dispatch(OPEN_TEXT(props.id));
    dispatch(CHANGE_ORDER_ELEMENTS(props.id));
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