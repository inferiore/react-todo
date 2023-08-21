import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCreateButton.css";
import React, { useContext } from "react";
function TodoCreateButton({setOpenModal}){
    
    return (
        <button className="CreateTodoButton" 
        onClick={ 
            ()=>{setOpenModal(state => !state)}
        }
        >+</button>
    )
  }
  
 export {TodoCreateButton} ;
  