import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";

export default function ArticleCard(props: ArticlesDataType) {
  const dispatch = useDispatch();

  const open_selected_article = () => {
    dispatch({ type: "OPEN_ARTICLE", payload: 1 })
  }

  return (
    <div className='mb-5'>
      <div className='mb-2'>
        <img src={props.link_img} alt='new' />
      </div>
      <div className='link_custom' onClick={open_selected_article}>
        {props.title}
      </div>
    </div>
  );
}