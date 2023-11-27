import ListArticles from "../components/list_articles/ListArticles";

export default function MainPage() {
  return (
    <div className='flex w-full'>
      <div className='border-2 border-indigo-500/100 w-2/12 flex items-center justify-center'>Bio area</div>
      <div className='border-2 border-indigo-500/100 w-8/12 flex items-center justify-center'>
        <ListArticles />
      </div>
      <div className='border-2 border-indigo-500/100 w-2/12 flex items-center justify-center'>Articles area</div>
    </div>
  );
}