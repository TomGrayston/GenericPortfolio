import { Link, Outlet } from "react-router-dom";

import Logo from "./Navbar/Logo";
import PageLinks from "./Navbar/PageLinks";

function Navbar() {

    const pages = [
        {pageName: 'Projects', pageURL: '/projects'},
        {pageName: 'Blog', pageURL:  '/blog'},
        {pageName: 'Contact', pageURL: '/contact'},
    ]

    return (
        <div className="navbar">
            <Logo displayText="Generic Programmer" />
            <PageLinks pages={pages} />
            <Outlet />
        </div>
    );
    }
    
export default Navbar;