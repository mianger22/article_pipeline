import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import Article from "./Article";

export default function ListArticles(props: ListArticlesPropsTypes) {
  return (
    <div className="px-5">
      { props.articles_data.map(el => 
        <Article 
          id={el.id}
          text={el.text} 
          title={el.title} 
          link_img={el.link_img} 
          is_opened_text={el.is_opened_text} />
      ) }
    </div>
  );
}