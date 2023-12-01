import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import ArticleCard from "./ArticleCard";

export default function ShowcaseArticles(props: ListArticlesPropsTypes) {
  return (
    <>
      { props.articles_data.map(el => 
        <ArticleCard id={el.id} title={el.title} link_img={el.link_img} />
      ) }
    </>
  );
}