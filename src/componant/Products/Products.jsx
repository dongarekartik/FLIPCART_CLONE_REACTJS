 
 import React, { useEffect, useState } from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import { GetProduct } from '../../Redux/Slices/ProductSlice';
import { loginApi } from '../../ApiHandling';

 const Products = () => {
 const Dispatch = useDispatch()
//  const {data : products} = useSelector(state=>state.Products);
  const ProductData = useSelector((state)=>state.product);
  console.log(ProductData.data, "Data")
const [loginData,setLoginData]=useState(null) 

// const getData=async()=>{
//   const x=await loginApi();
//   console.log(x,'sdfghjk')
//   setLoginData(x);
// }
// getData();
  useEffect(()=>{
    Dispatch(GetProduct());
  
  },[])
  console.log(loginData,'loginData')
   return (
     <div>
       hi
     </div>
   );
 }
 
 export default Products;
 