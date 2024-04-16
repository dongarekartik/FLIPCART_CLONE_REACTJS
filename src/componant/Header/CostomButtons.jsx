import React from 'react';
import {Box , Button, Typography , styled} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

const CostomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant='contained'> login </LoginButton>

      <Typography style={{marginTop : 3 , width : 135}}> becom a saller </Typography>
      <Typography style={{marginTop :3, }}> more </Typography>
      <Container>
         <ShoppingCartIcon/>
         <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
}

export default CostomButtons;
