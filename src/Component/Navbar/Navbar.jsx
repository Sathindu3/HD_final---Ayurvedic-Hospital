// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import { Link } from 'react-router-dom';


// const Navbar = () => {

//     const [menu, setMenu] = useState("overview")
//     return (

//         <div className="nav-items">
//             <div className="logo">
//                 <h1>Ayurvedic LOGO</h1>
//             </div>
//             <div className="nav-link">
//                 <ul>
//                     <li onClick={() => { setMenu("overview") }}><Link style={{ textDecoration: 'none' }} to='/'>Overview</Link>{menu === "overview" ? <hr /> : <></>}</li>
//                     <li onClick={() => { setMenu("channeling") }}><Link style={{ textDecoration: 'none' }} to='/channeling'>Channeling</Link>{menu === "channeling" ? <hr /> : <></>}</li>
//                     <li onClick={() => { setMenu("treatment") }}><Link style={{ textDecoration: 'none' }} to='/treatment'>Treatment</Link>{menu === "treatment" ? <hr /> : <></>}</li>
//                     <li onClick={() => { setMenu("products") }}><Link style={{ textDecoration: 'none' }} to='/Products'>Products</Link>{menu === "products" ? <hr /> : <></>}</li>
//                     <li onClick={() => { setMenu("packages") }}><Link style={{ textDecoration: 'none' }} to='/packages'>Products</Link>{menu === "packages" ? <hr /> : <></>}</li>

//                 </ul>
//             </div>
//             <div className="nav-user">
//                 <div className="profile">
//                     Profile
//                 </div>
//                 <div className="login">
//                     <h2>Login</h2>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Navbar
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='navigation-bar'>
                <Navbar.Brand className='navigation-logo' href="./">Ayurvedhaa Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >             
                        <Nav.Link href="./">Overview</Nav.Link>
                        <Nav.Link href="./Channeling">Channeling</Nav.Link>
                        <Nav.Link href="./Treatment">Treatment</Nav.Link>
                        <Nav.Link href="./Products">Products</Nav.Link>
                        <Nav.Link href="./packages">Packages</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>

                    <Button variant="outline-success">Login</Button>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
