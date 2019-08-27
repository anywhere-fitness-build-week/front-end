import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserLogin = ({ errors, touched, values, status }) => {

    const [ user, setUser ] = useState({})

    // const [ classes, setClasses ] = useState([])
    

    


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
            setUser( status )
        }
        
        localStorage.setItem('token', user.token)
        

        // var token = localStorage.getItem('token')
        // Axios({
        //     method: 'get',
        //     url: 'https://anywhere-fitness-azra-be.herokuapp.com/api/classes',
        //     headers: {'authorization' : token}
        // }).then(res => {
        //     setClasses(res.data)
        //     console.log(res)
        // }).catch(err => console.log(err))

    }, [status])



    return(
        <section className='client-login-form'>
            <Form>
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
        console.log(values, 'inside handlesubmit')
        Axios
            .post('https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-login', values)
            .then( res => {
                console.log(res.data, 'inside axios post, handlesubmit, userloginform')

                setStatus(res.data)
                window.location = '/client-login/classes'
                resetForm()
            })
            .catch(denied => console.log(denied))
    }
})

const ClientLoginForm = formikHOC(UserLogin)

export default ClientLoginForm