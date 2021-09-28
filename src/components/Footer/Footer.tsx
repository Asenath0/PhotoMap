import React from 'react'
import { Title, Blue, FooterWrapper, Paragraph, Foot } from './FooterStyle'

const Footer = () => {
    return (
        <div>
        <FooterWrapper>
            <div>
            <Title>Photo<Blue>Map</Blue></Title>
            <Paragraph>Find out where your picture was taken in just a few clicks!</Paragraph>
            <Paragraph>Store your images on our servers and browse though them to remind yourself where they were taken.</Paragraph>
            </div>

            <div>
                <h3>Creators:</h3>
                <ul> 
                    <li>Katarzyna Pstrokońska</li>
                    <li>Jakub Frątczak</li>
                </ul>
                
            </div>
        </FooterWrapper>
         
        </div>
    )
}

export default Footer
