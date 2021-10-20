import React, { useState } from 'react'
import product from './product.json';
import { Card, CardGroup, Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './product.css'
import { useCart } from 'react-use-cart'




export const ProductSub = ({ match }) => {

    const { addItem } = useCart();

    const [searchTerm, setSearchTerm] = useState("")


    const value = product.Product.find((data) => data.p_name === match.params.pname);
    console.log("Sub value", value);



    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col"><br /><br />
                        <input
                            type="text"
                            placeholder="search"
                            className="search"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />
                    </div>
                </div>

            </div>

            <Container>
                <CardGroup><br />

                    <Row>

                        {

                            value.subCatagory.filter((val) => {
                                if (searchTerm === '') {
                                    return val;
                                }
                                else if (
                                    val.company.toLowerCase().includes(searchTerm.toLowerCase())


                                ) {
                                    return val;
                                }
                            }).map((productvalue) => (

                                <Col lg={4} md={4} sm={6}><br /><br />
                                    <div className="mycard">
                                        <Link to={`/productdetails/${match.params.pname}/${productvalue.s_id}`} style={{ textDecoration: 'none' }} >
                                            <Card className="car" key={productvalue.s_id}>
                                                <Card.Img variant="top" src={productvalue.image} height="300px"  />

                                                <Card.Body>
                                                    <Card.Title style={{ color: 'black' }}>{productvalue.company}</Card.Title>
                                                    <Card.Text style={{ color: 'black' }}>₹ {productvalue.price}

                                                    </Card.Text>
                                                    <Card.Text style={{ color: 'green', fontWeight: 'bolder' }}>100% assured</Card.Text>
                                                    <Card.Text className="fes">Festival Offer

                                                    </Card.Text>



                                                </Card.Body>

                                            </Card>
                                        </Link>
                                    </div>
                                </Col>
                            )
                            )
                        }

                    </Row>
                </CardGroup>
            </Container>
        </div>
    )
}
