// React and NPM imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

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



export default function Login(props){

    const navigate = useNavigate()
    const [login , setLogin] = useState({
        username:"",
        password:""
    })
    const [loading,setLoading] = useState(false)
    
    
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
                    setLogin([...login],e.target.value)
                }}
                endAdornment={<InputAdornment position="end">
                    {<AccountCircleIcon/>}
                </InputAdornment>}
                >
                </OutlinedInput>
            </FormControl>

            </Stack>
        </form>
        </>
    )


}