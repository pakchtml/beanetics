import React from 'react';
import styled from 'styled-components';

const Banner = ({...props}) => {
   return (
      <BANNER {...props}>
         <div className="content-banner">
            {props.heading && <h3>{props.heading}</h3>}
            {props.text && <p>{props.text}</p>}
         </div>
      </BANNER>
   )
}

export default Banner

const BANNER = styled.div`
background:var(--pri-blue);color:var(--pri-white);
text-align:center;
padding:2rem 3rem;
.content-banner{
   max-width:1200px;margin:0 auto;
   h3{
      text-transform:capitalize;
      font-family: 'Roboto Condensed', sans-serif;font-size:2rem;line-height:1.6;
   }
   p{
      font-size:1.1rem;line-height:1.4;
      text-align:left;
   }
}
`;