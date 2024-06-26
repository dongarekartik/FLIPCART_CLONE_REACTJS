import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder=' Search For products , Brand and More '
      />
      <SearchIcons>
        <SearchIcon/>
      </SearchIcons >
    </SearchContainer>
  );
}

export default Search;



const SearchContainer = styled(Box)`
    background : #fff;
    width : 38%;
    border-radius : 5px;
    margin-left : 10px;
    display : flex ;
`;
const InputSearchBase = styled(InputBase)`
   padding-left : 20px;
   width : 100%;
   font-size : unset;
`;

const SearchIcons = styled(Box)`
   color : blue ;
   padding : 5px ;
   display : flex  ;
`;