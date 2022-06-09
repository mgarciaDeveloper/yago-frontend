import React, { useState } from "react";
import Lista from "../Components/Lista";
import Listinput from "../Components/Moviesinput/listinput";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Movies() {
const lmovies =[ 
{
imgsrc:'https://rollingstone.uol.com.br/media/_versions/osincriveis-reprod-pixar_widelg.jpg',
title:'Os incriveis',
review:'Depois do governo banir o uso de superpoderes, o maior herói do planeta, o Sr. Incrível, vive de forma pacata com sua família. Apesar de estar feliz com a vida doméstica, o Sr. Incrível ainda sente falta dos tempos em que viveu como super-herói, e sua grande chance de entrar em ação novamente surge '

},
{
imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOja1xW53uVuYGy6vP42umFV8-7rOBJlZ5iQ&usqp=CAU",
title:"enrolados",
review:"O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz u"
},
]
const navigate = useNavigate()
const [movies,setMovies] = useState(lmovies)
return <div style={{width:"90%"}}> 
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
 