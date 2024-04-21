 
 import React, { useEffect, useState } from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import { GetProduct } from '../../Redux/Slices/ProductSlice';
import { loginApi } from '../../ApiHandling';

 const Products = () => {
 const Dispatch = useDispatch()
//  const {data : products} = useSelector(state=>state.Products);
  const ProductData = useSelector((state)=>state.product);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState(false);
      
  console.log(ProductData.data, "Data")
const [loginData,setLoginData]=useState(null) 

const getData=async()=>{

}

  useEffect(()=>{
    getData();
    Dispatch(GetProduct());
    // const x= loginApi();
    //   // console.log(x,'sdfghjk')
    //   setLoginData(x);
    

  },[])
  console.log(loginData,'loginData')
   return (
     <div>
       hi
     </div>
   );
 }
 
 export default Products;
 