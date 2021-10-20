

import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import './product.css'

const Book = () => {


    let history = useHistory()

    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');


    const ValidateErrors = (values) => {
        const errors = {}

        if (!values.Firstname) {
            errors.Firstname = 'Required'
        }

        if (!values.Lastname) {
            errors.Lastname = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!validateEmail.test(values.email)) {
            errors.email = "Wrong Pattern"
        }

        if (!values.number) {
            errors.number = 'Required'
        }

        if (!values.Product) {
            errors.Product = 'Required'
        }

        if (!values.Model) {
            errors.Model = 'Required'
        }
        if (!values.quantity) {
            errors.quantity = 'Required'
        }
        if (values.quantity >15) {
            errors.quantity = 'Maximum 15'
        }
        if (!values.address) {
            errors.address = 'Required'
        }
        return errors

    }




    const formik = useFormik({
        initialValues: {

            Firstname: '',
            Lastname: '',
            email: '',
            number: '',              //Abhinav@100
            Product: '',
            Model: '',
            quantity: '',
            address: ''
        },
        validate: ValidateErrors,
        onSubmit: (values) => {
            history.push("/productcategory")
            console.log(values);
            alert("Booking Sucessfull Continue Your Shopping")


        }
    })

    return (
        <div ><br />

            <div className="book">
                <h1>Contact Details</h1><br />
                <form onSubmit={formik.handleSubmit}>
                    <input type="text" name="Firstname" id="" value={formik.values.Firstname} onChange={formik.handleChange} placeholder="First Name" /><br />
                    {formik.errors.Firstname ? <span className="err">{formik.errors.Firstname}</span> : null}<br />
                    <input type="text" name="Lastname" id="" value={formik.values.Lastname} onChange={formik.handleChange} placeholder="Last Name" /><br />
                    {formik.errors.Lastname ? <span className="err">{formik.errors.Lastname}</span> : null}<br />
                    <input type="email" name="email" id="" value={formik.values.email} onChange={formik.handleChange} placeholder="Email" /><br />
                    {formik.errors.email ? <span className="err">{formik.errors.email}</span> : null}<br />
                    <input type="number" name="number" id="" value={formik.values.number} onChange={formik.handleChange} placeholder="Phone Number" /><br />
                    {formik.errors.number ? <span className="err">{formik.errors.number}</span> : null}<br />
                    <input type="text" name="Product" id="" value={formik.values.Product} onChange={formik.handleChange} placeholder="Product Name" /><br />
                    {formik.errors.Product ? <span className="err">{formik.errors.Product}</span> : null}<br />
                    <input type="text" name="Model" id="" value={formik.values.Model} onChange={formik.handleChange} placeholder="Product Model Number" /><br />
                    {formik.errors.Model ? <span className="err">{formik.errors.Model}</span> : null}<br />


                    <input type="number" name="quantity" id="" value={formik.values.quantity} onChange={formik.handleChange} placeholder="Quantity"  /><br />
                    {formik.errors.quantity ? <span className="err">{formik.errors.quantity}</span> : null}<br />

                 
                    <textarea name="address" id="" cols="83" rows="5" value={formik.values.address} onChange={formik.handleChange} placeholder="Delivery Address "></textarea><br />
                    {formik.errors.address ? <span className="err">{formik.errors.address}</span> : null}<br />
                    <button type="submit">Book Your Product</button><br /><br />
                </form>


            </div>

        </div>
    )
}

export default Book
