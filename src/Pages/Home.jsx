import React from "react";
import { useNavigate } from "react-router-dom";
import ListaSimples from "../Components/Lista/ListaSimples";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

/* import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MenuBookIcon from "@mui/icons-material/MenuBook";
 */
export default function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      Hello! I'm at HOME
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            onClick={() => {
              navigate("/movies");
            }}
          >
            {/*  <LocalMoviesIcon /> */} Movies{" "}
          </Button>
          <Button
            onClick={() => {
              navigate("/books");
            }}
          >
            {" "}
            {/* <MenuBookIcon /> */}
            Books{" "}
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}
