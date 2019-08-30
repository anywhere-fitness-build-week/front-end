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

    var RegSection = styled.section`
        display: flex;
        flex-direction: column;
        width: 200px;
    `;

    var RegSubmit = styled.button`
        border-radius: 5px;
        min-width: 75px;
        height: auto;
        margin: 20px;
        color: smokewhite;
        background: #FF7E79;
        font-size: 20px;
    `;

    return(
        <div>
            <div>Anywhere Fitness Registration:</div>
            <section className='client-registration-form'>
                <Form className='reg-form'>
                    <RegSection>
                        <Field 
                            component='input'
                            type='text'
                            name='fullname'
                            placeholder='Full Name'
                        />
                            {touched.fullname && errors.fullname && (
                                <p className='error'>{errors.fullname}</p>
                            )}
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
                    </RegSection>

                    <p>If you get routed back to the home page you've successfully registered.</p>
                    <RegSubmit type='submit'>Submit</RegSubmit>
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
                window.location = 'https://anywhere-fitness-landing-page.netlify.com/'
            })
            .catch(denied => console.log(denied))
    }
})

const ClientRegisterForm = formikHOC(UserRegister)

export default ClientRegisterForm