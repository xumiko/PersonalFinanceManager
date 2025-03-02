import React from 'react';
import './dashboardNavbar.css';
import PropTypes from 'prop-types'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const DashboardNavbar = ({onLogout}) => {


    // Remove token from localStorage
    localStorage.removeItem('authToken');
    console.log('Logged out!');
    
    // Redirect to login page after logging out
    // window.location.href = '/login'; // or use React Router's `history.push('/login')`


    return (
    //   <nav className="dashboard-navbar">
    //     <ul>
    //       <li><a href="/dashboard">Dashboard</a></li>
    //       <li><a href="/profile">Profile</a></li>
    //       <li><a href="/" onClick={onLogout}>Logout</a></li>  {/* Logout link */}
    //     </ul>
    //   </nav>


       <Navbar expand="lg" className="navbar">
       <Container className='dash-nav'>
         <Navbar.Brand className='heading' href="/dashboard">Dashboard
         <p>monitor your financial activities</p>
         </Navbar.Brand>
         
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link> 
             <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
             <Nav.Link as={Link} to="/profile">Transactions</Nav.Link> 
{/* 
            
             <Nav.Link as={Link} to="/profile">Add Category</Nav.Link> 
             <Nav.Link as={Link} to="/profile">Categories</Nav.Link>  */}

             <Nav.Link as={Link} to="/notFound">Settings</Nav.Link>
           </Nav>
           <Nav className="ms-auto">
             <Button  className='logout'><a href="/" onClick={onLogout}>Logout</a></Button> 
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    );
  };

  DashboardNavbar.propTypes = {
    onLogout: PropTypes.func.isRequired,  // onLogout should be a required function
  };

export default DashboardNavbar;


