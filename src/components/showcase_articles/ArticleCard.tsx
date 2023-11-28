import { ArticlesDataType } from "../../common/CommonTypes";

export default function ArticleCard(props: ArticlesDataType) {
  return (
    <div className='mb-5'>
      <div className='mb-2'>
        <img src={props.link_img} alt='new' />
      </div>
      <div className='link_custom'>
        {props.title}
      </div>
    </div>
  );
}