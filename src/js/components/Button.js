// @flow
import styled from 'styled-components'

const Button = styled.button`
    border-radius: 50px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    padding: 7px 20px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.primary ? "white" : "blue" };
    background: ${props => props.primary ? "blue" : "white"};
    border: solid 2px "blue";
`
export default Button