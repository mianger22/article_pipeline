// or get isSubmitting, or - clickHandler
type BtnPropsTypes = {
  name: string, 
  clickHandler?: () => void,
  isSubmitting?: boolean
}

export default function Btn(props: BtnPropsTypes) {
  if (props.isSubmitting) {
    return (
      <button 
        className="btn_custom"               
        disabled={props.isSubmitting} 
        type="submit" 
      >
        { props.name }
      </button>
    )
  }

  return (
    <button 
      className={props.name === "Войти" ? 
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" : 
        "btn_custom"} 
      onClick={props.clickHandler}
    >
      { props.name }
    </button> 
  );
}