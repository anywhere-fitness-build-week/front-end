import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import formik from 'formik';




const AxiosTest = props => {

    // useEffect(() => {
    //     axios
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


        <ThisDiv>Hello world</ThisDiv>
    )
}

export default AxiosTest