import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: var(--nav-bg);
    padding: 1rem;
    width: 250px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    transform-origin: left center;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        position: ${props => props.$isOpen ? 'fixed' : 'relative'};
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2rem 0;
`;

const NavItem = styled.li`
    margin: 0.5rem 0;
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 0.75rem 1rem;
    color: var(--text);
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: var(--accent);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    &:hover, &.active {
        color: var(--accent);
    }

    &:hover:before, &.active:before {
        transform: translateX(0);
    }

    &.active {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

const Logo = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--accent);
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    padding-left: 1rem;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 4px;
        height: 70%;
        background-color: var(--accent);
        transform: translateY(-50%) skewY(-20deg);
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 101;
    transform: none;

    &:hover {
        color: var(--accent);
        background: none;
        transform: none;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const Overlay = styled.div`
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`;

const Navigation = () => {
    const { colors } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navVariants = {
        hidden: { x: -250 },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <>
            <MobileMenuButton onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </MobileMenuButton>

            <Overlay $isOpen={isOpen} onClick={closeMenu} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <NavContainer $isOpen={isOpen}>
                    <Logo>CL</Logo>
                    <NavList>
                        <NavItem>
                            <StyledNavLink to="/" onClick={closeMenu}>Home</StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/about" onClick={closeMenu}>Sobre</StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/experience" onClick={closeMenu}>Experiências</StyledNavLink>
                        </NavItem>
                        {/* <NavItem>
                            <StyledNavLink to="/education" onClick={closeMenu}>Education</StyledNavLink>
                        </NavItem> */}
                        <NavItem>
                            <StyledNavLink to="/skills" onClick={closeMenu}>Habilidades</StyledNavLink>
                        </NavItem>
                        {/* <NavItem>
                            <StyledNavLink to="/certifications" onClick={closeMenu}>Certifications</StyledNavLink>
                        </NavItem> */}
                        <NavItem>
                            <StyledNavLink to="/contact" onClick={closeMenu}>Contato</StyledNavLink>
                        </NavItem>
                    </NavList>
                </NavContainer>
            </motion.div>
        </>
    );
};

export default Navigation;
