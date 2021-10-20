import React from 'react'
import { useFormik } from 'formik'
import { Link,useHistory } from 'react-router-dom'

import axios from 'axios'
import './auth.css'

export const Sign = () => {


    let history=useHistory()

    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');

    const ValidateErrors = (values) => {
        const errors = {}

        if (!values.username) {
            errors.username = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!validateEmail.test(values.email)) {
            errors.email = "Wrong Pattern"
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (!validatePassword.test(values.password)) {
            errors.password = "Wrong Pattern"
        }
        return errors

    }


    const formik = useFormik({
        initialValues: {

            username: '',
            email: '',
            password: ''              //Abhinav@100

        },
        validate: ValidateErrors,
        onSubmit: (values) => {
            history.push("/login")
            console.log(values);
            axios.post('https://project-node-1.herokuapp.com/postLoginData', values)
                .then((res) => {
                    console.log("Axios res:", res);
                    window.sessionStorage.setItem("Token", res.data.token)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })

    return (
        <>

         
                        <div className="bor">

                            <form onSubmit={formik.handleSubmit}>
                                <h1>SIGN UP</h1><br />
                                <input type="text" name="username" placeholder="User Name" value={formik.values.username} onChange={formik.handleChange} /><br />
                                {formik.errors.username ? <span className="err">{formik.errors.username}</span> : null}<br />

                                <input type="email" name="email" placeholder="Your Email" id="" value={formik.values.email} onChange={formik.handleChange} /><br />
                                {formik.errors.email ? <span className="err">{formik.errors.email}</span> : null}<br />

                                <input type="password" name="password" placeholder="Password" id="" value={formik.values.password} onChange={formik.handleChange} /><br />
                                {formik.errors.password ? <span className="err">{formik.errors.password}</span> : null}<br />

                                <button type="submit" className="sign">SIGN UP</button><br /><br />
                                <p>Already a Member?</p>
                                <Link to="/login">Login</Link>

                            </form>

                            </div>
        </>
    )
}
