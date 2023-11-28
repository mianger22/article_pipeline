import { Link } from "react-router-dom";

type CustomLinkPropsTypes = {
  path: string,
  name: string
}

export default function CustomLink(props: CustomLinkPropsTypes) {
  return (
    <div className='mb-1'>
      <Link 
        to={props.path} 
        className='link_custom'
      >
        {props.name}
      </Link>
    </div>
  );
}