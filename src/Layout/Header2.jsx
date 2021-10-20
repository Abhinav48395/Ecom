import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'
import cart from './cart.png'



export const Header2 = () => {
    return (
        <>

            <Nav className="justify-content-center navcol" fixed="top" activeKey="/home" >
                <Nav.Item>
                    <Nav.Link as={Link} to="/productcategory">PRODUCTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" as={Link} to="/">HOME</Nav.Link>
                </Nav.Item>


            </Nav>



        </>
    )
}
