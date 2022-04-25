import styled from "styled-components";

const Navbar = styled.div`
    hr{
        opacity: 50%;
    }
`;

export const DesktopNavbarDivider = styled.hr`
    @media(max-width: 700px){
        display: none;
    }
`

export const MoblieNavbarDivider = styled.hr`
    @media(min-width: 700px){
        display: none;
    }
`

export const HamburgerButton = styled.i`
    top: 0;
    left: 0;
    margin: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    
    color: black;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const ExitButton = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    font-size: 1.5rem;
    z-index: 2;
    color: black;
    cursor: pointer;
    @media (min-width: 700px) {
        display: none;
    }
`

export const MoblieNavbar = styled.nav`
    display: flex;
    height: 15%;
    gap: 3rem;
    align-items: center;
    text-align: center;
    max-width: 100%;
    font-family: 'Ubuntu', sans-serif;

    background-color: white;

    @media (min-width: 700px) {
        display: none;
    }

    a {
        color: black;
        text-decoration: none;
    }
`

export const MoblieNavAccordion = styled.nav`
    display: flex;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 35%;
    flex-direction: column;
    padding: 4rem 0.5rem;
    gap: 2rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    z-index: 2;

    transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
    transition: transform 150ms ease-in;

    a:first-child {
        text-decoration: none;
    }
    a {
        color: black;
        text-decoration: none;
    }
    @media (min-width: 700px) {
        display: none;
    }
`;

export const DesktopNavbar = styled.nav`
    display: flex;
    height: 15%;
    gap: 3rem;
    align-items: center;
    text-align: center;
    padding: 1rem 25%;
    max-width: 100%;
    font-family: 'Ubuntu', sans-serif;

    background-color: white;


    a:first-child {
        text-decoration: none;
        margin-right: auto;
        font-size: 1rem;
        font-weight: 500;
        &:hover{
            color: black;
            cursor: pointer;
            background-color: white;
        }
    }
    a {
        color: black;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.15rem;
        &:hover{
            color: #040057;
            cursor: pointer;
        }
    }
    
    @media (max-width: 700px) {
        display: none;
    };

    @media (max-width: 1500px) {
        padding: 1rem 10%;
    };
`

export default Navbar;