import React, {useContext} from 'react';
import {DripContext} from '../context/context';
import {CartContext} from '../context/cart';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';

const Product = () => {
   const {products} = useContext(DripContext);
   const {addToCart} = useContext(CartContext);
   const {id} = useParams();

   const prod = products.find(itm => itm.id === parseInt(id));
   
   if(products.length === 0) return <Loading/>;
   else{
      // const {title, image:{url}, description} = prod;
      const {title, image, description} = prod;
      
      return (
         <div>
            {/* product id: {prod.id} */}
            <h3>{title}</h3>
            {/* <img src={url} alt="img"/> */}
            <img src={image} alt="img"/>
            <p>{description}</p>
            <button className="bttn bttn-blue" onClick={() => addToCart(prod)}>add to cart</button>
         </div>
      )
   }
}

export default Product
