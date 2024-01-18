import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../../App';
import logo from '../../../images/Asset 1.png';
import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbars = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

    useEffect(() => {
        fetch('https://desolate-falls-67613.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsNavbarScrolled(true);
            } else {
                setIsNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                fixed="top"
                expand="lg"
                className={isNavbarScrolled ? 'navbar-scroll' : ''}
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="" className="img-fluid" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/" className="nav-link-line">Home</Nav.Link>
                        <Nav.Link href="about" className="nav-link-line">About Us</Nav.Link>
                        <Nav.Link href="portfolio" className="nav-link-line">Our Portfolio</Nav.Link>
                        <Nav.Link href="team" className="nav-link-line">Our Team</Nav.Link>
                        {isAdmin ? (
                        <Link
                        className="btn btn-primary btn-brand"
                        to="/allService"
                        >
                        Admin Panel
                        </Link>
                        ) : (
                        <Nav.Link href="#contact" className="nav-link-line">Contact Us</Nav.Link>
)}
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbars;
