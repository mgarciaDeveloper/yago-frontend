function categoryOptions() {
  return ["Romance", "Sci-Fi", "Suspense", "Aventura", "Infantil"];
}

function categoryColors() {
  return ['#F94C66', '#54BAB9', '#2E0249', '#3AB0FF', '#F2D1D1']
}

function retornaCorRelacionada(categoriadoitem){
  let indexofcategory =  categoryOptions().indexOf(categoriadoitem)
  let corcorrespondente = categoryColors()[indexofcategory]

  return corcorrespondente
}



export { categoryOptions, categoryColors,retornaCorRelacionada};
