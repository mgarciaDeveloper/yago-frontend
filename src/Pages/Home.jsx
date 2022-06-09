import React from "react";
import Lista from "../Components/Lista";
import Moviesinput from  "../Components/Moviesinput/listinput"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Home(props) {
  const navigate = useNavigate()
  
  
  return <div> 
  <div>HOME</div>
  <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
         onClick={()=>{
           navigate('/books')
         }}
        >books</Button>




        <Button
         onClick={()=>{
          navigate('/movies')
        }}
        >movies</Button>
      </ButtonGroup>
    </Box>
    </div>;
}

