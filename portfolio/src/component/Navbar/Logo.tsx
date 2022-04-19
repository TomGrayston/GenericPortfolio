import { Link } from "react-router-dom";

interface LogoProps{
    displayText: string
}

export default function Logo({displayText}: LogoProps) {
    return(
        <Link to="/">
            <h1 className="logo">
                {displayText}
            </h1>
        </Link>
    );
}