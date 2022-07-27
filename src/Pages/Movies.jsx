import React, { useState } from "react";
import Lista from "../Components/Lista/Lista";
import ListInput from "../Components/Input/ListInput";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const [listOfMovies, setlist] = useState([
    {
      title: "Interestellar",
      author: "steven Spielberg",
      review: "Way better than Star Wars!",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1inCUpr9piU8NFA_SL-m8bQDossAgaCOvw&usqp=CAU",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      Hello World! I'm at Movies
      <ListInput
        addItem={(valor) => {
          setlist([valor, ...listOfMovies]);
        }}
      />
      <br />
      <hr />
      <Lista
        deletar={(valorDoFilho) => {
          setlist(
            listOfMovies.filter((e, i) => {
              return e.title !== valorDoFilho;
            })
          );
        }}
        list={listOfMovies}
      />
    </div>
  );
}
