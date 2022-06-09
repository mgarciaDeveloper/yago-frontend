import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import Button from '@mui/material/Button'
import { Stack } from '@mui/material';
export default function Listinput(props) {
  const [movie,setMovie]= useState(
  {
  imgsrc:'',
  title:'',
  review:''
  }
  )
    return (
    <Box
      component="form"
      sx={{
        width:'100%', backgroundColor:"white",padding:"1%"
      }}
      noValidate
      autoComplete="off"
    >
      <Stack
         direction="row"
         justifyContent="center"
         alignItems="center"
         spacing={2}>
      <TextField id="outlined-basic" label="imgsrc" variant="outlined" value={movie.imgsrc}
      onChange={(e)=>{
       setMovie({...movie,['imgsrc']:e.target.value}) 
      }}/>
      <TextField id="filled-basic" label="title" variant="outlined" value={movie.title}
      onChange={(e)=>{
       setMovie({...movie,['title']:e.target.value})
      }}/>
      <TextField id="standard-basic" label="review" variant="outlined" value={movie.review}
      onChange={(e)=>{
        setMovie({...movie,["review"]:e.target.value})
      }}/>
       <Stack
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={2}>
       <Button variant="contained" size="large" onClick={(e)=>{
         let ValorPassadoProPai = movie
         movie.imgsrc && movie.title && movie.review &&
         props.pegarvalordofilho(ValorPassadoProPai)
         setMovie({
         imgsrc:'',
         title:'',
         review:''})
       }}>
          passar
       </Button>
       <Button color='error' variant='contained' onClick={(e)=>{
         props.apagarlista()
       }}>
         limpar lista

       </Button>
       </Stack>
       </Stack>
    </Box>
  );
}