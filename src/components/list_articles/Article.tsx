import { useState } from "react";
import { ArticlesDataType } from "../../common/CommonTypes";

export default function Article(props: ArticlesDataType) {
  const [fullTextArticleIsOpen, setFullTextArticleIsOpen] = useState(false);

  const open_all_article = () => {
    setFullTextArticleIsOpen(true);
  }

  return (
    <div className='mb-5'>
      <div className='font-bold mb-1'>
        {props.title}
      </div>
      {
        props.link_img && 
          <img src={props.link_img} alt='alt' width={150} height={200} className='my-3' />
      }
      {
        (props.text && props.text.length > 135 && !fullTextArticleIsOpen) ? 
          <>
            <div>
              {JSON.stringify(props.text).substr(0, 135) + "..."}
            </div>
            <div>
              {<button className='link_custom' onClick={open_all_article}>Читать далее</button>}
            </div>
          </>
        :
          <div>
            {props.text}
          </div>
      }
    </div>
  );
}