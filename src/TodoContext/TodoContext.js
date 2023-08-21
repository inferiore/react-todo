import React from "react";
import {useLocalStorage} from "./useLocalStorage"
const TodoContext = React.createContext();

function TodoProvider({ children }){
    const[searchValue, setSearchValue]= React.useState("");
    const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage("Todos_V1",[]);
    const [openModal, setOpenModal] = React.useState(false);
    const completed = todos.filter(todo=>!!todo.completed).length;
    const total = todos.length;
    const  searchTodos = todos.filter(
        (todo) =>  (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
            );  
    const completeTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        ) 
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) =>{
        let  newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        ) 
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }
    const addTodo = (text =>{
        let newTodos = [...todos];
        newTodos.push({text:text, completed:false});
        saveTodos(newTodos);
    })
    return (
        <TodoContext.Provider value={{
            loading,
            error,            
            completed,
            total,
            setSearchValue,           
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
            addTodo
            
        }}>
            { children }
        </TodoContext.Provider>
    );
}
export {TodoContext, TodoProvider };