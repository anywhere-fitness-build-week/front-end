import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserLogin = ({ errors, touched, values, status }) => {

    const [ user, setUser ] = useState({})


    useEffect(() => {
        if(status) {
            setUser( status )
        }
        
        localStorage.setItem('token', user.token)

    }, [status])

    var LogSubmit = styled.button`
        border-radius: 5px;
        min-width: 75px;
        height: auto;
        margin: 20px;
        color: smokewhite;
        background: #FF7E79;
        font-size: 20px;
    `;

    var LogSection = styled.section`
        display: flex;
        flex-direction: column;
        width: 200px;
    `;

    return(
        <section className='client-login-form'>
            <div>Anywhere Fitness Log In:</div>
            <Form className='log-form'>
                <LogSection>
                    <Field 
                        component='input'
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                    {touched.username && errors.username && (
                        <p className='error'>{errors.username}</p>
                    )}                 

                    <Field 
                        component='input'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    {touched.password && errors.password && (
                        <p className='error'>{errors.password}</p>
                    )}                 
                    <LogSubmit type='submit'>Submit</LogSubmit>
                </LogSection>
            </Form>
        </section>
    )
}

const formikHOC = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('please enter your username'),
        password: Yup.string().min(8).required('please enter your password')
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        Axios
            .post('https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-login', values)
            .then( res => {
                setStatus(res.data)
                window.location = '/client-login/classes'
                resetForm()
            })
            .catch(denied => console.log(denied))
    }
})

const ClientLoginForm = formikHOC(UserLogin)

export default ClientLoginForm