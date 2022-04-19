import { Link, Outlet } from "react-router-dom";

import Logo from "./Navbar/Logo";
import PageLinks from "./Navbar/PageLinks";

const pages: string[] = [
    'Projects',
    'Blog',
    'Contact'
]

const pagesURLs: string[] = [
    '/projects',
    '/blog',
    '/contact'
]

function Navbar() {
    return (
        <div className="navbar">
            <Logo displayText="Generic Programmer"/>
            <nav className="navbar-links">
                <ul>
                    <Link to="/projects"><li className="link"><a>Projects</a></li></Link>
                    <Link to="/blog"><li className="link"><a>Blog</a></li></Link>
                    <Link to="/contact"><li className="link"><a>Contact</a></li></Link>
                </ul>
            </nav>

            <Outlet />

        </div>
    );
    }
    
export default Navbar;