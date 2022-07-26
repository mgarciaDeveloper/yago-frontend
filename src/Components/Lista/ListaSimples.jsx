import React from "react";

export default function ListaSimples(props) {
  return (
    <div>
      <h1 style={{ color: "red" }}>{props.children}</h1>
      <h4 style={{ color: "whitesmoke" }}>{props.variavel1}</h4>

      {props.array.map((e, i) => {
        return <p style={{ color: "white", backgroundColor: "gray" }}>{e}</p>;
      })}
    </div>
  );
}
