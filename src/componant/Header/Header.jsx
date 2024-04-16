
import React from 'react';
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import Search from '../Header/Search';
import CostomButtons from '../Header/CostomButtons';

const Header = () => {
    return (
        <AppBarr >
            <Toolbar style={{minHeight : 55 }}>
                <Boxx >
                    <img src={logoURL} alt='logo' style={{ width: '75px' }} />
                    <Box style={{display : 'flex'}}>
                        <Typographyy>Explore &nbsp;
                         <Box component='span' style={{color:'#ffE500'}}>plus</Box>
                        </Typographyy>
                        <Plusimage src={subURL} />
                    </Box>
                </Boxx>
                <Search/>
                <CostombuttonWrapper>
                    <CostomButtons/>
                </CostombuttonWrapper>
            </Toolbar>
        </AppBarr>
    );
}

export default Header;





const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const AppBarr = styled(AppBar)`
background: #2874f0;
height : 55px;
`;

const Boxx = styled(Box)`
  margin-left : 12%;
  line-height : 0;
`;

const Typographyy = styled(Typography)`
 font-size : 10px;
 font-style : italic;
`;
 const Plusimage = styled('img')({
    width : 10,
    height :12,
    marginLeft:5

 });

 const CostombuttonWrapper = styled(Box)`
  margin : 0 5% 0 auto ;
  align-items : center ;
 `;

