import "./TodoCounter.css";
function TodoCounter({total, completed}){
  if(completed==total){
    return (
      <h1 className="TodoCounter">
        Felicitacion has completado todos los TODOs
      </h1>
    )  
  }  
  return (
      <h1 className="TodoCounter">
        Has Completado <span>{completed}</span> de <span>{total} </span>TODOs
      </h1>
    )
  }
  

 export {TodoCounter} ;
  