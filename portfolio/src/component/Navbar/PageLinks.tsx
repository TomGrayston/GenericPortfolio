import { Link } from "react-router-dom";

interface PageLinksProps{
    pages: any
}

export default function PageLinks({pages}: PageLinksProps){
    return(
        <nav className="navbar-links">
            <ul>
                {pages.map((page: {pageName: string, pageURL: string; }) => (
                    <Link to={page.pageURL}><li className="nav-link"><a>{page.pageName}</a></li></Link>
                ))}
            </ul>
        </nav>
    );
}