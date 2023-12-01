import { ListArticlesPropsTypes } from "../../common/CommonTypes";
import Article from "./Article";
import ListArticles from "./ListArticles";

export default function SelectedArticle(props: ListArticlesPropsTypes) {
  const current_article = props.currentNumber && props.articles_data.find(el => el.id === props.currentNumber);
  const formatted_articles_data = [...props.articles_data.filter(el => el.id !== props.currentNumber)]

  return (
    <>
      { current_article 
          ?
            <>
              <Article 
                title={current_article.title} 
                link_img={current_article.link_img} 
                text={current_article.text}
              />
              <ListArticles articles_data={formatted_articles_data} />
            </>
          : 
            <ListArticles articles_data={props.articles_data} />
      }
    </>
  );
}