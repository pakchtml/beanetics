import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
// import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Featured from '../components/Featured';
import si from '../images/sideimg.png'

const Home = () => {
   return (
      <HOME>
         <Hero
            heading="experience benetics"
            // bgimg={herobg}
            bgimg="https://www.beanetics.com/wp-content/uploads/2013/12/slider_3.jpg"
            py="6rem"
         >
            <p>Come taste the evolution of coffee. We are a small roaster located in a small town of Northern Virginia and we love what we do! Come enjoy our coffee at home or in our community.</p>
            <Link to="/shop" className="bttn">Our Shop</Link>
         </Hero>
         <div className="main-contain">
            <div className="text-content">
               <h3>Welcome to Beanetics Coffee Roasters … the evolution of better coffee</h3>
               <p>We started roasting coffee as a hobby in our garage, but could not keep up with the demand of friends and family. Today we operate Annandale’s only independently owned micro coffee roasting facility. At Beanetics Coffee Roasters we want our customers to taste the full potential of a coffee bean by experiencing freshly-roasted coffee – before the aroma and taste is eroded through time. If you have never tasted coffee that has been recently roasted, you have never really enjoyed a true coffee experience. The evolution of better coffee starts at the source – the country of origin of the green coffee bean. We start by selecting the finest green coffee beans from a variety of growing regions around the world. We roast our beans to accent the unique flavor characteristics of each coffee, not burn the flavor out of them. Customers can watch as we use a computer controlled roaster in our glass-enclosed roasting room. We have single origin beans and blended roasts to satisfy a variety of tastes. Customers are able to enjoy our freshly roasted coffee, along with a bagel, muffin, authentic NY black-and-white cookie, or coffee cake. For those who prefer non-coffee drinks we offer a variety of smoothies, teas, and other beverages.</p>
            </div>
            <div className="img-content">
               <img src={si} alt="sideimg"/>
            </div>
         </div>
         {/* <Banner
            heading="have a look at our seasonal offerings"
            text="Although we carry a consistent stable of roasts, we also introduce new and special roasts for every season. This year we have a surprise. Come visit our store to see for yourself."
         ></Banner> */}
         <Featured heading="featured coffees"/>
      </HOME>
   )
}

export default Home

const HOME = styled.div`
position: relative;
   #Hero{
      color:var(--orange);
      p{
         font-size:1.25rem;line-height:1.6;
         margin:.5rem 0;
         color:var(--offwhite);
         span{color:var(--pri-blue);}
         a,a:visited{
            color:pink;
         }
      }
      @media(max-width:518px){
         p{font-size:1rem;}
         .bttn{font-size:1rem;}
      }
   }
   .main-contain{
      padding:4rem 0;
      line-height:1.6;
      display:flex;
      .text-content{
         flex:2;
         padding-right:2rem;
         h3{font-size:2rem;line-height:1.3;margin-bottom:1.5rem;text-transform:capitalize;}
         p{font-size:1.2rem;}
         @media(max-width:999px){
            h3{font-size:1.75rem;margin-bottom:1rem;}
            p{font-size:1rem;}
         }
         @media(max-width:849px){flex:1}
      }
      .img-content{
         flex:1;
         @media(max-width:849px){display:none;}
         img{
            width:100%;
            /* display:inline-block; */
         }
      }
   }
`;