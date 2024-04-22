import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material'
import { useSelector } from 'react-redux';



const Home = () => {
    // const {products}= useSelector((state)=>product.data)


    // console.log(products, "products ")

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

const BackgroundCompo = styled(Box)`
    padding : 10px;
    background : ##F2F2F2;
`;