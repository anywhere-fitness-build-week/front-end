import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Home = () => {

    var LinkDiv = styled.div`
        display: flex;
        flex-direction: column;
        flexwrap: wrap;
        background: white;
        color: cyan;
        max-width: 300px;
        justify-content: space-evenly;
    `;

    var LinkButton = styled.button`
        border-radius: 5px;
        min-width: 75px;
        height: auto;
        margin: 20px;
        color: smokewhite;
        background: purple;
        font-size: 20px;
    `;
    return(
        <div>
            Insert webpt9's landing page
            <LinkDiv>
                <Link to='/client-register'><LinkButton>Client Register</LinkButton></Link>
                <Link to='/client-login'><LinkButton>Client Login</LinkButton></Link>
            </LinkDiv>
        </div>
    )
};

export default Home;