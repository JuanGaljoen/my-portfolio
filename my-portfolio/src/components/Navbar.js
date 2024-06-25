import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

function NavBar() {
    // State variables to track the active link and the scroll position
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // useEffect hook to add scroll event listener and update the scroll position
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        // Add the scroll event listener when the component mounts
        window.addEventListener("scroll", onScroll)

        // Clean up the scroll event listener when the component unmounts
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Function to update the active link in the navigation bar
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        // Navigation bar component with Bootstrap styling
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Navigation links with conditional class 'active' based on activeLink state */}
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("aboutme")}>About Me</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}>Let's Connect</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://juancodes.blogspot.com/"><img src={"https://www.iconpacks.net/icons/1/free-blogger-icon-107-thumb.png"} alt="" /></a>
                            <a href="https://www.linkedin.com/in/juan-viljoen-409895245/"><img src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"} alt="" /></a>
                            <a href="https://github.com/JuanGaljoen"><img src={"https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

