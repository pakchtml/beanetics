import React, {useContext} from 'react';
import {DripContext} from '../context/context';
import {CartContext} from '../context/cart';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import styled from 'styled-components';

const Product = () => {
   const {products} = useContext(DripContext);
   const {addToCart} = useContext(CartContext);
   const {id} = useParams();

   const prod = products.find(itm => itm.id === parseInt(id));
   
   if(products.length === 0) return <Loading/>;
   else{
      // const {title, image:{url}, description} = prod;
      const {title, image, description, price} = prod;
      
      return (
         <PRODUCT>
            {/* product id: {prod.id} */}
            {/* <img src={url} alt="img"/> */}
            <div className="main-contain">

               <h3>{title}</h3>
               <div className="product-content">
                  <img src={image} alt="img"/>
                  <p>{description}</p>
               </div>
               <p>${price}</p>
               <button className="bttn bttn-blue" onClick={() => addToCart(prod)}>add to cart</button>
            </div>
         </PRODUCT>
      )
   }
}

const PRODUCT = styled.div`
   h3{
      margin:1rem 0;
      font-size:2rem;
   }
   .product-{
      &content{
         display:flex;
         img{flex:1;}
         p{
            flex:1;padding:0 1rem;
            font-size:1.5rem;line-height:1.4;
         }
      }
   }
`;

export default Product
