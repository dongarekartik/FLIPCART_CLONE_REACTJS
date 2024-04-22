
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GetProduct } from '../../Redux/Slices/ProductSlice';
// import { loginApi } from '../../ApiHandling';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Button, Divider, Typography, styled } from '@mui/material'
import Countdown from 'react-countdown';


const Products = () => {
  const Dispatch = useDispatch()
  const ProductData = useSelector((state) => state.product.data);

  useEffect(() => {
    // getData();
    Dispatch(GetProduct());
    // const x= loginApi();
    //   // console.log(x,'sdfghjk')
    //   setLoginData(x);
  }, [])

  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}: {minutes}:{seconds} left</Box>
  }

  return (
    <Componant>
      <Deal>
        <DealText>Deal of the deys </DealText>
        <Timer>
          <img src={timerURL} alt='timer' style={{ width: 24 }} />
          <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
        </Timer>
        <ButtonStyle variant='contained' color='primary'>viwe all</ButtonStyle>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={400}
        keyBoardControl={true}
        centerMode={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {ProductData.map((items) => (
          <Box>
            <Img src={items.image} key={items.id} />
            <Text>{items.title}</Text>
            <Text style={{color : 'green'}}>{items.price}</Text>
            <Text>{items.category}</Text>
          </Box>
        ))}
      </Carousel>
    </Componant>
  );
}

export default Products;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Componant = styled(Box)`
   margin-top : 10px;
   background : #ffffff;
`;

const Deal = styled(Box)`
     padding : 15px;
     display : flex;
    
`;

const DealText = styled(Typography)`
   font-size : 22px;
   margin-right : 25px;
   font-weight : 6000;
   line-height : 32px;

`;

const Timer = styled(Box)`
      display : flex ;
      margin-left : 10px;
      align-items : center;       
`;

const ButtonStyle = styled(Button)`
   margin-left : auto;
   background-color : #2874f0;
   border-radius :
`;

const Img = styled('img')({
  width: 'auto',
  height: '150px',

}) 

const Text = styled(Typography)`
   font-size : 12px;
`