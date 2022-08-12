import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {Stack} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {Paper} from "@mui/material";
import Axios from "axios";
import variables from "../../variables";
export default function Topbar(){

const Navigate=useNavigate()
function Logout(e){
    Axios({
        data:"",
        method:"POST",
        withCredentials:true,
        url:`${variables.back}/logout`
    })
}
    return<Paper>
        <Stack 
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        spacing={2}
        sx={{width:"100%"}}
        >
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
        >
       <IconButton onClick={(e)=>{
            Navigate('/home')
        }}> <HomeIcon/></IconButton>
        <div>AppCaixa</div>
        </Stack>
        <Stack/>
        <IconButton onClick={(e)=>{
            Logout()
            Navigate('/login')
        }}><LogoutIcon/></IconButton>
        </Stack>
        
    </Paper>
}