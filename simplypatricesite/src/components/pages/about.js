import React from "react";
import { Route } from "react-router-dom";
import styled from 'styled-components';

import colourscheme from "../colourscheme";

let StyledMain = styled.main`
    display: flex;
    align-items: center;
    
    h1 {
        color: black;
        width: 70%;
        font-size: 500;
        text-align: center;
        font-family: "Arial", sans-serif;
    }
`

let About = () => {
    return(
        <StyledMain>
            <h1>Hi! I'm Patrice</h1>
        </StyledMain>
    );
}

export default About