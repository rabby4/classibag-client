import { useState } from 'react';

// bootstrap components
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// local file
import logo from '../../assets/logo.webp'

// react icons
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="secondBgColor py-3">
                <Container>
                    <Navbar.Brand href="#home" className='flex-grow-1'>
                        <Image src={logo}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-6 fw-medium navLinks d-flex gap-5">
                            <NavLink to='/' className='mediumFont secHoverText'>Home</NavLink>
                            <NavLink to="/collections" className='mediumFont secHoverText'>Collections</NavLink>
                            <NavLink to="/blog" className='mediumFont secHoverText'>Blog</NavLink>
                            <NavLink to="/about" className='mediumFont secHoverText'>About</NavLink>
                            <NavLink to="/contact" className='mediumFont secHoverText'>Contact</NavLink>
                            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <HiOutlineUser className='fs-3 text-dark'></HiOutlineUser>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <HiOutlineHeart className='fs-3 text-dark'></HiOutlineHeart>
                            </Nav.Link>
                            <Nav.Link onClick={handleShow} className="me-2 d-flex align-items-center">
                                <HiOutlineShoppingBag className='fs-3 text-dark'></HiOutlineShoppingBag>
                                <p className='mb-0 ms-2 text-dark'>$100.00</p>
                            </Nav.Link>
                            <Offcanvas show={show} onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;