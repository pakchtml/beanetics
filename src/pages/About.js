import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'

const About = () => {
   return (
      <ABOUT>
         <Hero heading="About Beanetics" bgimg="https://www.beanetics.com/wp-content/uploads/2015/07/storefront-1024x682.jpg"></Hero>
         <div className="main-contain">
            <p>At Beanetics Coffee Roasters we want our customers to taste the full potential of a coffee bean by experiencing freshly-roasted coffee – before the aroma and taste is eroded through time. If you have never tasted coffee that has been recently roasted, you have never really enjoyed a true coffee experience.</p>
            <p>The evolution of better coffee starts at the source – the country of origin of the green coffee bean. We start by selecting the finest green coffee beans from a variety of growing regions around the world.</p>
            <p>We started roasting coffee as a hobby in our garage, but could not keep up with the demand of friends and family. Today we operate Annandale’s only independently owned micro coffee roasting facility.</p>
            <div className="videos">
               <div className="video">
                  <h3>the roasting process</h3>
                  <video src="https://www.beanetics.com/wp-content/uploads/2013/08/beanetics.mp4" type="video/mp4" controls>video not supported in browser.</video>
               </div>
               <div className="video">
                  <h3>beans ready for grinding</h3>
                  <video src="https://www.beanetics.com/wp-content/uploads/2013/12/home-video.mp4" type="video/mp4" controls>video not supported in browser.</video>
               </div>

            </div>
         </div>
      </ABOUT>
   )
}

export default About

const ABOUT = styled.div`
   #Hero{
      color:var(--maroon);
      h3{text-shadow:2px 2px 4px var(--yellow);}
   }
   .main-contain{
      padding:3rem 0;
      line-height:1.6;
      p{
         margin:0 0 1rem 0;
         &:last-of-type{margin-bottom:unset;}
      }
      .videos{
         padding:2rem 0;
         display:grid;
         grid-template-columns:1fr 1fr;
         grid-gap:2rem;
         h3{text-transform:capitalize;}
         video{width:100%;}
         @media(max-width:760px){grid-template-columns:1fr;}
      }
   }
`;