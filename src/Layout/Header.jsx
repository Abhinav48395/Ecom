import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../App.css'
import cart from './cart.png'

export const Header = () => {


    let history = useHistory()

    function Logout() {
        window.sessionStorage.clear()
        history.push("/login")
        alert("sucessfully logout")
    }
    return (
        <>
        
            <Navbar  className="bar sticky-top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand">JOY<span style={{fontSize:'25px',color:'rgb(2, 117, 216)'}}>KART</span></Navbar.Brand>
                    <Nav className="me-auto">
                       
                        <Nav.Link className="element" as={Link} to="/sign">Sign Up</Nav.Link>
                        <Nav.Link className="element" as={Link} to="/login">login</Nav.Link>
                        <Nav.Link className="element" as={Link} onClick={Logout} to="/login">logout</Nav.Link>
                        <Nav.Link className="element" as={Link} to="/contact">Contact</Nav.Link>
                      
                        {/* <Nav.Link  as={Link} to="/cart">
                        <div className="cartcol">
                            <span style={{color:'black'}}>19</span>
                            <img src={cart} height="25px" width="25px" alt="" />
                           
                            </div>
                        </Nav.Link> */}
                      
                    </Nav>
                </Container>
            </Navbar>
      
    </>
    )
}
