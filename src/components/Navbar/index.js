import React from 'react';
import {FaBars} from "react-icons/fa";
import {Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks,
    NavBtn,NavBtnLink} from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Finder
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="scholarship1">Scholarships</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="internships1">Internships</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs1">Jobs</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

        </>
    );
};

export default Navbar;
