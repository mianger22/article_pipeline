import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import ArticleCard from "./ArticleCard";

export default function ShowcaseArticles(props: ListArticlesPropsTypes) {
  return (
    <>
      { props.articles_data
          .filter(el => el.is_read === false)
          .map(el => <ArticleCard id={el.id} title={el.title} link_img={el.link_img} />)
      }

      {/* {
        !props.articles_data.find(city => city.is_read === false) && " новости закончились "
      } */}
    </>
  );
}