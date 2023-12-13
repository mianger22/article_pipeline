import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";
import { change_order_elements_action, open_text_action } from "../../store/action_creators";

export default function ArticleCard(props: ArticlesDataType) {
  const dispatch = useDispatch();

  const open_selected_article = () => {
    dispatch(open_text_action(props.id));
    dispatch(change_order_elements_action(props.id));
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