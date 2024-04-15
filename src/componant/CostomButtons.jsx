import React from 'react';
import {Box , Button, Typography , styled} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
display : flex ;
margin : 0 3% 0 auto;
& > button, & > p, & > div {
   margin-right : 40px;
  font-size : 14px;
}
`

const Container = styled(Box)`
   display : flex ;
`;

const CostomButtons = () => {
  return (
    <Wrapper>
      <Button variant='contained'> login </Button>

      <Typography style={{marginTop : 3 , width : 135}}> becom a saller </Typography>
      <Typography style={{marginTop :3, }}> more </Typography>
      <Container>
         <ShoppingCartIcon/>
      </Container>
    </Wrapper>
  );
}

export default CostomButtons;
