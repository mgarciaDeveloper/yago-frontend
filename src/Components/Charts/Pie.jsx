import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, G2 } from "@ant-design/plots";
import { categoryOptions, categoryColors,retornaCorRelacionada} from "../data"
 export default  function DemoPie(props){
  const G = G2.getEngine("canvas");


  // Receber as funções acima da data.js: resolvido
  const obras = props.todasAsObras

  const data =categoryOptions().map((eo,i)=>{
    return{
      type:eo,
      value:obras.filter((each,i)=>{
        return each.category === eo
      }).length
    }
  })

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    pieStyle: ({ type }) => {
      return {
        fill: retornaCorRelacionada(type)
      };
    },

    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: retornaCorRelacionada(data.type)
          }
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: retornaCorRelacionada(data.type)
          }
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}/ ${data.percent * 100}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700
          }
        });
        return group;
      }
    },
    interactions: [
      {
        type: "pie-legend-active"
      },
      {
        type: "element-active"
      },
      {
        type: 'element-selected',
      },
    ]
  };
  return <Pie {...config} />;
};
  