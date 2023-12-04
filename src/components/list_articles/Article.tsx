import { useState, useEffect } from "react";
import { ArticlesDataType } from "../../common/CommonTypes";
import { useDispatch } from "react-redux";

export default function Article(props: ArticlesDataType) {
  const dispatch = useDispatch();
  const [fullTextArticleIsOpen, setFullTextArticleIsOpen] = useState(false);

  const open_all_article = () => {
    setFullTextArticleIsOpen(true);
    dispatch({ type: "IS_READ_ARTICLE", payload: props.id });
  }

  useEffect(() => {
    if (!fullTextArticleIsOpen && props.is_opened_text) {
      setFullTextArticleIsOpen(true);
    }
  }, [fullTextArticleIsOpen, props.is_opened_text])

  return (
    <div className='mb-5'>
      <div className='font-bold mb-1'>
        {props.title}
      </div>
      {
        props.link_img && 
          <img src={props.link_img} alt={props.alt} width={150} height={200} className='my-3' />
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