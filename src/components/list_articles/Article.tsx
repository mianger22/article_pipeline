import { ArticlesDataType } from "../../common/CommonTypes";

export default function Article(props: ArticlesDataType) {
  const open_all_article = () => {
    alert(" showed all text article ")
  }

  return (
    <div className='mb-5'>
      <div className='font-bold mb-1'>
        {props.title}
      </div>
      {
        props.text.length > 135 ? 
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