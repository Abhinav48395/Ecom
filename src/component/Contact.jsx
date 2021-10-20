import React from 'react'
import './com.css'
import contact from './contact.webp'
import './com.css'

export const Contact = () => {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
                   <img src={contact} alt="" className="contact" />
               </div>
               </div>
           <div className="container">
              
             
              
               <div className="row">
                   <div className="col" ><br />
                       <h1>JOYCART Help Center | 24x7 Customer Care Support</h1>
                   </div>
               </div><br />
              
               <div className="row">
                   <div className="col-lg-4 col-sm-12"><br /><br /><br /><br />
                   <div className="area1">
                   <h4>Call us directly at</h4>
                   <p>+35315124400</p>
                   </div>
                   

                   </div>
                   <div className="col-lg-8 col-sm-12">
                      
                       <div className="border">
                       <h3>CONTACT US</h3><br />
                           <form action="">
                               <input type="text" name="first name" placeholder="First name" id="" /><br /><br />
                               <input type="text" name="" id="" placeholder="Last name"/><br /><br />
                               <input type="email" name="" id="" placeholder="email" /><br /><br />
                               <input type="number" name="" id="" placeholder="phone number"/><br /><br />
                               <input type="text" name="" id="" placeholder="Message" /><br /><br />
                               <textarea name="" id="" cols="37" rows="4"></textarea><br /><br />
                               <button type="submit">Send Message</button>
                           
                           </form>
                       </div>
                   </div>
               </div>
           </div>
          
        </>
    )
}
