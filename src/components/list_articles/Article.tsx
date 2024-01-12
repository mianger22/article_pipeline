import { ArticlesDataType } from "../../common/CommonTypes";
import { useSelector } from "react-redux";
import useOpenArticle from "../../common/own_hooks/useOpenArticle";

export default function Article(props: ArticlesDataType) {
  const number_selected_article: null | number = useSelector((state: any) => state.data_articles.number_selected_article);
  const article_management = useOpenArticle(number_selected_article, props.id);

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
              {<button className='link_custom' onClick={article_management.open_article}>Читать далее</button>}
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