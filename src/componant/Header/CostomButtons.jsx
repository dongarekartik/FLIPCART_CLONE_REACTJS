import React, { useState } from 'react';
import { Box, Button, Typography, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDailog from '../Login/LoginDailog';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const CostomButtons = () => {
  const [open, seTopen] = useState(false)

  const openDilog = () => {
    seTopen(true)
  }

  return (
    <Wrapper>
       
      <LoginButton variant='contained' onClick={() => openDilog()}><LockopenIcon/>Login </LoginButton>

      <Typography style={{ marginTop: 3, width: 135 }}> Become a Saller </Typography>
      <Typography style={{ marginTop: 3, }}> More </Typography>
      <Container>
        <ShoppingcartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDailog open={open} seTopen={seTopen} />
       <MoreertIcon/>
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
 margin-left : 40px;
`;

const LockopenIcon = styled(LockOpenIcon)`
   align-items : center ;
   font-size : 16px;
   margin-right : 10px;

`;

const ShoppingcartIcon = styled(ShoppingCartIcon)`
    margin-right : 5px;
`;

const MoreertIcon = styled(MoreVertIcon)`
 padding-top : 5px;
 item-align : center;
`