// eslint-disable-next-line no-unused-vars
import React from 'react'

import './App.css'
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Box  style={{marginTop : 54}}>
        <Home />
      </Box>
    </>
  )
}

export default App
