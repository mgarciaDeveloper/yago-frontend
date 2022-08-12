import React from "react";
import { Stack } from "@mui/material";
import { Padding } from "@mui/icons-material";
export default function Matriz(props){
    
    return <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    spacing={2}
    sx={{ width: "100%" , padding:'5% 0 0 0' }}
    
  >
    <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    spacing={2}
    sx={{ width: "95%" }}
  >{props.children}

  </Stack>
  </Stack>
}