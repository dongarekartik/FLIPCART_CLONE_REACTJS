import React, { useState } from 'react';
import { Box, Button, Typography, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDailog from '../Login/LoginDailog';



const CostomButtons = () => {
  const [open, seTopen] = useState(false)

  const openDilog = () => {
    seTopen(true)
  }

  return (
    <Wrapper>
      <LoginButton variant='contained' onClick={() => openDilog()}> login </LoginButton>

      <Typography style={{ marginTop: 3, width: 135 }}> Become a Saller </Typography>
      <Typography style={{ marginTop: 3, }}> more </Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDailog open={open} seTopen={seTopen} />
    </Wrapper>
  );
}

export default CostomButtons;



const Wrapper = styled(Box)`
display : flex ;
margin : 0 3% 0 auto;
& > button, & > p, & > div {
   margin-right : 40px;
  font-size : 16px;
  align-items : center ;
}
`

const Container = styled(Box)`
   display : flex ;
`;

const LoginButton = styled(Button)`
 color : #2874f0;
 background : #fff;
 text-transform : none ;
 padding : 5px , 4px;
 border-radius : 2px;
 box-shadow : none;
 font-weight: 600;
 height : 32px;
`;