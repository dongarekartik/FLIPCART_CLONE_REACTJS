import { useEffect, useState } from "react"
import axios from 'axios'
const loginApi=async(endpoint)=>{
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState(false);
        
        // (async()=>{
            try {
                setLoading(true)
                setError(false)
                const res=await axios.get('https://fakestoreapi.com/products');
                console.log(res.data,'hjk')
                setData(res.data);
                setLoading(false)
            } catch (error) {
                if(axios.isCancel(error)){
                    console.log("Request Canceled",error.message);
                    return
                }
                setError(true);
                setLoading(false)
            }
        // })()
    // },[])
// console.log('hiiiii')
    return {error,loading,data}
}

export {loginApi}