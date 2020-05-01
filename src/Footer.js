import React from 'react'
import styled from 'styled-components'
//import { Link } from 'react-router-dom'

const FootContainer = styled.section`
background-color: #C9FFE5;
width: 100%;
padding: 2em;
display: flex;
justify-content: space-evenly;
`
const FormContainer = styled.section `
padding: 2em;
input[type=submit]:hover {
 box-shadow: 2px 2px #FF5500 ;
`


export const Footer = () => {
  
    return (
      <FootContainer>
            <h1>This is a footer</h1>
         <FormContainer>
            <label>Subcribe to our newsletter</label>
            <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />
    <input type="submit" value="Submit" />
        </FormContainer>  

      </FootContainer>
    )
}
