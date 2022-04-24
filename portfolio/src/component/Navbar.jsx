import StyledNavbar, { DesktopNavbar, HamburgerButton, MoblieNavbar } from "./styles/Navbar.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navOpen, setNav] = useState(false);

    return(
        <StyledNavbar>
            <HamburgerButton className="fas fa-bars" onClick={() => setNav(c => !c)}/>

            <MoblieNavbar open={navOpen}>
                <Link to="/" onClick={() => setNav(c => !c)}><h1>Generic Portfolio</h1></Link>
                <Link to="/projects" onClick={() => setNav(c => !c)}><p>Projects</p></Link>
                <Link to="/blog" onClick={() => setNav(c => !c)}><p>Blog</p></Link>
                <Link to="/contact" onClick={() => setNav(c => !c)}><p>Contact</p></Link>
            </MoblieNavbar>

            <DesktopNavbar>
                <Link to="/"><h1>Generic Portfolio</h1></Link>
                <Link to="/projects"><p>Projects</p></Link>
                <Link to="/blog"><p>Blog</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
            </DesktopNavbar>
        </StyledNavbar>
    )
}

export default Navbar;