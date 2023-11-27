import { ArticlesDataType } from "../../common/CommonTypes";

export default function Article(props: ArticlesDataType) {
  return (
    <div className="mb-5">
      <div className="font-bold">{props.title}</div>
      <div>{props.text}</div>
    </div>
  );
}