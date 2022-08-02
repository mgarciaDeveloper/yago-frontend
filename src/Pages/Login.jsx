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
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login(props) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [posted, setPosted] = useState(false);
  const [erro, setErro] = useState({
    status: false,
    mensagem: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(values) {
    Axios({
      method: "POST",
      data: values,
      withCredentials: true,
      url: `${variables.backUrl}/login`,
    }).then((res) => {
      if(res.data.erro){
      } else {
        navigate("/home");
        window.location.reload();
      }
    });
  }
  return (
    <>
      <br />
      <br />

      <form style={{ width: "80%" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems={"center"}
          spacing={7}
          style={{ width: "90%", padding: "7%", backgroundColor: "white" }}
        >
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="username">Usuário</InputLabel>
            <OutlinedInput
              name="username"
              id="username"
              type="text"
              label="Usuário"
              text="Faça seu Login"
              required={true}
              value={values.username}
              onChange={(e) => {
                setValues({
                  ...values,
                  ["username"]: e.target.value,
                });
              }}
              endAdornment={
                <InputAdornment position="end">
                  {<AccountCircleIcon />}
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">Senha</InputLabel>
            <OutlinedInput
              name="password"
              id="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              text="Faça seu Login"
              required={true}
              value={values.password}
              onChange={(e) => {
                setValues({
                  ...values,
                  ["password"]: e.target.value,
                });
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>

          <Button
            onClick={() => {
              onSubmit(values);
            }}
          >
            Entrar
          </Button>
        </Stack>
      </form>
    </>
  );
}
