 
 import React, { useEffect } from 'react';
 import {useSelector, useDispatch} from 'react-redux'
 import { GetProduct } from '../../Redux/Slices/ProductSlice';

 const Products = () => {
 const Dispatch = useDispatch()
//  const {data : products} = useSelector(state=>state.Products);
  const ProductData = useSelector((state)=>state.Products.data);
  console.log(ProductData, "Data")

 
 console.log(products , "products")

  useEffect(()=>{
    Dispatch(GetProduct())
  },[])
   return (
     <div>
       
     </div>
   );
 }
 
 export default Products;
 