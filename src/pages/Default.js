import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero'
import nf from '../images/nf.jpg'

const Default = () => {
   return (
      <DEFAULT>
         <Hero bgimg={nf} heading="404: page not found" py="8rem"/>
         <div className="content">
            <h3>Page was not found.</h3>
            <p>Consider visiting our <Link to="shop">store</Link>, where you're always welcome.</p>
            <Link to="/" className="bttn bttn-blue">Back to Home</Link>
         </div>
      </DEFAULT>
   )
}

export default Default

const DEFAULT = styled.div`
text-align:center;
#Hero{
   color:var(--offwhite);
}
.content{
   padding:5rem 0;
   h3{
      font-size:3rem;
      margin-bottom:2rem;
   }
   p{
      font-size:1.2rem;
      margin-bottom:2rem;
      /* a,a:visited{color:pink;} */
   }
}
`;