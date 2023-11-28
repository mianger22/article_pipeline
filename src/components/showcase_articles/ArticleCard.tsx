import { ArticlesDataType } from "../../common/CommonTypes";

export default function ArticleCard(props: ArticlesDataType) {
  return (
    <>
      <div>
        <img src={props.link_img} alt='new' width={100} height={50} />
      </div>
      <div>
        {props.title}
      </div>
    </>
  );
}