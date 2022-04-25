import StyledNavbar, { DesktopNavbar, HamburgerButton, ExitButton, MoblieNavAccordion, MoblieNavbarDivider, DesktopNavbarDivider, MoblieNavbar} from "./styles/Navbar.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navOpen, setNav] = useState(false);

    return(
        <StyledNavbar>

            <MoblieNavAccordion open={navOpen}>
                <ExitButton className="fa-solid fa-xmark" onClick={() => setNav(c => !c)}/>
                <Link to="/projects" onClick={() => setNav(c => !c)}><p>Projects</p></Link>
                <Link to="/blog" onClick={() => setNav(c => !c)}><p>Blog</p></Link>
                <Link to="/contact" onClick={() => setNav(c => !c)}><p>Contact</p></Link>
            </MoblieNavAccordion>  

            <MoblieNavbar>
                <HamburgerButton className="fas fa-bars" onClick={() => setNav(c => !c)}/>
                <Link to="/" onClick={() => setNav(c => !c)}><h1>Tom Grayston</h1></Link>
            </MoblieNavbar>
            <MoblieNavbarDivider/>

            <DesktopNavbar>
                <Link to="/"><h1>Tom Grayston</h1></Link>
                <Link to="/projects"><p>Projects</p></Link>
                <Link to="/blog"><p>Blog</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
            </DesktopNavbar>
            <DesktopNavbarDivider/>


        </StyledNavbar>
    )
}

export default Navbar;