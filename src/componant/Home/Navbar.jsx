import React from 'react';
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../Constant/Navdata';

const Compoant = styled(Box)`
  display: flex ;
  margin : 55px 130px 0 130px;
  justify-content : space-between;
`;

const Container = styled(Box)`
  padding : 12px 8px ;
  ${'' /* text-align : center; */}
`;

const Text = styled(Typography)`
    font-size : 14px;
    text-align : center;
    font-wight : 600;
    font-family : inherit;

`;


const Navbar = () => {
    // console.log(navData, "data")
    return (
        <Compoant>
            {
                navData.map((item) => {
                    return (
                        <Container>
                            <img src={item.url} alt='imge' style={{ width: 64 }} />
                            <Text>{item.text}</Text>
                        </Container>
                    )
                })
            }
        </Compoant>
    );
}

export default Navbar;
