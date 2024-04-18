import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material'
import { useState } from 'react';


const accountInitialvalu = {
  LogIn: {
    view: 'Login'
  },
  signup: {
    view: 'signup'
  }
}


const LoginDailog = ({ open, seTopen }) => {

  const [account, togleAccount] = useState(accountInitialvalu.LogIn)
  const HandleClose = () => {
    seTopen(false)
    togleAccount(accountInitialvalu.LogIn)
  }
const togleSignup =()=>{
  togleAccount(accountInitialvalu.signup)
}

  return (
    <Dialog open={open} onClose={() => HandleClose()} style={{ maxWidth: 'unset' }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant='h5'>Login</Typography>
            <Typography style={{ marginTop: 20 }}>Get accese to your orders, Whishlist and recommedation</Typography>
          </Image>
          {account.view === 'Login' ?
            <Wrapper>
              <TextField variant='standard' label='Enter E-mail/Moble No' />
              <TextField variant='standard' label='Password' />
              <Text>By continuing, you agree to flipkart's trms of use of privacy and policy</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: 'center' }}>Or</Typography>
              <RequestOtp>Request OTP </RequestOtp>
              <CreateAccunt onClick={()=>togleSignup()}>New to flipkart? Create an account </CreateAccunt>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant='standard' label='Enter Frist Name' />
              <TextField variant='standard' label='Enter Last Name' />
              <TextField variant='standard' label='Enetr User Name' />
              <TextField variant='standard' label='Enter Password' />
              <TextField variant='standard' label='Enter Phone No' />
              <RequestOtp>Continue</RequestOtp>
            </Wrapper>
          }

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
 background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) no-repeat center 85%;
 height : 83%;
 width : 27%;
 padding :45px 35px;
 &> p, > h5 {
  color : #ffffff;
  font-weight : 600;
 }
`;

const Wrapper = styled(Box)`
 display : flex;
 flex-direction : column;
 height :83%;
 padding : 25px 35px;
 flex : 1;
 & > div, & > button , & > p{
   margin-top : 20px;
 }
`;

const LoginButton = styled(Button)`
   text-transform : none ;
   background : #FB641B;
   color : #fff;
   height :48px;
   border-radius : 3px;
`;

const RequestOtp = styled(Button)`
    text-transform : none ;
   background : #fff;
   color : #2874f0;
   height :48px;
   border-radius : 3px;
   box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text = styled(Typography)`
   font-size : 10px;
   color : #878787;
`;

const CreateAccunt = styled(Typography)`
   font-size : 12px;
   text-align : center;
   color : #2874f0;
   font-weight : 600;
   cursor : pointer ;
`;