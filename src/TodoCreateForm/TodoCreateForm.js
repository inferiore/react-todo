import React from "react";
import "./TodoCreateForm.css"
import { TodoContext } from "../TodoContext/TodoContext";
function TodoCreateForm(){
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const [newTodo,setNewTodo] = React.useState("");
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);        
    };
    const Cancel = ()=>{ setOpenModal(false)}
    const onChange = (event)=>{
        setNewTodo(event.target.value)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <textarea onChange={onChange} placeholder="Cortar Cebollas"/>
           
            <div className="TodoForm-buttonContainer">
                <button onClick={Cancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
            </form>
        </>
    )
}



export {TodoCreateForm};