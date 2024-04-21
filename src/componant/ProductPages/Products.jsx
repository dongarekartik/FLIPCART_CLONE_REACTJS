 
 import React, { useEffect, useState } from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import { GetProduct } from '../../Redux/Slices/ProductSlice';
import { loginApi } from '../../ApiHandling';

 const Products = () => {
 const Dispatch = useDispatch()

  const ProductData = useSelector((state)=>state.product.data);

  useEffect(()=>{
    getData();
    Dispatch(GetProduct());
    // const x= loginApi();
    //   // console.log(x,'sdfghjk')
    //   setLoginData(x);
    

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
 