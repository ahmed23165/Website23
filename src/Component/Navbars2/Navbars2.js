import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Navbars2/Navbars2.css';
const Navbars2 = () => {
  return (
    <div className='navbars88'>
       <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home"  style={{paddingLeft: '6rem'}}><h1>Dogger<span style={{color: 'greenyellow'}}>.</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
        

      <div  className='f2'>  
       
          <Nav className="me-auto">
          <Nav.Link href="#pricing"> Home</Nav.Link>
            <NavDropdown title="About" href="#About">
              <NavDropdown.Item href="#action/3.1">Trainers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pricing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Blog</NavDropdown.Item>
              
          
              
            </NavDropdown>
            <Nav.Link href="#action/3.1">Trainers</Nav.Link>
            <Nav.Link href="#pricings">Services</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
      
<div id='pricing' ></div>

          </Nav>
        
        </div>
          <Nav>
        
            
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>




  )
}

export default Navbars2
 
//<Navbar.Toggle aria-controls="responsive-navbar-nav" />
//<Navbar.Collapse id="responsive-navbar-nav">