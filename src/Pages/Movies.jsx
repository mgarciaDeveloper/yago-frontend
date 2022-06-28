import React, { useState } from "react";
import Lista from "../Components/Lista/Lista";
import Listinput from "../Components/Moviesinput/listinput";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Category } from "@mui/icons-material";

export default function Movies() {
const lmovies =[ 
{
imgsrc:'https://rollingstone.uol.com.br/media/_versions/osincriveis-reprod-pixar_widelg.jpg',
title:'Os incriveis',
review:'Depois do governo banir o uso de superpoderes, o maior herói do planeta, o Sr. Incrível, vive de forma pacata com sua família. Apesar de estar feliz com a vida doméstica, o Sr. Incrível ainda sente falta dos tempos em que viveu como super-herói, e sua grande chance de entrar em ação novamente surge ',
category: 'Infantil'
},

]
const navigate = useNavigate()
const [movies,setMovies] = useState(lmovies)
return <div> 
<Button
      onClick={()=>{
        navigate('/home')
      }}
      
      >Home</Button> 
<Listinput 
   apagarlista={(listavazia)=>{
       return setMovies([])
   }}
   pegarvalordofilho ={(valordofilho)=>{
    // console.log(...lmovies)
    // console.log(lmovies)
    // console.log([lmovies])
    // console.log([...lmovies])
    return setMovies([valordofilho,...movies])
}} />
<Lista list={movies} 
delete={(valorclicado)=>{
    return setMovies([...movies].filter((e,i)=>{
        return valorclicado !== e
    }))
}}
/>
</div>
}
 