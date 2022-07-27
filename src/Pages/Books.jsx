import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lista from "../Components/Lista/Lista";
import ListInput from "../Components/Input/ListInput";
export default function Books(props) {
  const [listOfBooks, setBooks] = useState([
    /*     {
      title: "Game of Thrones",
      author: "George",
      review: "An amazing adventure! ",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9wfzRPM8pWKcg22Mm0i5QC74l0L1Dr9qMw&usqp=CAU",
    }, */
  ]);
  const navigate = useNavigate();
  return (
    <div>
      <ListInput
        addItem={(valor) => {
          setBooks([valor, ...listOfBooks]);
        }}
      />
      <br />
      <hr />
      Hello World! I'm at Books
      <Lista list={listOfBooks} />
    </div>
  );
}
