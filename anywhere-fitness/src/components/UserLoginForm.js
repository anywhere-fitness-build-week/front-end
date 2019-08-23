import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';




const UserLogin = ({ errors, touched, values, status }) => {

    const [ user, setUser ] = useState([])

    // useEffect(() => {
    //     Axios
    //         .post('https://anywhere-fitness-azra-be.herokuapp.com/api/auth/register')
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch
    // }, [])


    const ThisDiv = styled.div`
    width: 200px;
    margin: 10px;
    background: cyan;
    `;

    return(
        <section className='user-login-form'>
            <Form>
                <Field 
                    component='input'
                    type='text'
                    name='username'
                    placeholder='Username'
                />
                <Field 
                    component='input'
                    type='text'
                    name='fullname'
                    placeholder='Full Name'
                />
                <Field 
                    component='input'
                    type='password'
                    name='password'
                    placeholder='Password'
                />
            </Form>
        </section>
    )
}

const formikHOC = withFormik({
    mapPropsToValues({ username, fullname, password }) {
        return {
            username: username || '',
            fullname: fullname || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('please enter your email address'),
        client: Yup.string().required('please enter your name'),
        password: Yup.string().min(8).required('please enter your password')
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        Axios
            .post('https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-register', values)
            .then( res => {
                debugger
                console.log(res.data, 'inside axios post, handlesubmit, userloginform')
                setStatus(res.data)
                resetForm()
            })
    }
})

const UserLoginForm = formikHOC(UserLogin)

export default UserLoginForm