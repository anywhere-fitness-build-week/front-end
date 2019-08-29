import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const ClientClassList = () => {
    const [ classes, setClasses ] = useState([])


    var token = localStorage.getItem('token')

    useEffect(() => {
    Axios({
            method: 'get',
            url: 'https://anywhere-fitness-azra-be.herokuapp.com/api/classes',
            headers: {'authorization' : token}
        }).then(res => {
            setClasses(res.data)
            console.log(res, 'inside useEffect inside ClientClassList')
        }).catch(err => console.log(err))
    }, [])



    var ClientInfo = styled.div`
        max-width: 800px;
    `;

    

    console.log(localStorage.getItem('token'), 'inside ClientClassList')
    
    if(token == 'undefined') {
        return(<h2>If nothing displays, please go back to the home or login page and log in again.</h2>)
    } else {
        return(
            <ClientInfo>
                <h1>Class List:</h1>
                
                
                {classes.map(cv => {
                    return(
                    <div key={cv.id}>
                        <h4>Instructor id: {cv.instructor_id}</h4>
                        <h5>Class: {cv.name}</h5>
                        <p>Class information: Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring pea sprouts fava bean.</p>

                
                    
                    </div>
                    )
                })}
            </ClientInfo>
            
        )
    }




}

export default ClientClassList