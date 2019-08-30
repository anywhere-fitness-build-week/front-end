import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Home = () => {

    var LinkDiv = styled.div`
        display: flex;
        flex-direction: column;
        flexwrap: wrap;
        max-width: 300px;
        justify-content: space-evenly;
    `;

    var LinkButton = styled.button`
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
            
            <LinkDiv>
                Insert webpt9's landing page
                <Link to='/client-register'><LinkButton>Client Register</LinkButton></Link>
                <Link to='/client-login'><LinkButton>Client Login</LinkButton></Link>
            </LinkDiv>
        </div>
    )
};

export default Home;