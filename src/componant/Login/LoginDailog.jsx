import React from 'react';
import Dialog from '@mui/material/Dialog';

const LoginDailog = ({open , seTopen}) => {
 const HandleClose=()=>{
    seTopen(false)
 }
  return (
    <Dialog open={open} onClose={()=>HandleClose()}>
      <p>heloow dilog here </p>
    </Dialog>
  );
}

export default LoginDailog;
