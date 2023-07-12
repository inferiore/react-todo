import {TodoCounter} from './TodoCounter';
import {TodoItem} from './TodoItem/TodoItem';
import {TodoList} from './TodoList/TodoList';
import {TodoSearch} from './TodoSearch/TodoSearch';
import {TodoCreateButton} from './TodoCreateButton/TodoCreateButton';
import React, { useState } from 'react';

// const defaultTodos =[
// {text:"Hacer el checking",completed:false},
// {text:"aprender React",completed:false},
// {text:"Aprender Manejo de array con javascript",completed:false},
// {text:"Activar el roaming",completed:false},
// {text:"Ir a comer algo",completed:true},
// ];
// localStorage.setItem("Todos_V1", JSON.stringify(defaultTodos));

function useLocalStorage(itemName,initialValueState)  {
  let defaultItem = JSON.parse(localStorage.getItem(itemName));
  if(!defaultItem){
    localStorage.setItem(itemName,JSON.stringify(initialValueState));
    defaultItem = initialValueState;
  }
  const [item,setItem] = React.useState();
  
  const saveItem = (newTodos)=>{
    localStorage.setItem(itemName,JSON.stringify(newTodos));
    setItem(newTodos);
  }
  
  return [
    defaultItem,
    saveItem
   ]
}

function App() {
  
  const[searchValue, setSearchValue]= React.useState("");
  const[todos,saveTodos] = useLocalStorage("Todos_V1",[]);
  let completed = todos.filter(todo=>!!todo.completed).length;
  let total = todos.length;

  
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
  
  return (
    <>
      <TodoCounter 
      total={total}  
      completed={completed}/>
      <TodoSearch
      setSearchValue={setSearchValue} 
      />
      <TodoList>
        {
          searchTodos.map(todo => (
            <TodoItem 
            key={todo.text} text={todo.text} completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            
            />
          ))
        }
      </TodoList>
      <TodoCreateButton/>
      </>
  );
}





export default App;
