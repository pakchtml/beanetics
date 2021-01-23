import React, {useContext} from 'react';
import {DripContext} from '../context/context';
import {CartContext} from '../context/cart';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Featured from '../components/Featured';

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
                  <p>
                     {description}<br/><br/>
                     <Link to="/shop">Back to our shop</Link>
                  </p>
               </div>
               <p className="price">${price} for 16oz</p>
               <button className="bttn bttn-blue" onClick={() => addToCart(prod)}>add to cart</button>
            </div>
            <Featured heading="featured coffees" />
         </PRODUCT>
      )
   }
}

const PRODUCT = styled.div`
.main-contain{padding:3rem 0;}
   h3{
      font-family: 'Dancing Script',cursive;
      margin:1rem 0 2rem 0;
      font-size:3rem;
   }
   .product-{
      &content{
         display:flex;
         @media(max-width:900px){
            flex-direction:column;
         }
         img{flex:1;}
         p{
            flex:1;padding:0 1rem;
            font-size:1.35rem;line-height:1.4;
            @media(max-width:900px){
               padding:2rem 1rem;
            }
            a{
               color:var(--maroon);
               &:hover{color:var(--orange);}
            }
         }
      }
   }
   .price{margin-top:.5rem;}
   .bttn{border:none;}
`;

export default Product
