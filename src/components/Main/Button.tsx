import {Link} from "react-router-dom"

interface MainButtonProps {
    text: string;
    link: string;
}

function MainButton (props: MainButtonProps) {
    return (
    <div className="flex p-3 border-t-3 text-lg justify-center items-center">
        <Link to={props.link}>
            {props.text}
        </Link>
    </div>
    );
}

export default MainButton;