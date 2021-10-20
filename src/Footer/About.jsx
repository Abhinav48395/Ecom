import React from 'react'
import './footer.css'
import { Card, CardGroup, Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import about from './about.jpg'
import about2 from './about2.png'


export const About = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12" >
                        <div className="head">
                            <div className="head4">
                                <h1 style={{ color: 'rgb(40, 40, 43)' }}>THE STORY OF JOYKART</h1>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="head2">
                            <h2 style={{ color: 'white' }}>LAUNCHED IN OCTOBER 2007</h2>
                            <p style={{ color: 'white' }}>JoyKart is India's leading e-commerce marketplace with over 80 million products across</p>

                        </div>
                    </div>
                </div><br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-3 col-12" >
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Mobile</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Laptop</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Tablet</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Gaming</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                </div><br /><br />
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>TV</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Washing Machine</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Air Conditioner</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Card style={{ width: '16rem' }}>
                            <Card.Body style={{ backgroundColor: 'rgb(2, 117, 216)' }}>
                                <Card.Title style={{ color: 'white' }}>Refrigrator</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                </div><br /><br />

                <div className="row">
                    <div className="col">
                        <div className="head3">
                            <h2 style={{ color: 'white' }}>STARTED BY A TEAM OF 2</h2>
                            <p style={{ color: 'white' }}>today Joykart is a large company with</p>
                        </div>
                    </div>
                </div><br /><br />
                <div className="row">
                    <div className="col-lg-3">
                        <Card style={{ width: '14rem',backgroundColor: 'rgb(2, 117, 216)', borderRadius:'100px' }}>
                            <Card.Body >
                                <Card.Title style={{ color: 'white' }}>100 million</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                   registered users
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '14rem',backgroundColor: 'rgb(2, 117, 216)', borderRadius:'100px' }}>
                            <Card.Body >
                                <Card.Title style={{ color: 'white' }}>100 thousand</Card.Title>
           
                                <Card.Text style={{ color: 'white' }}>
                                   sellers
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '14rem',backgroundColor: 'rgb(2, 117, 216)', borderRadius:'100px' }}>
                            <Card.Body >
                                <Card.Title style={{ color: 'white' }}>10 million</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                   daily page visits
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '14rem',backgroundColor: 'rgb(2, 117, 216)', borderRadius:'100px' }}>
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }}>8 million</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                   shipments/month
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    </div><br /><br />
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                        <img src={about} alt="" className="img-fluid" style={{borderRadius:'100px'}}  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                        <img src={about2} alt="" className="img-fluid" style={{borderRadius:'100px'}}  />
                        </div>
                    </div>
                    
            </div>
        </>
    )
}
