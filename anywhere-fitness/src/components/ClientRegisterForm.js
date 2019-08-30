import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';




const UserRegister = ({ errors, touched, values, status }) => {

    const [ user, setUser ] = useState([])

    useEffect(() => {
        if(status) {
            setUser([...user, status])
        }
    }, [status])

    return(
        <div>
            <div>Anywhere Fitness Registration:</div>
            <section className='client-registration-form'>
                <Form>
                    <Field 
                        component='input'
                        type='text'
                        name='fullname'
                        placeholder='Full Name'
                    />
                    <Field 
                        component='input'
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                    
                    <Field 
                        component='input'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <p>If you get routed back to the home page you've successfully registered.</p>
                    <button type='submit'>Submit</button>
                </Form>
            </section>
        </div>

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
        username: Yup.string().required('please enter your username'),
        fullname: Yup.string().required('please enter your full name'),
        password: Yup.string().min(8).required('please enter your password')
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        Axios
            .post('https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-register', values)
            .then( res => {
                setStatus(res.data)
                window.location = '/'
            })
            .catch(denied => console.log(denied))
    }
})

const ClientRegisterForm = formikHOC(UserRegister)

export default ClientRegisterForm