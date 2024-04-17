import React from 'react';
import Dialog from '@mui/material/Dialog';
import {Box, Button, TextField, Typography , styled } from '@mui/material'

const LoginDailog = ({open , seTopen}) => {
 const HandleClose=()=>{
    seTopen(false)
 }
  return (
    <Dialog open={open} onClose={()=>HandleClose()}>
      <Component>
        <Image>

        </Image>
        <Box>
            <TextField variant='standard' label='Enter E-mail/Moble No'/>
            <TextField variant='standard' label='Password'/>
             <TextField>by continuing, you agree to flipkart's trms of use of privacy and policy</TextField>
             <Button>Login</Button>
             <Typography>Or</Typography>
             <Button>Request OTP </Button>
             <Typography>New to flipkart? Create an account </Typography>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDailog;


const Component = styled(Box)`
  height : 70vh;
  width : 90vh;

`;

const Image = styled(Box)`
 background : #2874f0;
 height : 100%;
 width : 40%;
`;