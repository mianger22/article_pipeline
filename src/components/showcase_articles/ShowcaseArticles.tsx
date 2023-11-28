import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import ArticleCard from "./ArticleCard";

export default function ShowcaseArticles(props: ListArticlesPropsTypes) {
  return (
    <div>
      { props.articles_data.map(el => 
        <ArticleCard title={el.title} link_img={el.link_img} />
      ) }
    </div>
  );
}