import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import '../Navbars/Navbars.css';
const Navbars = () => {
  return (
    <div >
       <Navbar collapseOnSelect expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="#home"><h1>colorlib<span style={{color: 'greenyellow'}}>.</span></h1></Navbar.Brand>
        <Nav.Link href="#features">+Dogger</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className='flex1'>
          <Nav className="me-auto">
          
          <Nav>
          <Nav.Link href="#deets"><HiMiniComputerDesktop style={{fontSize:'250%'}}/></Nav.Link>
          <Nav.Link href="#deets"><FaTabletAlt  style={{fontSize:'200%'}}/></Nav.Link>
            <Nav.Link href="#deets"><AiOutlineMobile style={{fontSize:'200%'}} /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <IoCart style={{fontSize:'200%'}}/>
            </Nav.Link>
            <Nav.Link href="#deets"><RxCross1 style={{fontSize:'200%'}}/></Nav.Link>
          </Nav>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars;
