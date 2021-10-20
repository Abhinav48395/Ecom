import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


export const Footer = () => {
    return (
        <><br /><br /><br /><br />




            <div className="container-fluid footcol" ><br />
                <div className="container">

                    <div className="row">
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>ABOUT</p>
                            <Link to="/About" style={{ color: 'white' }}>About Us</Link><br /><br />
                            <Link to="/Payments" style={{ color: 'white' }}>Payments</Link><br /><br />
                            <Link to="/JoyCartStories" style={{ color: 'white' }}>JoyCartStories</Link><br /><br />
                            <Link to="/Shipping" style={{ color: 'white' }}>Shipping</Link>
                        </div><br />
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>HELP
                            </p>

                            <Link to="/Privacy" style={{ color: 'white' }}>Privacy</Link><br /><br />
                            <Link to="/Cancellation" style={{ color: 'white' }}>Cancellation</Link><br /><br />
                            <Link to="/FAQ" style={{ color: 'white' }}>FAQ</Link><br /><br />
                            <Link to="/Report" style={{ color: 'white' }}>Report</Link>
                        </div><br />
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>POLICY</p>
                            <Link to="/Return" style={{ color: 'white' }}>Return</Link><br /><br />

                            <Link to="/Security" style={{ color: 'white' }}>Security</Link><br /><br />

                          
                        </div><br />
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>SOCIAL</p>
                            <a href="https://www.facebook.com/" style={{ color: 'white' }}>FaceBook</a><br /><br />
                            <a href="https://twitter.com/?lang=en" style={{ color: 'white' }}>Twitter</a><br /><br />
                            <a href="https://www.youtube.com/" style={{ color: 'white' }}>Youtube</a>

                        </div><br />
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>Mail Us:</p>
                            <address>Joykart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India</address>
                        </div><br />
                        <div className="col-lg-2 col-sm-4">
                            <p style={{ color: 'grey', fontWeight: 'bolder' }}>Registered Office Address:</p>
                            <address>Joykart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India

                                CIN : U51109KA2012PTC066107

                                Telephone: 1800 202 9898</address>
                        </div><br />
                    </div><br /><br />
                    <hr width="100%" color="white" />
                    <div className="row">

                        <div className="col"> <h6>© 2007-2021 JoyKart.com</h6></div>

                    </div>
                </div>
            </div>
        </>
    )
}
