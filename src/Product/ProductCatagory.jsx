import React from 'react'
import product from './product.json'
import { CardGroup,Container,Row,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './product.css'


export const ProductCatagory = () => {
    return (
        <div><br /><br />
            <h1>OUR PRODUCTS</h1>
            <Container>

                <CardGroup>
                    <Row>
            {
                product.Product.map((prod)=>(
                    <Col lg={4} md={4} sm={6} ><br />
                    <Link to={`/psubcat/${prod.p_name}`} key={prod.p_id} style={{textDecoration:'none'}}>
                    <Card className="car" key={prod.s_id}>
                      <Card.Img variant="top" src={prod.img} width="200px" height="300px" />
                      <Card.Body>
                        <Card.Title style={{color:'black'}}>{prod.p_name}</Card.Title>
                     
                      </Card.Body>
                   
                    </Card>
                    </Link>
                    </Col>
                ))
            }
            </Row>
            </CardGroup>
              </Container>
        </div>
    )
}
