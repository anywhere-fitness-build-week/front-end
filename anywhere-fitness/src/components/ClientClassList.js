import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const ClientClassList = () => {
    const [ classes, setClasses ] = useState([])



    if(token == undefined){
        console.log('token is undefined')
    }
    else(
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
        )
        


    

    var token = localStorage.getItem('token')

    console.log(localStorage.getItem('token'), 'inside ClientClassList')

    return(
        <div>
            {/* {classes.forEach(cv => {
                return(<div>{cv.name}</div>)
            })} */}
        </div>
        
    )


}

export default ClientClassList