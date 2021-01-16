import React from 'react';
import styled from 'styled-components';

const Footer = () => {
   return (
      <FOOTER>
         <div className="main-contain">
            <h1 style={{fontSize:'1rem'}}>Beanetics Coffee Roasters</h1>
            <p>The Evolution of Better Coffee</p>
            <p>&copy; {new Date().getFullYear()}</p>
            <p className="disclaimer">This site has been created to be used for educational purposes only. All information and assets come from <a href="http://beanetics.com" target="_blank" rel="noreferrer">Beanetics.com</a>.</p>
         </div>
      </FOOTER>
   )
}

export default Footer

const FOOTER = styled.footer`
   position:relative;
   background-color:var(--black);
   color:var(--offwhite);
   line-height:1.6;
   padding:1rem 10px;
   /* padding:.5rem; */
   .disclaimer{
      color:rgb(98,98,98);
      a{color:rgb(128,128,128);}
   }
`;