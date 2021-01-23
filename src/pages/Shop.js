import React, {useContext} from 'react';
import styled from 'styled-components';
import {DripContext} from '../context/context';
import Hero from '../components/Hero'
import Loading from '../components/Loading';
import Item from '../components/Item';

const Shop = () => {

   const {loading, products} = useContext(DripContext);

   return (
      loading ? <Loading/> :
      <SHOP>
         <Hero heading="take a look at our selections" bgimg="https://www.beanetics.com/wp-content/uploads/2013/12/slider_2.jpg">
            <p>Welcome to our shop. Take your time and look through our choices of fine coffees. We have choices from many regions and roasts.</p>
         </Hero>
         <div className="shop-products">
            {
               products.map(itm => <Item key={itm.id} {...itm}/>)
            }
         </div>
      </SHOP>
   );
};

export default Shop;

const SHOP = styled.div`
#Hero{
      color:var(--offwhite);
      p{
         font-size:1.25rem;line-height:1.6;
         margin:.5rem 0;
         color:var(--yellow);
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
.shop-products{
   max-width:1200px;
   margin:0 auto;
   padding:3rem 0;
   display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem;
   @media(max-width:849px){grid-template-columns:1fr 1fr;}
   @media(max-width:629px){grid-template-columns:1fr;}
}
`;
