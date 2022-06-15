import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import Button from '@mui/material/Button'
import { Stack } from '@mui/material';
import {Backdrop,Paper} from '@mui/material';
export default function Listinput(props) {
  const [movie,setMovie]= useState(
  {
  imgsrc:'',
  title:'',
  review:''
  }
  )
  const [cara,setCara] = useState(false)
    return (
    <Box
      component="form"
      sx={{
        width:'100%',padding:"1%"
      }}
      noValidate
      autoComplete="off"
    >
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={cara}
      >
      <Paper sx={{width:'50%' ,padding:'2%'}}>
       <Stack
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{ width: "90%" }}>
      <TextField sx={{width:'100%'}} id="outlined-basic" label="imgsrc" variant="outlined" value={movie.imgsrc}
      onChange={(e)=>{
       setMovie({...movie,['imgsrc']:e.target.value}) 
      }}/>
      <TextField sx={{width:'100%'}} id="filled-basic" label="title" variant="outlined" value={movie.title}
      onChange={(e)=>{
       setMovie({...movie,['title']:e.target.value})
      }}/>
      <TextField sx={{width:'100%'}} id="standard-basic" label="review" variant="outlined" value={movie.review}
      onChange={(e)=>{
        setMovie({...movie,["review"]:e.target.value})
      }}/>
       <Stack
         direction="row"
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
       <Button color='error' variant='contained' size="large" onClick={(e)=>{
        //  props.apagarlista()
        setCara(false)
       }}>
         fechar

       </Button>
       </Stack>
       

       </Stack>
      </Paper>
    </Backdrop>
    <Button onClick={(e)=>{
    setCara(true)
    }}>
    Adicionar
    </Button>
      
    </Box>
  );
}