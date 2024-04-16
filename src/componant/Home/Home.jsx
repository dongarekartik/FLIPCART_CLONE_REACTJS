import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material'

const BackgroundCompo = styled(Box)`
    padding : 10px;
    background : ##F2F2F2;
`;

const Home = () => {
    return (
        <>
            <Navbar />
            <BackgroundCompo>
                <Banner />
            </BackgroundCompo>
        </>
    );
}

export default Home;
