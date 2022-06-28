import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Backdrop, Paper } from "@mui/material";
import {categoryOptions} from '../data'
import MenuItem from '@mui/material/MenuItem';

export default function Listinput(props) {
  const [inputValue, setinputValue] = useState({
    imgsrc: "",
    title: "",
    review: "",
    category: "",
  });
  const [cara, setCara] = useState(false);
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        padding: "1%",
      }}
      noValidate
      autoComplete="off"
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={cara}
      >
        <Paper sx={{ width: "50%", padding: "2%" }}>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{ width: "90%" }}
          >
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="imgsrc"
              variant="outlined"
              value={inputValue.imgsrc}
              onChange={(e) => {
                setinputValue({ ...inputValue, ["imgsrc"]: e.target.value });
              }}
            />
            
            <TextField
              sx={{ width: "100%" }}
              id="filled-basic"
              label="title"
              variant="outlined"
              value={inputValue.title}
              onChange={(e) => {
                setinputValue({ ...inputValue, ["title"]: e.target.value });
              }}
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="review"
              variant="outlined"
              value={inputValue.review}
              onChange={(e) => {
                setinputValue({ ...inputValue, ["review"]: e.target.value });
              }}
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="category"
              variant="outlined"
              select
              value={inputValue.category}
              onChange={(e) => {
                setinputValue({ ...inputValue, ["category"]: e.target.value });
              }}
            >

              {categoryOptions().map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}

            </TextField>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="contained"
                size="large"
                onClick={(e) => {
                  let ValorPassadoProPai = inputValue;
                  inputValue.imgsrc &&
                    inputValue.title &&
                    inputValue.review &&
                    inputValue.category &&
                  props.pegarvalordofilho(ValorPassadoProPai);
                  setinputValue({
                    imgsrc: "",
                    title: "",
                    review: "",
                    category: "",
                  });
                }}
              >
                passar
              </Button>
              <Button
                color="error"
                variant="contained"
                size="large"
                onClick={(e) => {
                  //  props.apagarlista()
                  setCara(false);
                }}
              >
                fechar
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Backdrop>
      <Button
        onClick={(e) => {
          setCara(true);
        }}
      >
        Adicionar
      </Button>
    </Box>
  );
}
