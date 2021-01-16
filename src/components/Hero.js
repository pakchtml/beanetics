import React from 'react';
import styled from 'styled-components';
import bgimg from '../images/herobg.jpg';

const Hero = ({children, heading, ...props}) => {

   return (
      <HERO id="Hero" {...props}>
         <div className="text-content">
            <h3>{heading}</h3>
            {children}
         </div>
      </HERO>
   )
}

export default Hero

const HERO = styled.div`
padding:${props => props.py} ${props => props.px};
.text-content{
   width:50%;
   padding:1rem;
   h3{
      font-family: 'Dancing Script', cursive;
      font-size:3rem;line-height:1.4;
      text-transform:capitalize;
      margin:.5rem 0;
   }
   ${props => props.alignright ? 'margin-left:auto;' : ''}
   @media(max-width:909px){
      width:100%;
      h3{font-size:2rem;}
   }
}
background:
/* linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)), */
url(${props => props.bgimg}) center/cover no-repeat;
@media(max-width:909px){
   background:
   linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),
   url(${props => props.bgimg}) center/cover no-repeat;
}
`;

Hero.defaultProps = {
   bgimg,
   px: '3rem',
   py: '5rem'
};