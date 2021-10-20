import React from 'react'
import { Header } from '../Layout/Header'
import { Header2 } from '../Layout/Header2'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Login } from '../auth/Login'
import { Home } from '../component/Home'
import { Contact } from '../component/Contact'
import { Sign } from '../auth/Sign'
import { ProductCatagory } from '../Product/ProductCatagory'
import { ProductSub } from '../Product/ProductSub'
import { Details } from '../Product/Details'
import { Footer } from '../Layout/Footer'
import { Cart } from '../component/Cart'
import { CartProvider } from 'react-use-cart'
import { Cancellation } from '../Footer/Cancellation'
import {FAQ} from '../Footer/FAQ'
import {JoyCartStories} from '../Footer/JoyCartStories'
import {Payments} from '../Footer/Payments'
import {Privacy} from '../Footer/Privacy'
import {Report} from '../Footer/Report'
import {Return} from '../Footer/Return'
import {Security} from '../Footer/Security'
import {Shipping} from '../Footer/Shipping'
import { About } from '../Footer/About'
import  Site  from '../Footer/Site'
import Book from '../Product/Book'


export const Routes = () => {
    return (
        <Router>
            <Header />
            <Header2/>
            <CartProvider>
            <Switch>


                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/sign" component={Sign}></Route>
                <Route exact path="/contact" component={Contact}></Route>

                <Route path="/productcategory" component={ProductCatagory}></Route>
                <Route path="/psubcat/:pname" component={ProductSub}></Route>
                <Route path="/productdetails/:pname/:id" component={Details}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                <Route path="/Cancellation" component={Cancellation}></Route>
                <Route path="/FAQ" component={FAQ}></Route>
                 <Route path="/JoyCartStories" component={JoyCartStories}></Route>
                  <Route path="/Payments" component={Payments}></Route>
                  <Route path="/Privacy" component={Privacy}></Route>
                  <Route path="/Report" component={Report}></Route>
                  <Route path="/Return" component={Return}></Route>
                  <Route path="/Security" component={Security}></Route>
                  <Route path="/Shipping" component={Shipping}></Route>
                  <Route path="/About" component={About}></Route>
                  <Route path="/Book" component={Book}></Route>

            </Switch>
            </CartProvider>
            <Footer></Footer>
        </Router>
    )
}
