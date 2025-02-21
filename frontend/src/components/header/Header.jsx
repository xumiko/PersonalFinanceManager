import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// export const Header = () => {
//   return (


// <Navbar expand="lg" className="navbar">
//       <Container>
//         <Navbar.Brand href="#home">BudgetBuddy</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#service">Service</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//           <Nav className="ms-auto"> {/* This moves the login/register buttons to the right */}
//           <Link to="/login">
//               <Button className="me-2">Login</Button> 
//               </Link>
//               <Link to="/register">
//               <Button >Register</Button>
//               </Link>
              
//             </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>


//   );
// };

 

export const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">BudgetBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            <Nav.Link as={Link} to="/notFound">Fleet</Nav.Link>
            <Nav.Link as={Link} to="/notFound">Testimonials</Nav.Link> 
            <Nav.Link as={Link} to="/notFound">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button as={Link} to="/login" className="me-2">Login</Button> 
            <Button as={Link} to="/register">Register</Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

