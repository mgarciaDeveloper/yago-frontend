import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ListInput(props) {
  const [movie, setMovie] = useState({
    title: "",
    imgsrc: "",
    review: "",
  });

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "whitesmoke",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="title"
        name="title"
        label="Título"
        variant="outlined"
        value={movie.title}
        onChange={(e) => {
          setMovie({
            ...movie,
            ["title"]: e.target.value,
          });
        }}
      />
      <TextField
        id="review"
        name="review"
        label="Review"
        variant="outlined"
        value={movie.review}
        onChange={(e) => {
          setMovie({
            ...movie,
            ["review"]: e.target.value,
          });
        }}
      />
      <TextField
        id="imgsrc"
        name="imgsrc"
        label="Image Source"
        variant="outlined"
        value={movie.imgsrc}
        onChange={(e) => {
          setMovie({
            ...movie,
            ["imgsrc"]: e.target.value,
          });
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          props.addItem(movie);
          setMovie({
            title: "",
            imgsrc: "",
            review: "",
          });
        }}
      >
        {" "}
        Adicinar Item
      </Button>
    </Box>
  );
}
