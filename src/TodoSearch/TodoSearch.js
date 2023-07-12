import React from "react";
import "./TodoSearch.css";

function TodoSearch({setSearchValue}){
  

    return (
      <input placeholder="Cortar  cebolla" className="TodoSearch"
      onChange={
        (event) => {
          setSearchValue(event.target.value);
        }
      } name="todoSeacrh" id="todoSearch"
      />
    )
  }
  
 export {TodoSearch} ;
  