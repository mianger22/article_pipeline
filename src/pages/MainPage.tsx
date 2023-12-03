import { ArticlesDataType } from "../common/CommonTypes";
import ListArticles from "../components/list_articles/ListArticles";
import ShowcaseArticles from "../components/showcase_articles/ShowcaseArticles";
import { useSelector } from "react-redux";

export default function MainPage() {
  const articles_data: ArticlesDataType[] = useSelector((state: any) => state.data_articles.articles_data);

  return (
    <div className='flex w-full'>
      <div className='w-2/12 flex items-center justify-center'>

      </div>
      <div className='w-8/12 flex items-center justify-center'>
        <ListArticles articles_data={articles_data} />
      </div>
      <div className='w-2/12 py-5 px-2'>
        <ShowcaseArticles articles_data={articles_data} />
      </div>
    </div>
  );
}