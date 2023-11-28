import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import Article from "./Article";

export default function ListArticles(props: ListArticlesPropsTypes) {
  return (
    <div className="px-5">
      { props.articles_data.map(el => 
        <Article title={el.title} link_img={el.link_img} text={el.text} />
      ) }
    </div>
  );
}