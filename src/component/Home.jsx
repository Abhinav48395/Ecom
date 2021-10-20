import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'
import car from './carousal.jpg'
import car1 from './play.webp'
import car2 from './phone.jfif'
import phone from './iphonw13.png'
import { Link } from 'react-router-dom'
import mac from './macbook.jpg'
import xbox from './xbox.png'
import play from './play5.jpg'
import tv from './tv.png'
import tablet from './tablet.webp'
import './com.css'


export const Home = () => {
    return (
        <>



            {/* <div className="container-fluid"> */}
              
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car}
                                alt="First slide"
                                height="540px"
                                width="1000px"
                            />
                            <Carousel.Caption>
                                <h3>30% Discount on Laptop</h3>
                                <p>Grab your deals</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car1}
                                alt="Second slide"
                                height="540px"
                                width="1000px"
                            />

                            <Carousel.Caption>
                                <h3>20% Discount on gaming</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car2}
                                alt="Third slide"
                                height="540px"
                                width="1000px"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                
            {/* </div> */}
            
          <div className="container-fluid" className="iphone" ><br />
              <div className="row">
                  <div className="col">
                      <h1 style={{color: "white"}}>iPhone13 Pro</h1>
                      <p style={{color: "white"}}>Oh.So.Pro</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={phone} alt="" className="img-fluid" height="800px" />

                  </div>
              </div>
          </div>

          <div className="container-fluid" style={{backgroundColor: "white"}}><br />
              <div className="row">
                  <div className="col">
                      <h1>Apple MacBook Air</h1>
                      <p>Your new superpower</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={mac} alt="" className="img-fluid" width="1300px" />

                  </div>
              </div>
          </div>
           
          <div className="container-fluid" style={{backgroundColor: "white"}}><br />
              <div className="row">
                  <div className="col-6" style={{backgroundColor: "#7CFC00"}}> <br /><br />
                      <h1>XBOX SERIES X</h1>
                      <p>The fastest, most powerful Xbox ever.</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={xbox} alt="" className="img-fluid" width="500px" />

                  </div>
                  <div className="col-6" style={{backgroundColor: "black"}}><br /><br />
                      <h1 style={{color: "white"}}>Apple MacBook Air</h1>
                      <p style={{color: "white"}}>Play has no limit</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={play} alt="" className="img-fluid" width="600px" height="400px" />

                  </div>
              </div>
          </div>



          <div className="container-fluid" style={{backgroundColor: "white"}}><br />
              <div className="row">
                  <div className="col-6" style={{backgroundColor: "#FFFF00"}}> <br /><br />
                      <h1>Sony Bravia</h1>
                      <p>Its Different.</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={tv} alt="" className="img-fluid" height="500px" width="600px" />

                  </div>
                  <div className="col-6" style={{backgroundColor: "#9400D3"}}><br /><br />
                      <h1 style={{color: "white"}}>Yoga Smart Tab </h1>
                      <p style={{color: "white"}}>Its smarter Than You</p>
                      <Link as={Link} to="/productcategory">Learn More</Link><br />
                      <img src={tablet} alt=""  className="img-fluid" width="600px" height="400px" />

                  </div>
              </div>
          </div>
            


        </>
    )
}
