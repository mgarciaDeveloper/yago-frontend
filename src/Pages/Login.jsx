// React and NPM imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import variables from "../variables";
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
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login(props){
    const navigate = useNavigate()

    const [values , setvalues] = useState({
        username:"",
        password:""
    })

    const [loading,setLoading] = useState(false)
    const [showIcon,setShowicon] = useState(true)
    
    function onSubmit(values){
        Axios({
            method: "POST",
            data: values,
            withCredentials: true,
            url: `${variables.back}/login`,
          }).then((res) => {
            if(res.data.erro){
            } else {
              navigate("/home");
              window.location.reload();
            }
          });
    }
    
    return(
        <>
         <br />
         <br />

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
                required= {true}
                value={values.username}
                onChange={(e)=>{
                    setvalues({...values,["username"]:e.target.value})
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
                required={true}
                value={values.password}
                onChange={(e)=>{
                    setvalues({...values,['password']:e.target.value})
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
                onSubmit(values)
              }}>entrar</Button>
            </Stack>
        </form>
        </>
    )

}