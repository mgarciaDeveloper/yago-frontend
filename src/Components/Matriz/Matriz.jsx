import React from "react";
import { Stack } from "@mui/material";

export default function Matriz(props) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%" }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ width: "95%", paddingTop: "3%" }}
      >
        {props.children}
      </Stack>
    </Stack>
  );
}
