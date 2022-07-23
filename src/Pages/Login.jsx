// React and NPM imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




//Styling imports

//------- MUI cores
import Typography from "@mui/material/Typography"; // use it to any text style
import { Button, Box, LinearProgress, Zoom } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

//------- MUI icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Axios from "axios";
//urls
import variables from "../variables";


export default function Login(props){

    const navigate = useNavigate()
    const [login , setLogin] = useState({
        username:"",
        password:""
    })

    const [loading,setLoading] = useState(false)
    const [showIcon,setShowicon] = useState(true)
    
    function onSubmit(e){
       Axios({
        data:login,
        method:"POST",
        withcredentials:true,
        url:`${variables.back}/login`
       }).then((res)=>{
        res.data.erro?alert(res.data.mensagem) :navigate("/home")
       });
    }
    
    return(
        <>
        <form>
            <Stack 
            style={{
                backgroundColor:'white',
                padding:"7%",
                width:"80%",
            }}
            textAlign="center"
            >

            <FormControl>
                <InputLabel htmlFor="username">username</InputLabel>
                <OutlinedInput name="username"
                id="username"
                type="text"
                text="faca seu login"
                required="true"
                value={login.username}
                onChange={(e)=>{
                    setLogin({...login,["username"]:e.target.value})
                }}
                endAdornment={<InputAdornment position="end">
                    {<AccountCircleIcon/>}
                </InputAdornment>}
                >
                </OutlinedInput>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">password</InputLabel>
                <OutlinedInput name="password"
                id="password"
                type={showIcon?"text" : "password"}
                text="faca seu login"
                required="true"
                value={login.password}
                onChange={(e)=>{
                    setLogin({...login,['password']:e.target.value})
                }}
                endAdornment={<InputAdornment position="end"><IconButton onClick={(e)=>{
                setShowicon(!showIcon)
                }}>{!showIcon ? <VisibilityIcon /> : <VisibilityOffIcon/>  }
                    </IconButton>
                </InputAdornment>}
                >
                </OutlinedInput>
            </FormControl>
              <Button onClick={()=>{
                onSubmit()
              }}>entrar</Button>
            </Stack>
        </form>
        </>
    )

}