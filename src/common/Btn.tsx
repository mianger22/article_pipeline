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
      className="btn_custom" 
      onClick={props.clickHandler}
    >
      { props.name }
    </button> 
  );
}