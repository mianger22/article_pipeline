type ArticlePropsType = {
  title: string,
  text: string
}

export default function Article(props: ArticlePropsType) {
  return (
    <div className="mb-5">
      <div className="font-bold">{props.title}</div>
      <div>{props.text}</div>
    </div>
  );
}