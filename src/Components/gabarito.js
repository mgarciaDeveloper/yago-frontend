<div style={{width:'10px', height:"10px", borderRadius:'100%', backgroundColor: `${retornaCorRelacionada(eo.category)}`  }} ></div>

function retornaCorRelacionada(categoriaDaObra) {
    let arrayDeCategorias = categoryOptions()
    let indexRelacionado = arrayDeCategorias.indexOf(categoriaDaObra)
    // romance -> 0
    // sci-fi -> 1
    //terror -> -1
    // infantil -> 4
  
    return categoryColors()[indexRelacionado]
  }