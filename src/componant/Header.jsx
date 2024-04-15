
import React from 'react';
import { AppBar, Box, Toolbar, styled } from "@mui/material"

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
     

const Boxx=styled(Box)`
  margin-left : 12%,
`;


const Header = () => {
    return (
        <AppBar sx={{ height: '55px', background: '#2874f0' }} >
            <Toolbar>
                <Boxx >
                  <img src={logoURL} alt='logo' style={{width:'75px'}}/>
                </Boxx>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
