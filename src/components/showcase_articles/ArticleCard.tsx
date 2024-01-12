import { ArticlesDataType } from "../../common/CommonTypes";
import { useSelector } from "react-redux";
import useOpenArticle from "../../common/own_hooks/useOpenArticle";

export default function ArticleCard(props: ArticlesDataType) {
  const number_selected_article: null | number = useSelector((state: any) => state.data_articles.number_selected_article);
  const article_management = useOpenArticle(number_selected_article, props.id);

  return (
    <div className='mb-5'>
      <div className='mb-2 flex justify-center items-center'>
        <img src={props.link_img} alt={props.alt} className='max-h-28' />
      </div>
      <div className='link_custom' onClick={article_management.open_article}>
        {props.title}
      </div>
    </div>
  );
}