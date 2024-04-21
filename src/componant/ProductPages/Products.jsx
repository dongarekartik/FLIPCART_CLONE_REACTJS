 
 import React, { useEffect } from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import { GetProduct } from '../../Redux/Slices/ProductSlice';

 const Products = () => {
 const Dispatch = useDispatch()

  const ProductData = useSelector((state)=>state.product.data);

  useEffect(()=>{
    Dispatch(GetProduct())
  },[])


   return (
     <div>
        {
          ProductData.map((items)=>{
            return <>
              <h1>{items.title}</h1>
              <h1>{items.price}</h1>
            </>
          })
        }
     </div>
   );
 }
 
 export default Products;
 