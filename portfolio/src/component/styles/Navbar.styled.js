import styled from "styled-components";

const Navbar = styled.div`
`;

export const HamburgerButton = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    font-size: 2.1rem;
    z-index: 2;
    color: black;
    @media (min-width: 600px) {
        display: none;
    }
`;

export const MoblieNavbar = styled.nav`
    display: flex;
    background-color: lightblue;
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
    transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
    transition: transform 150ms ease-in;
    a:first-child {
        text-decoration: none;
    }
    a {
        color: black;
        text-decoration: none;
    }
    @media (min-width: 600px) {
        display: none;
    }
`;

export const DesktopNavbar = styled.nav`
    display: flex;
    height: 15%;
    gap: 3rem;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    max-width: 100%;

    font-size: 1.5rem;
    background-color: lightblue;


    a:first-child {
        text-decoration: none;
        margin-right: auto;
        &:hover{
            color: black;
            cursor: pointer;
        }
    }
    a {
        color: black;
        text-decoration: none;
        &:hover{
            color: red;
            cursor: pointer;
        }
    }
    
    @media (max-width: 600px) {
        display: none;
    };
`

export default Navbar;