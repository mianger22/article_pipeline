import Article from "./Article";

export default function ListArticles() {
  const articles_data = [
    {
      title: 'Москва отмечает Новый Год!',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est ducimus beatae dicta aspernatur maxime modi totam eius laudantium. Atque vel impedit praesentium quam sunt! Dignissimos, eius? Fugit, architecto cumque.'
    },
    {
      title: 'Великий Новгород стал городом миллионником',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officia sint voluptatum inventore a sit necessitatibus consequatur numquam! Iusto consequatur autem illum error natus architecto excepturi sapiente voluptates doloribus mollitia.'
    },
  ]

  return (
    <div className="px-5">
      { articles_data.map(el => <Article title={el.title} text={el.text} />) }
    </div>
  );
}