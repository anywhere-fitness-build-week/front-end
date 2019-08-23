import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { setUseProxies } from 'immer';
import { isUserWhitespacable } from '@babel/types';




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

    useEffect(() => {
        if(status) {
            setUser([...user, status])
        }
    }, [status])

    return(
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
                <button type='submit'>Submit</button>
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
        username: Yup.string().required('please enter your username'),
        fullname: Yup.string().required('please enter your full name'),
        password: Yup.string().min(8).required('please enter your password')
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log(values, 'inside handlesubmit')
        Axios
            .post('https://reqres.in/api/users', values)
            .then( res => {
                console.log(res.data, 'inside axios post, handlesubmit, userloginform')

                setStatus(res.data)
                resetForm()
            })
            .catch(denied => console.log(denied))
    }
})

const ClientLoginForm = formikHOC(UserLogin)

export default ClientLoginForm