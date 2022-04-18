import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <h1 className="logo">Mr Programmer</h1>
            </Link>
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